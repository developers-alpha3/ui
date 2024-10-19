import { getServerSideSitemap } from 'next-sitemap';

export const getServerSideProps = async (ctx) => {
  // Fetch all articles from your API
  const response = await fetch('http://localhost:4178/v1/articles?limit=1000');
  const data = await response.json();

  const fields = data.articles.map((article) => ({
    loc: `https://www.yournewspage.com/article/${article.id}`,
    lastmod: article.isoDate,
  }));

  return getServerSideSitemap(ctx, fields);
};

export default function Sitemap() {}
