import Image from 'next/image';
import Link from 'next/link';
import { formatDate, categoryIcons } from '@/src/lib/utils';

function FeaturedPost({ article }) {
  const CategoryIcon = categoryIcons[article.category.toLowerCase()] || Globe;
  return (
    <div className='bg-background rounded-xl overflow-hidden shadow-md animate-in fade-in duration-300 hover:scale-105 hover:shadow-xl'>
      <Link href={`/articles/${article.slug}?id=${article.id}`}>
        <div className='relative h-44 overflow-hidden'>
          <Image
            alt={article.title}
            src={`/images/${article.imagename}`}
            width={100}
            height={100}
            className='animate-in fade-in duration-300 w-auto h-auto hover:scale-110'
          />
        </div>
        <div className='p-4'>
          <h4 className='scroll-m-20 text-xl font-semibold tracking-tight mb-2 transition-colors duration-300 ease-in-out hover:text-primary'>
            {article.title}
          </h4>

          <div className='flex items-center justify-between text-sm text-secondary-foreground'>
            <p>{formatDate(article.isodate)}</p>

            <div className='flex items-center'>
              <CategoryIcon className='w-4 h-4 mr-1 transition-colors duration-300 ease-in-out' />
              <span className='transition-colors duration-300 ease-in-out'>{article.category}</span>
            </div>
          </div>
          {/* <Link href={`/articles/${article.slug}?id=${article.id}`} className='text-blue-600 transition-colors duration-300 ease-in-out hover:text-blue-600/90'>
            Read more →
          </Link> */}
        </div>
      </Link>
    </div>
  );
}

export default function FeaturedPostsGrid({ articles }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      {articles?.map((article) => (
        <FeaturedPost key={article.id} article={article} />
      ))}
    </div>
  );
}
