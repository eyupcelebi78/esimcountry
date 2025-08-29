# 🚀 Vercel Deployment & MCP Kurulum Rehberi

## 📋 ÖN HAZIRLIK KONTROL LİSTESİ

### ✅ Proje Hazırlığı
- [ ] `package.json` dosyası mevcut
- [ ] Next.js konfigürasyonu tamam
- [ ] Environment variables belirlendi
- [ ] Git repository hazır

### ✅ Gerekli Dosyalar
- [ ] `next.config.ts` - ✅ Mevcut
- [ ] `package.json` - Kontrol edilmeli
- [ ] `.env.local` - Environment variables için
- [ ] `vercel.json` - Opsiyonel config

---

## 🌐 VERCEL DEPLOYMENT ADIMLAR

### 1. **Vercel Hesabı ve CLI Kurulumu**

```bash
# Vercel CLI'ı global olarak yükle
npm install -g vercel

# Vercel hesabına login ol
vercel login
```

### 2. **Proje Konfigürasyonu**

#### A) Environment Variables Ayarla
Proje root'unda `.env.local` dosyası oluştur:

```env
# .env.local
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-8486271485798253

# Production environment
NODE_ENV=production
```

#### B) Vercel Config (opsiyonel)
`vercel.json` dosyası oluştur:

```json
{
  "version": 2,
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "functions": {
    "app/**": {
      "maxDuration": 30
    }
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### 3. **GitHub Repository Hazırlığı**

```bash
# Git repository başlat (eğer yoksa)
git init

# Vercel'in ignore etmesi gereken dosyalar
echo "node_modules" >> .gitignore
echo ".env.local" >> .gitignore
echo ".env" >> .gitignore
echo ".vercel" >> .gitignore

# Tüm dosyaları commit et
git add .
git commit -m "Initial commit for Vercel deployment"

# GitHub repository oluştur ve push et
git remote add origin https://github.com/yourusername/esimcountry.git
git branch -M main
git push -u origin main
```

### 4. **Vercel Dashboard Deployment**

#### Option A: CLI ile Deploy
```bash
# Proje klasöründe çalıştır
vercel

# Production deployment için
vercel --prod
```

#### Option B: GitHub Integration (Önerilen)
1. **vercel.com** → "Add New Project"
2. **GitHub** hesabını bağla
3. **Repository** seç: `esimcountry`
4. **Framework Preset:** Next.js (otomatik tespit)
5. **Environment Variables** ekle:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_ADSENSE_CLIENT_ID`
6. **Deploy** butonuna tık

---

## 🔧 VERCEL MCP KURULUMU

### 1. **MCP Extension Kurulumu**

```bash
# Vercel MCP paketini yükle
npm install @modelcontextprotocol/vercel

# Ya da globally
npm install -g @modelcontextprotocol/vercel
```

### 2. **MCP Konfigürasyonu**

#### A) MCP Config Dosyası
`.mcp/config.json` oluştur:

```json
{
  "mcpServers": {
    "vercel": {
      "command": "npx",
      "args": ["@modelcontextprotocol/vercel"],
      "env": {
        "VERCEL_TOKEN": "your_vercel_token"
      }
    }
  }
}
```

#### B) Vercel Token Alma
1. **vercel.com/account/tokens** → "Create Token"
2. **Scope:** Full Account
3. **Expiration:** No expiration (ya da istediğin süre)
4. Token'ı kopyala ve güvenli yerde sakla

### 3. **Environment Variables (Production)**

Vercel Dashboard'da **Settings** → **Environment Variables**:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

# AdSense
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-8486271485798253

# Vercel MCP
VERCEL_TOKEN=your_vercel_token
VERCEL_ORG_ID=your_org_id
VERCEL_PROJECT_ID=your_project_id

# Production
NODE_ENV=production
```

---

## 🚦 DEPLOYMENT WORKFLOW

### 1. **Otomatik Deployment**
```bash
# Her git push otomatik deploy tetikler
git add .
git commit -m "Update: AdSense integration completed"
git push origin main

# Vercel otomatik olarak:
# 1. Build'i çalıştırır
# 2. Tests'leri çalıştırır
# 3. Deploy eder
# 4. URL'i provide eder
```

### 2. **Manual Deployment**
```bash
# CLI ile manual deploy
vercel

