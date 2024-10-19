import Image from 'next/image';
import Link from 'next/link';
import { removeQuotes } from '@/src/lib/utils';

function FeaturedPost({ post }) {
  return (
    <div className='bg-background rounded-xl overflow-hidden shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl'>
      <div className='relative h-44 overflow-hidden'>
        <Image
          src={post.image}
          alt={post.title}
          layout='fill'
          objectFit='cover'
          className='transition-transform duration-300 ease-in-out transform hover:scale-110'
        />
      </div>

      <div className='p-4'>
        <h4 className='scroll-m-20 text-xl font-semibold tracking-tight mb-2 transition-colors duration-300 ease-in-out hover:text-primary'>
          {removeQuotes(post.title)}
        </h4>
        <Link href={`/article/${post.slug}`} className='text-blue-600 transition-colors duration-300 ease-in-out hover:text-blue-600/90'>
          Read more →
        </Link>
      </div>
    </div>
  );
}

export default function FeaturedPostsGrid({ posts }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      {posts.map((post) => (
        <FeaturedPost key={post.slug} post={post} />
      ))}
    </div>
  );
}
