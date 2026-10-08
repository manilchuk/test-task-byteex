import { NextResponse } from 'next/server';
import { writeClient } from '@/sanity/lib/writeClient';

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { name, text, rating, website } = body as {
    name?: string;
    text?: string;
    rating?: number;
    website?: string;
  };

  if (website) {
    return NextResponse.json({ ok: true });
  }

  const trimmedName = typeof name === 'string' ? name.trim() : '';
  const trimmedText = typeof text === 'string' ? text.trim() : '';

  if (!trimmedName || !trimmedText) {
    return NextResponse.json({ error: 'Name and review text are required' }, { status: 400 });
  }

  if (trimmedName.length > 100 || trimmedText.length > 2000) {
    return NextResponse.json({ error: 'The text is too long' }, { status: 400 });
  }

  if (typeof rating !== 'number' || !Number.isInteger(rating) || rating < 1 || rating > 5) {
    return NextResponse.json(
      { error: 'Rating must be an integer between 1 and 5' },
      { status: 400 }
    );
  }

  try {
    await writeClient.create({
      _type: 'reviewSubmission',
      name: trimmedName,
      text: trimmedText,
      rating,
      submittedAt: new Date().toISOString(),
      reviewed: false,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Failed to save review submission:', error);
    return NextResponse.json({ error: 'Something went wrong, please try again' }, { status: 500 });
  }
}
