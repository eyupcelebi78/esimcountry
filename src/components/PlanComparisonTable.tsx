import { createCountrySlug } from '@/lib/supabase';
import Link from 'next/link';

interface ESIMPlan {
  id?: number;
  country: string;
  provider: string;
  plan_name: string;
  data_amount: string;
  validity: string;
  price: number | string;
  currency: string;
  hotspot_sharing: boolean | string;
  coverage?: string;
  source_url: string;
  is_active?: boolean;
  created_at?: string;
  updated_at?: string;
  // Legacy Google Sheets format support
  Country?: string;
  Provider?: string;
  PlanName?: string;
  DataAmount?: string;
  Validity?: string;
  Price?: string;
  Currency?: string;
  HotspotSharing?: string;
  Coverage?: string;
  SourceURL?: string;
  LastChecked?: string;
  Notes?: string;
}

interface PlanComparisonTableProps {
  plans: ESIMPlan[];
  title?: string;
  showCountryLinks?: boolean;
}

export default function PlanComparisonTable({ plans, title, showCountryLinks = false }: PlanComparisonTableProps) {
  if (!plans.length) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No plans available for this country.</p>
      </div>
    );
  }

  // Normalize plan data (support both new Supabase format and legacy Google Sheets format)
  const normalizedPlans = plans.map(plan => ({
    country: plan.country || plan.Country || '',
    provider: plan.provider || plan.Provider || '',
    plan_name: plan.plan_name || plan.PlanName || '',
    data_amount: plan.data_amount || plan.DataAmount || '',
    validity: plan.validity || plan.Validity || '',
    price: typeof plan.price === 'number' ? plan.price : parseFloat(plan.Price || '0'),
    currency: plan.currency || plan.Currency || 'USD',
    hotspot_sharing: typeof plan.hotspot_sharing === 'boolean' 
      ? plan.hotspot_sharing 
      : (plan.HotspotSharing?.toLowerCase().includes('yes') || plan.HotspotSharing?.toLowerCase().includes('allowed')),
    coverage: plan.coverage || plan.Coverage || '',
    source_url: plan.source_url || plan.SourceURL || '',
    updated_at: plan.updated_at || plan.LastChecked || ''
  }));

  return (
    <div className="w-full">
      {title && (
        <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
      )}
      
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full bg-white border border-gray-200">
          <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <tr>
              {showCountryLinks && <th className="px-4 py-4 text-left font-semibold">Country</th>}
              <th className="px-4 py-4 text-left font-semibold">Provider</th>
              <th className="px-4 py-4 text-left font-semibold">Plan Name</th>
              <th className="px-4 py-4 text-left font-semibold">Data</th>
              <th className="px-4 py-4 text-left font-semibold">Validity</th>
              <th className="px-4 py-4 text-left font-semibold">Price</th>
              <th className="px-4 py-4 text-left font-semibold">Hotspot</th>
              <th className="px-4 py-4 text-left font-semibold">Coverage</th>
              <th className="px-4 py-4 text-left font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {normalizedPlans.map((plan, index) => (
              <tr 
                key={index} 
                className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                }`}
              >
                {showCountryLinks && (
                  <td className="px-4 py-4">
                    <Link 
                      href={`/esim/${createCountrySlug(plan.country)}`}
                      className="font-medium text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      {plan.country}
                    </Link>
                  </td>
                )}
                <td className="px-4 py-4">
                  <div className="font-medium text-gray-900">{plan.provider}</div>
                </td>
                <td className="px-4 py-4">
                  <div className="text-gray-700">{plan.plan_name}</div>
                </td>
                <td className="px-4 py-4">
                  <div className="font-semibold text-blue-600">{plan.data_amount}</div>
                </td>
                <td className="px-4 py-4">
                  <div className="text-gray-700">{plan.validity}</div>
                </td>
                <td className="px-4 py-4">
                  <div className="font-bold text-green-600">
                    ${typeof plan.price === 'number' ? plan.price.toFixed(2) : plan.price} {plan.currency}
                  </div>
                </td>
                <td className="px-4 py-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    plan.hotspot_sharing
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {plan.hotspot_sharing ? 'Yes' : 'No'}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <div className="text-sm text-gray-600">{plan.coverage}</div>
                </td>
                <td className="px-4 py-4">
                  {plan.source_url && (
                    <a
                      href={plan.source_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                    >
                      Buy Now
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {normalizedPlans.length > 0 && normalizedPlans[0].updated_at && (
        <div className="mt-4 text-sm text-gray-500 text-center">
          Last updated: {new Date(normalizedPlans[0].updated_at).toLocaleDateString()}
        </div>
      )}
    </div>
  );
} 