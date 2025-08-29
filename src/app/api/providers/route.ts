import { NextResponse } from 'next/server';
import { getProviders } from '@/lib/sheets';

export async function GET() {
  try {
    const providers = await getProviders();
    return NextResponse.json(providers);
  } catch (error) {
    console.error('Error fetching providers:', error);
    return NextResponse.json(
      { error: 'Failed to fetch providers data' },
      { status: 500 }
    );
  }
} 