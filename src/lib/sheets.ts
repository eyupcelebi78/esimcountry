import { ESIMPlan, Provider, CountryData } from '@/types';

// Google Sheets ID from the URL
const SPREADSHEET_ID = '1nFWyIaGIEfOvw-GhwscKy7QIs6oV07UzxXyzvOGAtro';

// Function to get CSV URL for a sheet
function getSheetCSVUrl(sheetName: string): string {
  return `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}`;
}

// Parse CSV data
function parseCSV(csvText: string): string[][] {
  const lines = csvText.split('\n');
  const result: string[][] = [];
  
  for (const line of lines) {
    if (line.trim()) {
      // Simple CSV parsing - handles quoted fields
      const row: string[] = [];
      let current = '';
      let inQuotes = false;
      
      for (let i = 0; i < line.length; i++) {
        const char = line[i];
        
        if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
          row.push(current.trim());
          current = '';
        } else {
          current += char;
        }
      }
      
      row.push(current.trim());
      result.push(row);
    }
  }
  
  return result;
}

export async function getSheetData(sheetName: string): Promise<any[][]> {
  try {
    const csvUrl = getSheetCSVUrl(sheetName);
    
    // Add timeout and better error handling for server-side fetch
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
    
    const response = await fetch(csvUrl, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; eSIMCountry/1.0)',
      },
      // Disable cache for fresh data
      cache: 'no-store',
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const csvText = await response.text();
    return parseCSV(csvText);
  } catch (error) {
    console.error(`Error fetching sheet data for ${sheetName}:`, error);
    
    // If API fails, return mock data for development
    if (sheetName === 'CountryCoverage') {
      return [
        ['Country', 'Provider', 'PlanName', 'DataAmount', 'Validity', 'Price', 'Currency', 'HotspotSharing', 'Coverage', 'SourceURL', 'LastChecked'],
        ['Turkey', 'Airalo', 'Turkey 1GB', '1GB', '7 days', '4.50', 'USD', 'Yes', 'Nationwide', 'https://airalo.com', '2024-01-15'],
        ['Turkey', 'Holafly', 'Turkey Unlimited', 'Unlimited', '5 days', '19.00', 'USD', 'Limited', 'Nationwide', 'https://holafly.com', '2024-01-15'],
        ['Turkey', 'Nomad', 'Turkey 3GB', '3GB', '30 days', '8.00', 'USD', 'Yes', 'Nationwide', 'https://nomadsim.com', '2024-01-15'],
        ['Germany', 'Airalo', 'Germany 1GB', '1GB', '7 days', '4.50', 'USD', 'Yes', 'Nationwide', 'https://airalo.com', '2024-01-15'],
        ['Germany', 'Holafly', 'Germany Unlimited', 'Unlimited', '5 days', '19.00', 'USD', 'Limited', 'Nationwide', 'https://holafly.com', '2024-01-15'],
        ['Spain', 'Airalo', 'Spain 1GB', '1GB', '7 days', '4.50', 'USD', 'Yes', 'Nationwide', 'https://airalo.com', '2024-01-15'],
        ['Spain', 'Holafly', 'Spain Unlimited', 'Unlimited', '5 days', '19.00', 'USD', 'Limited', 'Nationwide', 'https://holafly.com', '2024-01-15'],
        ['France', 'Airalo', 'France 1GB', '1GB', '7 days', '4.50', 'USD', 'Yes', 'Nationwide', 'https://airalo.com', '2024-01-15'],
        ['France', 'Holafly', 'France Unlimited', 'Unlimited', '5 days', '19.00', 'USD', 'Limited', 'Nationwide', 'https://holafly.com', '2024-01-15'],
        ['Italy', 'Airalo', 'Italy 1GB', '1GB', '7 days', '4.50', 'USD', 'Yes', 'Nationwide', 'https://airalo.com', '2024-01-15'],
        ['Italy', 'Holafly', 'Italy Unlimited', 'Unlimited', '5 days', '19.00', 'USD', 'Limited', 'Nationwide', 'https://holafly.com', '2024-01-15'],
        ['Japan', 'Airalo', 'Japan 1GB', '1GB', '7 days', '4.50', 'USD', 'Yes', 'Nationwide', 'https://airalo.com', '2024-01-15'],
        ['Japan', 'Holafly', 'Japan Unlimited', 'Unlimited', '5 days', '19.00', 'USD', 'Limited', 'Nationwide', 'https://holafly.com', '2024-01-15'],
        ['USA', 'Airalo', 'USA 1GB', '1GB', '7 days', '4.50', 'USD', 'Yes', 'Nationwide', 'https://airalo.com', '2024-01-15'],
        ['USA', 'Holafly', 'USA Unlimited', 'Unlimited', '5 days', '19.00', 'USD', 'Limited', 'Nationwide', 'https://holafly.com', '2024-01-15'],
      ];
    }
    
    return [];
  }
}

