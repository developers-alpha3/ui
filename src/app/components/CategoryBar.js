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
  { name: 'All', icon: Globe, code: 'all' },
  { name: 'Politics', icon: Users, code: 'politics' },
  { name: 'Business', icon: Briefcase, code: 'business' },
  { name: 'Beauty', icon: Heart, code: 'beauty' },
  { name: 'Sports', icon: Coffee, code: 'sports' },
  { name: 'Entertainment', icon: Tv, code: 'entertainment' },
  { name: 'Technology', icon: Laptop, code: 'technology' },
  { name: 'Health', icon: Heart, code: 'health' },
  { name: 'Education', icon: GraduationCap, code: 'education' },
  { name: 'Influencers', icon: Users, code: 'influencers' },
  { name: 'Startups', icon: Rocket, code: 'startups' },
  { name: 'Travel', icon: Plane, code: 'travel' },
  { name: 'Food', icon: Utensils, code: 'food' },
  { name: 'Fashion', icon: Shirt, code: 'fashion' },
  { name: 'Lifestyle', icon: Sparkles, code: 'lifestyle' },
  { name: 'Movies', icon: Clapperboard, code: 'movies' },
];

const CategoryBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(undefined);

  useEffect(() => {
    const category = searchParams.get('category') || 'all';
    setCurrentCategory(category);

    if (!searchParams.get('category')) {
      const params = new URLSearchParams(searchParams);
      params.set('category', 'all');
      const newPath = `?${params.toString()}`;
      router.push(newPath, { shallow: true });
    }
  }, [searchParams, router]);

  const handleCategoryChange = (category) => {
    const params = new URLSearchParams(searchParams);
    params.set('category', category.toLowerCase());
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
            {categories.map(({ name, code, icon: Icon }) => (
              <Button
                key={code}
                variant={currentCategory === code ? 'default' : 'outline'}
                onClick={() => handleCategoryChange(code)}
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
