import AdBanner from './AdBanner';

export default function SideAd({ position }) {
  return (
    <div className={`hidden lg:block w-64 h-screen sticky top-0 ${position === 'left' ? 'left-0' : 'right-0'}`}>
      <div className='w-full h-full bg-red-200 flex items-center justify-center'>
        <AdBanner dataAdSlot='1097102084' dataAdFormat='auto' dataFullWidthResponsive={true} />
      </div>
    </div>
  );
}
