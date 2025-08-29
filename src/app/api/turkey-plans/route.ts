import { NextResponse } from 'next/server';
import { getTurkeyPlans } from '@/lib/supabase';

export async function GET() {
  try {
    const plans = await getTurkeyPlans();
    
    // If no plans from Supabase, return fallback data
    if (!plans || plans.length === 0) {
      const fallbackPlans = [
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
        },
        {
          id: 2,
          country: 'Turkey',
          provider: 'Holafly',
          plan_name: 'Turkey Unlimited',
          data_amount: 'Unlimited',
          validity: '5 days',
          price: 19.00,
          currency: 'USD',
          hotspot_sharing: false,
          coverage: 'Nationwide',
          source_url: 'https://holafly.com/turkey-esim',
          is_active: true,
          created_at: '2024-01-15T00:00:00Z',
          updated_at: '2024-01-15T00:00:00Z'
        },
        {
          id: 3,
          country: 'Turkey',
          provider: 'Nomad',
          plan_name: 'Turkey 3GB',
          data_amount: '3GB',
          validity: '30 days',
          price: 8.00,
          currency: 'USD',
          hotspot_sharing: true,
          coverage: 'Nationwide',
          source_url: 'https://getnomad.app/turkey-esim',
          is_active: true,
          created_at: '2024-01-15T00:00:00Z',
          updated_at: '2024-01-15T00:00:00Z'
        }
      ];
      
      return NextResponse.json(fallbackPlans);
    }
    
    return NextResponse.json(plans);
  } catch (error) {
    console.error('Error fetching Turkey plans:', error);
    
    // Return fallback data on error
    const fallbackPlans = [
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
    ];
    
    return NextResponse.json(fallbackPlans);
  }
} 