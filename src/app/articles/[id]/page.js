import ArticleView from '../../components/ArticleView';

async function getArticle(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CONTENT_WRITER_HOST}/v1/articles/${id}`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch article');
  }

  return res.json();
}

export default async function ArticlePage({ params, searchParams }) {
  const id = searchParams.id || params.id;
  const article = await getArticle(id);

  return (
    <div className='max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 bg-background'>
      <ArticleView article={article} />
    </div>
  );
}
