import ArticleView from '../../components/ArticleView';
import Header from '../../components/Header';

async function getArticle(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/articles/${id}`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch article');
  }

  return res.json();
}

export default async function ArticlePage({ params }) {
  const article = await getArticle(params.id);

  return (
    <>
      <Header />

      <div className='max-w-4xl mx-auto px-6 sm:px-8 lg:px-12'>
        <ArticleView article={article} />
      </div>
    </>
  );
}
