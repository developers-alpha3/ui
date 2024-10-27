import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/src/lib/utils';

export default function FeaturedArticle({ article }) {
  return (
    <div className='relative group rounded-2xl overflow-hidden shadow-lg animate-in fade-in duration-300 hover:scale-105 hover:shadow-xl'>
      <Image
        alt={article.title}
        src={`/images/${article.imagename}`}
        width={800}
        height={500}
        className='object-cover w-full h-80 animate-in fade-in duration-300 group-hover:scale-110'
      />

      <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6'>
        <h2 className='text-2xl font-bold text-primary-foreground mb-2 font-serif'>{article.title}</h2>

        <p className='text-sm text-primary-foreground/90 mb-2'>{formatDate(article.isodate)}</p>

        <Link
          href={`/articles/${article.slug}?id=${article.id}`}
          className='text-blue-400 hover:underline transition-colors duration-300 ease-in-out hover:text-blue-400/90'
        >
          Read more →
        </Link>
      </div>
    </div>
  );
}
