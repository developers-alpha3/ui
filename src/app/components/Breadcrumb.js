import Link from 'next/link';
import { categoryIcons } from '@/src/lib/utils';
import { ChevronRight, Home, Globe } from 'lucide-react';

export default function Breadcrumb({ category }) {
  const Icon = categoryIcons[category] || Globe;

  return (
    <nav className='flex' aria-label='Breadcrumb'>
      <ol className='inline-flex items-center space-x-1 md:space-x-3'>
        <li className='inline-flex items-center'>
          <Link href='/' className='inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600'>
            <Home className='w-4 h-4 mr-2' />
            Home
          </Link>
        </li>
        <li>
          <div className='flex items-center'>
            <ChevronRight className='w-4 h-4 text-gray-400' />
            <Link href={`/?category=${category}`} className='ml-1 inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2'>
              <Icon className='w-4 h-4 mr-2' />
              {category}
            </Link>
          </div>
        </li>
        <li aria-current='page'>
          <div className='flex items-center'>
            <ChevronRight className='w-4 h-4 text-gray-400' />
            <span className='ml-1 text-sm font-medium text-gray-500 md:ml-2'>Article</span>
          </div>
        </li>
      </ol>
    </nav>
  );
}
