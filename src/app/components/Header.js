import Link from 'next/link';
import Image from 'next/image';
const Header = () => {
  return (
    <header className='flex flex-col justify-center bg-primary sticky top-0 z-10 text-primary-foreground h-16 px-6'>
      <Link href='/'>
        <Image src='/assets/logo.svg' alt='FlickerRead Logo' width={280} height={160} className='' />
      </Link>
    </header>
  );
};

export default Header;
