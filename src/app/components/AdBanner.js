'use client';

import { useEffect } from 'react';

const AdBanner = ({ dataAdSlot, dataAdFormat, dataFullWidthResponsive }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <ins
      className='adsbygoogle'
      data-ad-slot={dataAdSlot}
      style={{ display: 'block' }}
      data-ad-format={dataAdFormat}
      data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_AD_CLIENT_ID}
      data-full-width-responsive={dataFullWidthResponsive.toString()}
    ></ins>
  );
};

export default AdBanner;
