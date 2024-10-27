import Link from 'next/link';
import Image from 'next/image';
import remarkGfm from 'remark-gfm';
import { Globe } from 'lucide-react';
import Breadcrumb from './Breadcrumb';
import ReactMarkdown from 'react-markdown';
import { categoryIcons, formatDate } from '@/src/lib/utils';

export default function ArticleView({ article }) {
  const Icon = categoryIcons[article.category.toLowerCase()] || Globe;

  return (
    <div className='py-4 animate-in fade-in fade-out duration-500 translate-y-4'>
      <div className='w-full sm:w-[115%] relative sm:left-1/2 sm:-translate-x-1/2 mb-4'>
        <Breadcrumb category={article.category} />
      </div>

      <article className='mt-8'>
        <div className='relative w-full sm:w-[115%] sm:left-1/2 sm:-translate-x-1/2 aspect-[21/7] mb-16 overflow-hidden rounded-3xl shadow-[rgba(0,_0,_0,_0.2)_0px_40px_40px_-7px]'>
          <Image src={`/images/${article.imagename}`} alt={article.title || 'Article image'} fill className='object-cover' unoptimized />
        </div>

        <div className='bg-background px-4 sm:px-0'>
          <div className='mb-12'>
            <h1 className='text-3xl font-bold text-secondary-foreground mb-2 font-serif tracking-wide'>{article.title}</h1>
            <div className='flex justify-between items-center'>
              <p className='text-sm text-muted-foreground'>{formatDate(article.isodate)}</p>
              <div className='flex items-center'>
                <Icon size={18} className='mr-1' />
                <p className='text-sm font-medium'>{article.category}</p>
              </div>
            </div>
          </div>

          <div className='prose max-w-none space-y-6'>
            {article.content ? <ReactMarkdown remarkPlugins={[remarkGfm]}>{article.content}</ReactMarkdown> : <p>No content available for this article.</p>}
          </div>
        </div>
      </article>

      {article.recommendedArticles && Object.keys(article.recommendedArticles).length > 0 ? (
        <section className='mt-12'>
          <h2 className='text-2xl font-bold mb-4'>Recommended Articles</h2>
          <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {article.recommendedArticles?.map((article) => {
                const CategoryIcon = categoryIcons[article.category.toLowerCase()] || Globe;
                return (
                  <div
                    key={article.id}
                    className='bg-background rounded-xl overflow-hidden shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl'
                  >
                    <div className='relative h-44 overflow-hidden'>
                      <Image
                        layout='fill'
                        objectFit='cover'
                        alt={article.title}
                        src={`/images/${article.imagename}`}
                        className='transition-transform duration-300 ease-in-out transform hover:scale-110'
                      />
                    </div>
                    <Link href={`/articles/${article.slug}?id=${article.id}`}>
                      <div className='p-4'>
                        <h4 className='scroll-m-20 text-xl mb-2 font-semibold tracking-tight transition-colors duration-300 ease-in-out hover:text-primary'>
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
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
