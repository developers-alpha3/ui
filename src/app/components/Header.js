import Link from 'next/link';
import Image from 'next/image';
const Header = () => {
  return (
    <header className='flex flex-col justify-center bg-primary sticky top-0 z-10 text-primary-foreground h-16 px-8'>
      <Link href='/'>
        <h1 className='scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 font-petit'>Lucaread</h1>
      </Link>
    </header>
  );
};

export default Header;
