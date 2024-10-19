import Header from './components/Header';
import CategoryBar from './components/CategoryBar';
import RecommendedArticles from './components/RecommendedArticles';
import FeaturedArticle from './components/FeaturedArticle';
import FeaturedPostsGrid from './components/FeaturedPostsGrid';

async function getArticles(category = 'All', page = 1, limit = 10) {
  const url = `${process.env.NEXT_PUBLIC_URL}/api/articles?${category !== 'All' ? `category=${category}&` : ''}page=${page}&limit=${limit}`;
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch articles');
  }
  return res.json();
}

export default async function Home({ searchParams }) {
  const category = searchParams?.category || 'All';
  const page = Number(searchParams?.page) || 1;
  const { articles, currentPage, totalPages } = await getArticles(category, page, 10);

  // Use the first article as the featured post
  const featuredPost = articles[0]
    ? {
        slug: articles[0].id,
        title: articles[0].title,
        image: articles[0].imagename ? `/images/${articles[0].imagename}` : '/images/placeholder.png',
        date: new Date(articles[0].isodate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      }
    : null;

  // Use the next two articles for the featured posts grid
  const featuredPosts = articles.slice(1, 3).map((article) => ({
    slug: article.id,
    title: article.title,
    image: article.imagename ? `/images/${article.imagename}` : '/images/placeholder.png',
    date: new Date(articles[0].isodate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
  }));

  // Use the remaining articles for the news grid
  const remainingArticles = articles.slice(3);

  return (
    <main className='min-h-screen bg-background'>
      <Header />

      <CategoryBar />

      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 py-8'>
        {featuredPost && (
          <section className='mb-12'>
            <h2 className='text-2xl font-bold mb-6'>Newest Article</h2>
            <FeaturedArticle post={featuredPost} />
          </section>
        )}

        {featuredPosts.length > 0 && (
          <section className='mb-12'>
            <h2 className='text-2xl font-bold mb-6'>Featured Articles</h2>
            <FeaturedPostsGrid posts={featuredPosts} />
          </section>
        )}

        <section>
          <h2 className='text-2xl font-bold mb-6'>More Great Articles</h2>
          <RecommendedArticles initialArticles={remainingArticles} initialPage={currentPage} totalPages={totalPages} category={category} />
        </section>
      </div>
    </main>
  );
}
