'use client';

import { useEffect } from 'react';

const AdBanner = ({ dataAdSlot, dataAdFormat, dataFullWidthResponsive, style }) => {
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
      style={{ display: 'block', ...style }}
      data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_AD_CLIENT_ID}
      data-full-width-responsive='true'
    ></ins>
  );
};

export default AdBanner;