# Preview deployment
vercel --no-prod

# Production deployment
vercel --prod
```

### 3. **Branch-based Deployment**
```bash
# Feature branch için
git checkout -b feature/new-feature
git push origin feature/new-feature
# → Otomatik preview URL oluşturur

# Main branch merge
git checkout main
git merge feature/new-feature
git push origin main
# → Production'a deploy eder
```

---

## 📊 POST-DEPLOYMENT KONTROLLER

### 1. **Site Health Check**
```bash
# Vercel CLI ile status kontrol
vercel inspect

# Domain status
vercel domains

# Analytics
vercel analytics
```

### 2. **Performance Optimization**
- **Core Web Vitals** kontrol et
- **Lighthouse scores** test et
- **AdSense ads** görünürlük kontrol et
- **SEO meta tags** test et

### 3. **Monitoring Setup**
```bash
# Vercel Analytics enable
vercel analytics enable

# Real-time logs
vercel logs
```

---

## 🔍 TROUBLESHOOTING

### 1. **Build Errors**
```bash
# Local build test
npm run build

# Vercel build logs
vercel logs --build

# Clear cache
vercel --force
```

### 2. **Environment Variables Issues**
```bash
# List environment variables
vercel env ls

# Add new env var
vercel env add

# Remove env var
vercel env rm
```

### 3. **Domain Issues**
```bash
# Add custom domain
vercel domains add yourdomain.com

# DNS configuration
vercel domains verify yourdomain.com
```

---

## 🚀 PRODUCTION OPTIMIZATION

### 1. **Custom Domain Setup**
```bash
# Add domain
vercel domains add esimcountry.com

# DNS Records needed:
# CNAME: www.esimcountry.com → cname.vercel-dns.com
# A: esimcountry.com → 76.76.19.61
```

### 2. **SSL & Security**
- ✅ **SSL Certificate** - Otomatik (Let's Encrypt)
- ✅ **HTTPS Redirect** - Otomatik
- ✅ **Security Headers** - `vercel.json`'da tanımlandı

### 3. **Analytics & Monitoring**
```bash
# Enable Vercel Analytics
vercel analytics enable

# Real User Metrics (RUM)
vercel speed-insights enable
```

---

## 📈 MCP KOMUTLARI

### 1. **Deployment Management**
```javascript
// MCP ile deployment status
await mcp.vercel.getDeployments();

// Yeni deployment trigger
await mcp.vercel.createDeployment({
  name: "esimcountry",
  target: "production"
});

// Environment variables manage
await mcp.vercel.setEnvVars({
  "NEXT_PUBLIC_ADSENSE_CLIENT_ID": "ca-pub-8486271485798253"
});
```

### 2. **Analytics & Monitoring**
```javascript
// Performance metrics
await mcp.vercel.getAnalytics();

// Traffic stats
await mcp.vercel.getTrafficData();

// Error monitoring
await mcp.vercel.getErrorLogs();
```

---

## ✅ DEPLOYMENT CHECKLIST

### Pre-Deployment:
- [ ] Environment variables configured
- [ ] Build successful locally (`npm run build`)
- [ ] All files committed to Git
- [ ] Repository pushed to GitHub

### During Deployment:
- [ ] Vercel project created
- [ ] GitHub integration configured
- [ ] Environment variables added
- [ ] Custom domain added (if applicable)

### Post-Deployment:
- [ ] Site accessible via URL
- [ ] AdSense ads loading
- [ ] SEO meta tags working
- [ ] Core Web Vitals optimized
- [ ] Analytics enabled

---

## 🔗 USEFUL LINKS

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Next.js Docs:** https://nextjs.org/docs/deployment
- **Vercel CLI Docs:** https://vercel.com/docs/cli
- **MCP Vercel:** https://github.com/modelcontextprotocol/vercel

---

## 📞 SUPPORT

**Vercel Support:**
- Discord: https://vercel.com/discord
- Documentation: https://vercel.com/docs
- GitHub: https://github.com/vercel/vercel

Bu rehberle projenizi başarıyla Vercel'e deploy edebilir ve MCP entegrasyonunu kurabilirsiniz! 🚀 