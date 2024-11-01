import { Suspense } from 'react';
import CategoryBar from './components/CategoryBar';
import RecommendedArticles from './components/RecommendedArticles';
import FeaturedArticle from './components/FeaturedArticle';
import FeaturedPostsGrid from './components/FeaturedPostsGrid';

async function fetchArticles(category, page, limit) {
  const url = new URL(`${process.env.CONTENT_WRITER_HOST}/v1/articles`);

  url.searchParams.append('page', page);
  url.searchParams.append('limit', limit);

  if (category !== 'all') {
    url.searchParams.append('category', category);
  }

  try {
    const response = await fetch(url, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error(`Failed to fetch articles: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    return { error: error.message };
  }
}

export default async function Home({ searchParams }) {
  const page = 1;
  const limit = 20;
  const category = searchParams.category || 'all';

  const { articles, currentPage, totalPages } = await fetchArticles(category, page, limit);

  return (
    <main className='min-h-screen animate-in fade-in fade-out duration-500'>
      <CategoryBar />

      <Suspense fallback={null}>
        <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 py-8'>
          {articles && articles.length > 0 && (
            <section className='mb-12'>
              <h2 className='text-2xl font-bold mb-6 font-serif'>Newest Article</h2>
              <FeaturedArticle article={articles[0]} />
            </section>
          )}

          {articles && articles.length >= 3 && (
            <section className='mb-12'>
              <h2 className='text-2xl font-bold mb-6 font-serif'>Featured Articles</h2>
              <FeaturedPostsGrid articles={articles.slice(1, 3)} />
            </section>
          )}

          {articles && articles.length >= 4 && (
            <section>
              <h2 className='text-2xl font-bold mb-6 font-serif'>More Great Articles</h2>
              <RecommendedArticles initialArticles={articles.slice(3)} initialPage={currentPage} totalPages={totalPages} category={category} />
            </section>
          )}
        </div>
      </Suspense>
    </main>
  );
}
