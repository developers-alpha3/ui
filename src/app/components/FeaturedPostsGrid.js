import Image from 'next/image';
import Link from 'next/link';

function FeaturedPost({ article }) {
  return (
    <div className='bg-background rounded-xl overflow-hidden shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl'>
      <div className='relative h-44 overflow-hidden'>
        <Image
          alt={article.title}
          src={`/images/${article.imagename}`}
          width={100}
          height={100}
          className='transition-transform duration-300 ease-in-out w-auto h-auto transform hover:scale-110'
        />
      </div>

      <div className='p-4'>
        <h4 className='scroll-m-20 text-xl font-semibold tracking-tight mb-2 transition-colors duration-300 ease-in-out hover:text-primary'>{article.title}</h4>
        <Link href={`/articles/${article.slug}?id=${article.id}`} className='text-blue-600 transition-colors duration-300 ease-in-out hover:text-blue-600/90'>
          Read more →
        </Link>
      </div>
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
