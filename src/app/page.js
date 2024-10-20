import Header from './components/Header';
import CategoryBar from './components/CategoryBar';
import RecommendedArticles from './components/RecommendedArticles';
import FeaturedArticle from './components/FeaturedArticle';
import FeaturedPostsGrid from './components/FeaturedPostsGrid';

async function fetchArticles(category = 'All', page = 1, limit = 10) {
  let url = `${process.env.NEXT_PUBLIC_CONTENT_WRITER_HOST}/v1/articles?page=${page}&limit=${limit}`;

  if (category && category !== 'All') {
    url = `${url}&category=${category}`;
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
  const page = Number(searchParams?.page) || 1;
  const category = searchParams?.category || 'All';

  const { articles, currentPage, totalPages } = await fetchArticles(category, page, 10);

  return (
    <main className='min-h-screen bg-background'>
      <Header />

      <CategoryBar />

      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 py-8'>
        {articles && articles.length > 0 && (
          <section className='mb-12'>
            <h2 className='text-2xl font-bold mb-6'>Newest Article</h2>
            <FeaturedArticle article={articles[0]} />
          </section>
        )}

        {articles && articles.length > 3 && (
          <section className='mb-12'>
            <h2 className='text-2xl font-bold mb-6'>Featured Articles</h2>
            <FeaturedPostsGrid articles={articles.slice(1, 3)} />
          </section>
        )}

        {articles && articles.length > 4 && (
          <section>
            <h2 className='text-2xl font-bold mb-6'>More Great Articles</h2>
            <RecommendedArticles initialArticles={articles.slice(3)} initialPage={currentPage} totalPages={totalPages} category={category} />
          </section>
        )}
      </div>
    </main>
  );
}
