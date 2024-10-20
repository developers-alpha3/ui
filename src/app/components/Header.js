'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import LoadingLine from './LoadingLine';

const Header = () => {
  return (
    <header className='bg-primary sticky top-0 z-50 text-primary-foreground p-4'>
      <div className='container mx-auto flex justify-start items-center px-6'>
        <Link href='/'>
          <h1 className='text-2xl font-bold font-serif'>JUST ONE READ</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