export async function getProviders(): Promise<Provider[]> {
  try {
    const data = await getSheetData('Providers');
    if (data.length < 2) {
      // Return mock providers if sheet is empty
      return [
        { name: 'Airalo', website: 'https://airalo.com', coverageUrl: 'https://airalo.com/coverage' },
        { name: 'Holafly', website: 'https://holafly.com', coverageUrl: 'https://holafly.com/coverage' },
        { name: 'Nomad', website: 'https://nomadsim.com', coverageUrl: 'https://nomadsim.com/coverage' },
      ];
    }

    const headers = data[0];
    const rows = data.slice(1);

    return rows.map(row => ({
      name: row[0] || '',
      website: row[1] || '',
      coverageUrl: row[2] || '',
    })).filter(provider => provider.name);
  } catch (error) {
    console.error('Error fetching providers:', error);
    return [
      { name: 'Airalo', website: 'https://airalo.com', coverageUrl: 'https://airalo.com/coverage' },
      { name: 'Holafly', website: 'https://holafly.com', coverageUrl: 'https://holafly.com/coverage' },
      { name: 'Nomad', website: 'https://nomadsim.com', coverageUrl: 'https://nomadsim.com/coverage' },
    ];
  }
}

export async function getCountryCoverage(): Promise<ESIMPlan[]> {
  try {
    const data = await getSheetData('CountryCoverage');
    if (data.length < 2) return [];

    const headers = data[0];
    const rows = data.slice(1);

    return rows.map(row => ({
      Country: row[0] || '',
      Provider: row[1] || '',
      PlanName: row[2] || '',
      DataAmount: row[3] || '',
      Validity: row[4] || '',
      Price: row[5] || '',
      Currency: row[6] || 'USD',
      HotspotSharing: row[7] || '',
      Coverage: row[8] || '',
      SourceURL: row[9] || '',
      LastChecked: row[10] || '',
      Notes: row[11] || '',
    })).filter(plan => plan.Country && plan.Provider);
  } catch (error) {
    console.error('Error fetching country coverage:', error);
    return [];
  }
}

export async function getCountryData(): Promise<CountryData[]> {
  const plans = await getCountryCoverage();
  
  // Group plans by country
  const countryMap = new Map<string, ESIMPlan[]>();
  
  plans.forEach(plan => {
    const country = plan.Country;
    if (!countryMap.has(country)) {
      countryMap.set(country, []);
    }
    countryMap.get(country)!.push(plan);
  });

  // Convert to array and sort by country name
  return Array.from(countryMap.entries())
    .map(([country, plans]) => ({ country, plans }))
    .sort((a, b) => a.country.localeCompare(b.country));
}

export async function getTurkeyPlans(): Promise<ESIMPlan[]> {
  try {
    const data = await getSheetData('Turkey_Plans');
    if (data.length < 2) return [];

    const headers = data[0];
    const rows = data.slice(1);

    return rows.map(row => ({
      Country: 'Turkey',
      Provider: row[0] || '',
      PlanName: row[1] || '',
      DataAmount: row[2] || '',
      Validity: row[3] || '',
      Price: row[4] || '',
      Currency: row[5] || 'USD',
      HotspotSharing: row[6] || '',
      Coverage: row[7] || '',
      SourceURL: row[8] || '',
      LastChecked: row[9] || '',
      Notes: row[10] || '',
    })).filter(plan => plan.Provider);
  } catch (error) {
    console.error('Error fetching Turkey plans:', error);
    return [];
  }
}

// New functions for dynamic country pages
export async function getPlansByCountry(countryName: string): Promise<ESIMPlan[]> {
  const countryData = await getCountryData();
  const country = countryData.find(c => 
    c.country.toLowerCase() === countryName.toLowerCase()
  );
  return country?.plans || [];
}

export async function getAvailableCountries(): Promise<string[]> {
  const countryData = await getCountryData();
  return countryData.map(c => c.country);
}

// Helper function to format country names for URLs
export function formatCountryName(urlCountry: string): string {
  return urlCountry
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Helper function to create URL-friendly country names
export function createCountrySlug(countryName: string): string {
  return countryName
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
} 