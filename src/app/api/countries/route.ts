import { NextResponse } from 'next/server';
import { getCountryData } from '@/lib/supabase';

export async function GET() {
  try {
    const countries = await getCountryData();
    
    // If no data from Supabase, return fallback data
    if (!countries || countries.length === 0) {
      const fallbackData = [
        {
          country: 'Turkey',
          plans: [
            {
              id: 1,
              country: 'Turkey',
              provider: 'Airalo',
              plan_name: 'Turkey 1GB',
              data_amount: '1GB',
              validity: '7 days',
              price: 4.50,
              currency: 'USD',
              hotspot_sharing: true,
              coverage: 'Nationwide',
              source_url: 'https://airalo.com/turkey-esim',
              is_active: true,
              created_at: '2024-01-15T00:00:00Z',
              updated_at: '2024-01-15T00:00:00Z'
            }
          ]
        }
      ];
      
      return NextResponse.json(fallbackData);
    }
    
    return NextResponse.json(countries);
  } catch (error) {
    console.error('Error fetching countries:', error);
    
    // Return fallback data on error
    const fallbackData = [
      {
        country: 'Turkey',
        plans: [
          {
            id: 1,
            country: 'Turkey',
            provider: 'Airalo',
            plan_name: 'Turkey 1GB',
            data_amount: '1GB',
            validity: '7 days',
            price: 4.50,
            currency: 'USD',
            hotspot_sharing: true,
            coverage: 'Nationwide',
            source_url: 'https://airalo.com/turkey-esim',
            is_active: true,
            created_at: '2024-01-15T00:00:00Z',
            updated_at: '2024-01-15T00:00:00Z'
          }
        ]
      }
    ];
    
    return NextResponse.json(fallbackData);
  }
} 