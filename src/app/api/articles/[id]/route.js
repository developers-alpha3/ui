import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const id = params.id;
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_CONTENT_WRITER_HOST}/v1/articles/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch article');
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching article:', error);
    return NextResponse.json({ error: 'Failed to fetch article' }, { status: 500 });
  }
}
