import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='bg-primary text-primary-foreground p-4'>
      <div className='container mx-auto flex justify-start items-center px-6'>
        <Link href='/'>
          <h1 className='text-2xl font-bold font-serif '>News Page</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
