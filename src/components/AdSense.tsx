'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

interface AdSenseProps {
  slot: string;
  format?: 'auto' | 'rectangle' | 'leaderboard' | 'banner';
  responsive?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export const AdSense: React.FC<AdSenseProps> = ({
  slot,
  format = "auto",
  responsive = true,
  style,
  className = ""
}) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className={`ad-container ${className}`} style={style}>
      <div className="ad-label text-xs text-gray-400 mb-1 text-center">
        Advertisement
      </div>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-8486271485798253"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      />
    </div>
  );
};

// Specific AdSense components for different positions
export const LeaderboardAd: React.FC<{ slot: string }> = ({ slot }) => (
  <AdSense 
    slot={slot} 
    format="auto" 
    className="flex justify-center mb-8"
    style={{ maxWidth: '728px', height: '90px' }}
  />
);

export const RectangleAd: React.FC<{ slot: string }> = ({ slot }) => (
  <AdSense 
    slot={slot} 
    format="rectangle" 
    className="flex justify-center my-8"
    style={{ maxWidth: '336px', height: '280px' }}
  />
);

export const MobileAd: React.FC<{ slot: string }> = ({ slot }) => (
  <AdSense 
    slot={slot} 
    format="banner" 
    className="flex justify-center mb-4 md:hidden"
    style={{ maxWidth: '320px', height: '50px' }}
  />
);

export const HalfPageAd: React.FC<{ slot: string }> = ({ slot }) => (
  <AdSense 
    slot={slot} 
    format="auto" 
    className="hidden lg:block"
    style={{ maxWidth: '300px', height: '600px' }}
  />
); 