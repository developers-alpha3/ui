'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/src/components/ui/button';
import {
  Globe,
  Briefcase,
  Tv,
  Shirt,
  Users,
  Laptop,
  Heart,
  GraduationCap,
  Rocket,
  Plane,
  Utensils,
  Sparkles,
  Coffee,
  Clapperboard,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

const categories = [
  { name: 'All', icon: Globe },
  { name: 'Politics', icon: Users },
  { name: 'Business', icon: Briefcase },
  { name: 'Beauty', icon: Heart },
  { name: 'Sports', icon: Coffee },
  { name: 'Entertainment', icon: Tv },
  { name: 'Technology', icon: Laptop },
  { name: 'Health', icon: Heart },
  { name: 'Education', icon: GraduationCap },
  { name: 'Influencers', icon: Users },
  { name: 'Startups', icon: Rocket },
  { name: 'Travel', icon: Plane },
  { name: 'Food', icon: Utensils },
  { name: 'Fashion', icon: Shirt },
  { name: 'Lifestyle', icon: Sparkles },
  { name: 'Movies', icon: Clapperboard },
];

const CategoryBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(searchParams.get('category') || 'All');

  useEffect(() => {
    const category = searchParams.get('category') || 'All';
    setCurrentCategory(category);

    if (!searchParams.get('category')) {
      const params = new URLSearchParams(searchParams);
      params.set('category', 'All');
      const newPath = `?${params.toString()}`;
      router.push(newPath, { shallow: true });
    }
  }, [searchParams, router]);

  const handleCategoryChange = (category) => {
    const params = new URLSearchParams(searchParams);
    params.set('category', category);
    const newPath = `?${params.toString()}`;
    router.push(newPath);
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const handleScroll = () => {
        setShowLeftArrow(container.scrollLeft > 0);
        setShowRightArrow(container.scrollLeft < container.scrollWidth - container.clientWidth);
      };

      container.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial state
      window.addEventListener('resize', handleScroll);

      return () => {
        container.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
      };
    }
  }, []);

  return (
    <div className='relative bg-secondary py-4'>
      <div className='flex items-center'>
        <div className='w-9 flex-shrink-0'>
          <Button
            variant='ghost'
            size='icon'
            className={`transition-opacity duration-300 ${showLeftArrow ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            onClick={() => scroll('left')}
          >
            <ChevronLeft className='h-4 w-4' />
          </Button>
        </div>
        <div ref={scrollContainerRef} className='flex-grow overflow-x-auto scrollbar-hide'>
          <div className='flex gap-2 px-4 pl-0'>
            {categories.map(({ name, icon: Icon }) => (
              <Button
                key={name}
                variant={currentCategory === name ? 'default' : 'outline'}
                onClick={() => handleCategoryChange(name)}
                className='flex items-center gap-2 whitespace-nowrap'
              >
                <Icon size={18} />
                {name}
              </Button>
            ))}
          </div>
        </div>
        <div className='w-9 flex-shrink-0'>
          <Button
            variant='ghost'
            size='icon'
            className={`transition-opacity duration-300 ${showRightArrow ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            onClick={() => scroll('right')}
          >
            <ChevronRight className='h-4 w-4' />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;
