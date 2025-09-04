import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/esim/turkey',
  },
}

'use client';

import { useState, useEffect } from 'react';
import { ESIMPlan } from '@/lib/supabase';
import PlanComparisonTable from '@/components/PlanComparisonTable';
import Link from 'next/link';

export default function TurkeyPage() {
  const [turkeyPlans, setTurkeyPlans] = useState<ESIMPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTurkeyPlans();
  }, []);

  const fetchTurkeyPlans = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Try to fetch from API route first
      const response = await fetch('/api/turkey-plans');
      if (response.ok) {
        const plans = await response.json();
        setTurkeyPlans(plans);
      } else {
        // Fallback to mock data
                 setTurkeyPlans([
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
             source_url: 'https://airalo.com',
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
             source_url: 'https://holafly.com',
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
             source_url: 'https://nomadsim.com',
             is_active: true,
             created_at: '2024-01-15T00:00:00Z',
             updated_at: '2024-01-15T00:00:00Z'
           },
         ]);
      }
    } catch (err) {
      console.error('Error fetching Turkey plans:', err);
      setError('Failed to load Turkey plans');
      // Set fallback data even on error
             setTurkeyPlans([
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
           source_url: 'https://airalo.com',
           is_active: true,
           created_at: '2024-01-15T00:00:00Z',
           updated_at: '2024-01-15T00:00:00Z'
         },
       ]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Turkey eSIM plans...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Link href="/" className="text-red-200 hover:text-white mr-4 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold">
                🇹🇷 Turkey eSIM Plans
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-red-100">
              Best eSIM deals for Turkey - Stay connected while exploring
            </p>
          </div>
        </div>
      </header>

      <div className="bg-red-50 border-b border-red-100 text-center text-sm text-red-800 py-3">
        <span className="font-semibold">Local tip:</span> İstanbul ve kıyı bölgelerinde 5G hızları yüksek; Kapadokya ve otoyollarda kapsama için Türk Telekom/Vodafone şebekeli planlar daha tutarlı olabilir.
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {error && (
          <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded-lg mb-6">
            <p className="font-medium">⚠️ Note:</p>
            <p>{error}. Showing sample data for demonstration.</p>
          </div>
        )}

        {/* Turkey Info */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose eSIM for Turkey?</h2>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  No roaming charges
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Instant activation upon arrival
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Keep your original number active
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Fast 4G/5G coverage nationwide
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Popular Turkish Destinations</h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                <div>• Istanbul</div>
                <div>• Cappadocia</div>
                <div>• Antalya</div>
                <div>• Pamukkale</div>
                <div>• Bodrum</div>
                <div>• Izmir</div>
                <div>• Ankara</div>
                <div>• Fethiye</div>
              </div>
            </div>
          </div>
        </div>

        {/* Plans Table */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <PlanComparisonTable 
            plans={turkeyPlans}
            title="Compare Turkey eSIM Plans"
          />
        </div>

        {/* Tips Section */}
        <div className="bg-blue-50 rounded-lg p-6 mt-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">💡 Tips for Using eSIM in Turkey</h3>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h4 className="font-semibold mb-2">Before You Travel:</h4>
              <ul className="space-y-1 text-sm">
                <li>• Check if your device supports eSIM</li>
                <li>• Purchase your eSIM plan before departure</li>
                <li>• Download the QR code to your photos</li>
                <li>• Keep your physical SIM for emergencies</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">In Turkey:</h4>
              <ul className="space-y-1 text-sm">
                <li>• Activate eSIM after landing</li>
                <li>• Check data usage regularly</li>
                <li>• Use Wi-Fi when available to save data</li>
                <li>• Download offline maps before exploring</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-400">
              Compare the best eSIM plans for Turkey and travel with confidence
            </p>
            <Link href="/" className="text-blue-400 hover:text-blue-300 mt-2 inline-block">
              ← Back to all countries
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
} 