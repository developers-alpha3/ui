'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Globe } from 'lucide-react';
import { categoryIcons, formatDate, removeQuotes } from '@/src/lib/utils';

const RecommendedArticles = ({ initialArticles, initialPage, totalPages, category }) => {
  const [articles, setArticles] = useState(initialArticles);
  const [page, setPage] = useState(initialPage);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(page < totalPages);

  const loadMoreArticles = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    try {
      const nextPage = page + 1;
      const url = `/api/articles?${category !== 'all' ? `category=${category}&` : ''}page=${nextPage}`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.articles.length > 0) {
        setArticles((prev) => [...(prev || []), ...data.articles]);
        setPage(nextPage);
        setHasMore(nextPage < data.totalpages);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error loading more articles:', error);
    } finally {
      setLoading(false);
    }
  }, [category, loading, page, hasMore]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100) {
        loadMoreArticles();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMoreArticles]);

  useEffect(() => {
    setArticles(initialArticles);
    setPage(initialPage);
    setHasMore(initialPage < totalPages);
  }, [category, initialArticles, initialPage, totalPages]);

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {articles.map((article) => {
          const CategoryIcon = categoryIcons[article.category.toLowerCase()] || Globe;
          return (
            <div
              key={article.id}
              className='bg-background rounded-xl overflow-hidden shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl'
            >
              <div className='relative h-44 overflow-hidden'>
                <Image
                  src={article.imagename ? `/images/${article.imagename}` : '/images/placeholder.png'}
                  alt={article.title}
                  layout='fill'
                  objectFit='cover'
                  className='transition-transform duration-300 ease-in-out transform hover:scale-110'
                />
              </div>
              <Link href={`/article/${article.id}`}>
                <div className='p-4'>
                  <h4 className='scroll-m-20 pb-2 text-xl font-semibold tracking-tight transition-colors duration-300 ease-in-out hover:text-primary'>
                    {removeQuotes(article.title)}
                  </h4>

                  <div className='flex items-center justify-between text-sm text-secondary-foreground'>
                    <p>{formatDate(article.isodate)}</p>

                    <div className='flex items-center'>
                      <CategoryIcon className='w-4 h-4 mr-1 transition-colors duration-300 ease-in-out' />
                      <span className='transition-colors duration-300 ease-in-out'>{article.category}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      {loading && <p className='text-center mt-4'>Loading more articles...</p>}
    </div>
  );
};

export default RecommendedArticles;
