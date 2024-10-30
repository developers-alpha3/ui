export default function Loading() {
  return (
    <div className='fixed top-16 left-0 right-0 h-1 bg-red-00 overflow-hidden z-50 transition-all duration-500  animate-in fade-in'>
      <div className='w-full h-full bg-gradient-to-r from-red-500 via-red-300 to-red-500 animate-loading-smooth'></div>
    </div>
  );
}
