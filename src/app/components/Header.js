import Link from 'next/link';

const Header = () => {
  return (
    <header className='flex flex-col justify-center bg-primary sticky top-0 z-10 text-primary-foreground h-16 px-8'>
      <Link href='/' className='w-fit'>
        <h1 className='scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0 font-petit'>Lucaread</h1>
      </Link>
    </header>
  );
};

export default Header;
