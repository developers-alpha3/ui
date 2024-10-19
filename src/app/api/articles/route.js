import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const page = searchParams.get('page') || '1';

  const url = category ? `${process.env.NEXT_PUBLIC_API_URL}/api/v1/articles?category=${category}&page=${page}` : `${process.env.NEXT_PUBLIC_API_URL}/api/v1/articles?page=${page}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch articles');
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 });
  }
}
