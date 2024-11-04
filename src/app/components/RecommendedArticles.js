'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Globe } from 'lucide-react';
import { categoryIcons, formatDate } from '@/src/lib/utils';
import { useState, useEffect, useCallback, useRef } from 'react';

const RecommendedArticles = ({ initialArticles, initialPage, totalPages, category }) => {
  const [articles, setArticles] = useState(initialArticles);
  const [page, setPage] = useState(initialPage);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(page < totalPages);
  const [loadingMore, setLoadingMore] = useState(false);
  const loader = useRef(null);

  const loadMoreArticles = useCallback(async () => {
    if (loading || loadingMore || !hasMore) return;

    setLoadingMore(true);

    try {
      const nextPage = page + 1;
      const response = await fetch(`/api/articles?category=${encodeURIComponent(category)}&page=${nextPage}&limit=10`);
      const { articles: newArticles, totalPages: newTotalPages } = await response.json();

      if (newArticles && newArticles.length > 0) {
        setArticles((prev) => [...prev, ...newArticles]);
        setPage(nextPage);
        setHasMore(nextPage < newTotalPages);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error loading more articles:', error);
    } finally {
      setLoadingMore(false);
    }
  }, [category, loading, loadingMore, page, hasMore]);

  useEffect(() => {
    const handleObserver = (entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        loadMoreArticles();
      }
    };

    const options = {
      root: null,
      threshold: 1.0,
      rootMargin: '100px',
    };

    const observer = new IntersectionObserver(handleObserver, options);
    const currentLoader = loader.current;
    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
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
            <Link href={`/articles/${article.slug}?id=${article.id}`} key={article.id}>
              <div className='bg-background rounded-xl overflow-hidden shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl'>
                <div className='relative h-44 overflow-hidden'>
                  <Image
                    width={100}
                    height={100}
                    alt={article.title}
                    src={`/images/${article.imagename}`}
                    className='transition-transform duration-300 ease-in-out w-auto h-auto transform hover:scale-110'
                  />
                </div>

                <div className='p-4'>
                  <h4 className='scroll-m-20 pb-2 text-lg font-semibold tracking-tight transition-colors duration-300 ease-in-out hover:text-primary'>
                    {article.title}
                  </h4>

                  <div className='flex items-center justify-between text-sm text-secondary-foreground'>
                    <p>{formatDate(article.isodate)}</p>

                    <div className='flex items-center'>
                      <CategoryIcon className='w-4 h-4 mr-1 transition-colors duration-300 ease-in-out' />
                      <span className='transition-colors duration-300 ease-in-out'>{article.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {(hasMore || loadingMore) && (
        <div ref={loader} className='h-20 mt-4 flex items-center justify-center'>
          {loadingMore && <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-primary'></div>}
        </div>
      )}
    </div>
  );
};

export default RecommendedArticles;
