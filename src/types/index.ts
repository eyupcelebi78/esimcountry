export interface Provider {
  name: string;
  website: string;
  coverageUrl?: string;
}

export interface ESIMPlan {
  Country: string;
  Provider: string;
  PlanName: string;
  DataAmount: string;
  Validity: string;
  Price: string;
  Currency: string;
  HotspotSharing: string;
  Coverage: string;
  SourceURL: string;
  LastChecked: string;
  Notes?: string;
}

export interface CountryData {
  country: string;
  plans: ESIMPlan[];
}

export interface ESIMPlanNew extends ESIMPlan {
  // Additional fields for enhanced country pages
  Features?: string[];
  NetworkType?: string;
  TopupAvailable?: boolean;
} 