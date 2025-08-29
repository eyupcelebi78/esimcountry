# 🌍 eSIM Country - Travel eSIM Comparison Platform

> **The ultimate destination for finding the best eSIM deals worldwide!**

[![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.12-cyan)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Database-green)](https://supabase.com/)

## ✨ Features

### 🚀 **Real-Time Data**
- **Live pricing** from 15+ eSIM providers
- **Daily updates** ensuring accuracy
- **Real 2025 prices** with working URLs

### 🗺️ **Comprehensive Coverage**
- **50+ countries** with detailed guides
- **Network coverage maps** for major cities
- **Provider comparisons** with pros/cons

### 📊 **Smart Comparison**
- **Advanced filtering** by price, data, duration
- **Side-by-side comparisons** of plans
- **Best value recommendations** for each use case

### 📱 **Mobile-First Design**
- **Responsive design** works on all devices
- **Fast loading** with optimized performance
- **PWA ready** for mobile installation

### 🎯 **SEO Optimized**
- **Schema markup** for rich snippets
- **Core Web Vitals** optimized
- **Blog content** with travel guides

## 🛠️ Tech Stack

- **Framework:** Next.js 15.5.2 with App Router
- **Language:** TypeScript 5.9.2
- **Styling:** Tailwind CSS 4.1.12
- **Database:** Supabase (PostgreSQL)
- **Deployment:** Vercel
- **Analytics:** Google AdSense integrated

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/eyupcelebi78/esimcountry.git

# Navigate to project directory
cd esimcountry

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 🔧 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Google AdSense
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-8486271485798253

# Environment
NODE_ENV=development
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js 15 App Router
│   ├── api/               # API routes
│   ├── blog/              # Blog pages
│   ├── esim/              # Country-specific pages
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── AdSense.tsx        # Google AdSense integration
│   ├── CountrySelector.tsx # Country selection
│   └── PlanComparisonTable.tsx # Plan comparison
├── lib/                   # Utilities and configurations
│   ├── supabase.ts        # Supabase client
│   └── sheets.ts          # Google Sheets integration
└── types/                 # TypeScript type definitions
```

## 🎨 Key Features

### **Homepage**
- Hero section with country selector
- Trust signals (Real prices, Updated daily)
- Plan comparison table
- FAQ section with schema markup

### **Country Pages** (`/esim/[country]`)
- Breadcrumb navigation
- Trust signals and statistics
- Comprehensive plan comparison
- Network coverage information
- FAQ specific to country

### **Blog** (`/blog/`)
- SEO-optimized articles
- Country-specific guides
- Provider comparisons
- Setup instructions

### **API Routes**
- `/api/countries` - Country data
- `/api/providers` - Provider information
- `/api/turkey-plans` - Turkey-specific plans

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect GitHub repository to Vercel**
2. **Add environment variables:**
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_ADSENSE_CLIENT_ID`
3. **Deploy automatically on every push**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/eyupcelebi78/esimcountry)

## 📈 Performance

- **Core Web Vitals** optimized
- **Lighthouse Score** 95+
- **Image optimization** with Next.js
- **CSS optimization** with Tailwind
- **Database optimization** with Supabase

## 💰 Monetization

- **Google AdSense** integration
- **Affiliate links** to eSIM providers
- **Sponsored content** opportunities
- **Premium features** potential

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation:** [Deployment Guide](vercel-deployment-guide.md)
- **Issues:** [GitHub Issues](https://github.com/eyupcelebi78/esimcountry/issues)
- **Discussions:** [GitHub Discussions](https://github.com/eyupcelebi78/esimcountry/discussions)

## 🙏 Acknowledgments

- **Supabase** for the amazing database platform
- **Vercel** for seamless deployment
- **Next.js** team for the excellent framework
- **Tailwind CSS** for the utility-first styling
- **eSIM providers** for the data and partnerships

---

Made with ❤️ by [eyupcelebi78](https://github.com/eyupcelebi78)

**Live Demo:** [Coming Soon on Vercel]