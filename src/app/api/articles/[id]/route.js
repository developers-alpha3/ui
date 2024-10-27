import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const url = new URL(`${process.env.CONTENT_WRITER_HOST}/v1/articles/${params.id}`);

  try {
    const response = await fetch(url, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error(`Failed to fetch articles: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
