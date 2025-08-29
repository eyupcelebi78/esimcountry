import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = 'https://qgieuedwrftwkgiesdbn.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnaWV1ZWR3cmZ0d2tnaWVzZGJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY0MTY5MDMsImV4cCI6MjA3MTk5MjkwM30.Hl58qsSqJeN2lfwimQBHkn0YTNjREmgWfssDjOhcDYk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Supabase is now working with real data - no mock data needed

// Database types
export interface Provider {
  id: number;
  name: string;
  website: string;
  coverage_url?: string;
  created_at: string;
  updated_at: string;
}

export interface ESIMPlan {
  id: number;
  country: string;
  provider: string;
  plan_name: string;
  data_amount: string;
  validity: string;
  price: number;
  currency: string;
  hotspot_sharing: boolean;
  coverage?: string;
  source_url: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface CountryInfo {
  id: number;
  country: string;
  population: number;
  capital: string;
  currency: string;
  language: string;
  timezone: string;
  best_visit_months: string;
  popular_cities: string[];
  travel_tips: string[];
  network_coverage_notes: string;
  local_sim_alternative: string;
  emergency_number: string;
  internet_speed_avg_mbps: number;
  data_costs_local_comparison: string;
  created_at: string;
  updated_at: string;
}

export interface ProviderInfo {
  id: number;
  provider_name: string;
  website: string;
  founded_year?: number;
  headquarters?: string;
  coverage_countries?: number;
  rating?: number;
  total_reviews?: number;
  customer_support_rating?: number;
  app_store_rating?: number;
  google_play_rating?: number;
  key_features?: string[];
  pros?: string[];
  cons?: string[];
  payment_methods?: string[];
  refund_policy?: string;
  created_at: string;
  updated_at: string;
}

// Supabase functions
export async function getProviders(): Promise<Provider[]> {
  try {
    const { data, error } = await supabase
      .from('providers')
      .select('*')
      .order('name');

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching providers:', error);
    return [];
  }
}

export async function getESIMPlans(): Promise<ESIMPlan[]> {
  try {
    const { data, error } = await supabase
      .from('esim_plans')
      .select('*')
      .eq('is_active', true)
      .order('country', { ascending: true })
      .order('price', { ascending: true });

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }
    
    console.log(`Fetched ${data?.length || 0} plans from Supabase`);
    return data || [];
  } catch (error) {
    console.error('Error fetching eSIM plans:', error);
    return [];
  }
}

export async function getPlansByCountry(country: string): Promise<ESIMPlan[]> {
  try {
    const { data, error } = await supabase
      .from('esim_plans')
      .select('*')
      .eq('country', country)
      .eq('is_active', true)
      .order('price', { ascending: true });

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }
    
    console.log(`Fetched ${data?.length || 0} plans for ${country} from Supabase`);
    return data || [];
  } catch (error) {
    console.error(`Error fetching plans for ${country}:`, error);
    return [];
  }
}

export async function getTurkeyPlans(): Promise<ESIMPlan[]> {
  return getPlansByCountry('Turkey');
}

export async function getAvailableCountries(): Promise<string[]> {
  try {
    const { data, error } = await supabase
      .from('esim_plans')
      .select('country')
      .eq('is_active', true);

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }
    
    // Get unique countries
    const countries = [...new Set(data?.map(plan => plan.country) || [])];
    console.log(`Fetched ${countries.length} countries from Supabase`);
    return countries.sort();
  } catch (error) {
    console.error('Error fetching countries:', error);
    return [];
  }
}

export interface CountryData {
  country: string;
  plans: ESIMPlan[];
}

export async function getCountryData(): Promise<CountryData[]> {
  try {
    const plans = await getESIMPlans();
    
    // Group plans by country
    const countryMap = new Map<string, ESIMPlan[]>();
    
    plans.forEach(plan => {
      const country = plan.country;
      if (!countryMap.has(country)) {
        countryMap.set(country, []);
      }
      countryMap.get(country)!.push(plan);
    });

    // Convert to array and sort by country name
    return Array.from(countryMap.entries())
      .map(([country, plans]) => ({ country, plans }))
      .sort((a, b) => a.country.localeCompare(b.country));
  } catch (error) {
    console.error('Error fetching country data:', error);
    return [];
  }
}

export async function getCountryInfo(country: string): Promise<CountryInfo | null> {
  try {
    const { data, error } = await supabase
      .from('country_info')
      .select('*')
      .eq('country', country)
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error(`Error fetching country info for ${country}:`, error);
    return null;
  }
}

export async function getProviderInfo(providerName: string): Promise<ProviderInfo | null> {
  try {
    const { data, error } = await supabase
      .from('provider_info')
      .select('*')
      .eq('provider_name', providerName)
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error(`Error fetching provider info for ${providerName}:`, error);
    return null;
  }
}

export async function getAllProviderInfo(): Promise<ProviderInfo[]> {
  try {
    const { data, error } = await supabase
      .from('provider_info')
      .select('*')
      .order('provider_name', { ascending: true });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching all provider info:', error);
    return [];
  }
}

// Helper functions
export function formatCountryName(urlCountry: string): string {
  return urlCountry
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function createCountrySlug(countryName: string): string {
  return countryName
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
} 