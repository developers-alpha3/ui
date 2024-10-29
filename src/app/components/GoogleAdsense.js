import Script from 'next/script';

const GoogleAdsense = () => {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${process.env.NEXT_PUBLIC_GOOGLE_AD_CLIENT_ID}`}
      crossOrigin='anonymous'
      strategy='afterInteractive'
    />
  );
};

export default GoogleAdsense;
