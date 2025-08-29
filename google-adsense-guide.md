# 🚀 Google AdSense Reklam Yerleştirme Rehberi - eSIM Country

## 📊 OPTIMAL REKLAM YERLEŞİM STRATEJİSİ

### 🎯 1. ANA SAYFA REKLAM YERLERİ

#### A) Above the Fold (En Kritik)
**Konum:** Hero section sonrasında, trust signals'dan önce
**Boyut:** 728x90 (Leaderboard) - Desktop | 320x50 (Mobile Banner) - Mobile
**CTR Beklentisi:** %2-4
```html
<!-- src/app/page.tsx - Line ~220 sonrası -->
{/* AdSense - Above Fold Leaderboard */}
<div className="flex justify-center mb-8">
  <div className="ad-container max-w-full">
    <ins className="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
         data-ad-slot="1234567890"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
  </div>
</div>
```

#### B) Content Middle (Yüksek Engagement)
**Konum:** Country Selector sonrasında, plan karşılaştırması öncesinde
**Boyut:** 336x280 (Large Rectangle) - Desktop | 300x250 (Medium Rectangle) - Mobile
**CTR Beklentisi:** %3-5
```html
<!-- Country plan tablosu öncesinde -->
{/* AdSense - Mid Content Rectangle */}
<div className="flex justify-center my-8">
  <div className="ad-container">
    <ins className="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
         data-ad-slot="0987654321"
         data-ad-format="rectangle"></ins>
  </div>
</div>
```

#### C) FAQ Section Öncesi
**Konum:** "Why Choose eSIM" section sonrasında
**Boyut:** 728x90 (Leaderboard) - Desktop | 320x100 (Mobile Banner) - Mobile
**CTR Beklentisi:** %1.5-3

---

### 🎯 2. BLOG SAYFALARI REKLAM YERLERİ (EN YÜKSEK CTR)

#### A) Article başlangıcı (Table of Contents sonrası)
**Konum:** Her blog sayfasında içindekiler tablosu altına
**Boyut:** 728x90 (Leaderboard)
**CTR Beklentisi:** %4-7
```html
<!-- src/app/blog/*/page.tsx - Table of Contents sonrası -->
{/* AdSense - Article Top */}
<div className="flex justify-center mb-8">
  <ins className="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
       data-ad-slot="1111111111"
       data-ad-format="auto"></ins>
</div>
```

#### B) Article ortası (En etkili yer!)
**Konum:** "Quick Comparison" tablosu sonrasında
**Boyut:** 336x280 (Large Rectangle) - Yüksek performans
**CTR Beklentisi:** %5-8
```html
<!-- Comparison table sonrası -->
{/* AdSense - Mid Article Rectangle */}
<div className="flex justify-center my-12">
  <ins className="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
       data-ad-slot="2222222222"
       data-ad-format="rectangle"></ins>
</div>
```

#### C) FAQ öncesi
**Konum:** FAQ section başlamadan önce
**Boyut:** 728x90 (Leaderboard)
**CTR Beklentisi:** %3-5

#### D) Article sonu
**Konum:** Related posts öncesinde
**Boyut:** 300x600 (Half Page) - En yüksek gelir
**CTR Beklentisi:** %2-4

---

### 🎯 3. COUNTRY SAYFALARI (/esim/[country])

#### A) Breadcrumb sonrası
**Boyut:** 728x90 (Leaderboard)
**CTR Beklentisi:** %2-4

#### B) Plans tablosu ortası
**Konum:** Tablo satırları arasına native format
**Boyut:** In-feed ads (Native)
**CTR Beklentisi:** %4-6

#### C) FAQ section öncesi
**Boyut:** 336x280 (Large Rectangle)

---

## 📐 ADSENSE REKLAM BİRİM BOYUTLARI

### 🏆 EN YÜKSEK PERFORMANS BOYUTLARI:

#### 1. **728x90 (Leaderboard)**
- **Kullanım:** Desktop header/footer alanları
- **CTR:** Ortalama %2-4
- **Gelir:** Yüksek
- **Responsive:** Mobilde 320x50'ye dönüşür

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8486271485798253"
     crossorigin="anonymous"></script>
<!-- Desktop header/footer alanları -->
<ins class="adsbygoogle"
     style="display:inline-block;width:728px;height:90px"
     data-ad-client="ca-pub-8486271485798253"
     data-ad-slot="5555286769"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

#### 2. **336x280 (Large Rectangle)**
- **Kullanım:** Content içi, sidebar
- **CTR:** Ortalama %4-6
- **Gelir:** En yüksek
- **Responsive:** Tüm cihazlarda çalışır

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8486271485798253"
     crossorigin="anonymous"></script>
<!-- Content içi, sidebar -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-8486271485798253"
     data-ad-slot="3600041413"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>


#### 3. **300x250 (Medium Rectangle)**
- **Kullanım:** Article içi, sidebar
- **CTR:** Ortalama %3-5
- **Gelir:** Yüksek
- **Responsive:** Mobil uyumlu

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8486271485798253"
     crossorigin="anonymous"></script>
<!-- Article içi, sidebar -->
<ins class="adsbygoogle"
     style="display:inline-block;width:300px;height:250px"
     data-ad-client="ca-pub-8486271485798253"
     data-ad-slot="3538980592"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

#### 4. **300x600 (Half Page)**
- **Kullanım:** Sidebar, article sonu
- **CTR:** Ortalama %2-4
- **Gelir:** Çok yüksek
- **Responsive:** Desktop odaklı

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8486271485798253"
     crossorigin="anonymous"></script>
<!-- Sidebar, article sonu -->
<ins class="adsbygoogle"
     style="display:inline-block;width:300px;height:600px"
     data-ad-client="ca-pub-8486271485798253"
     data-ad-slot="5071554113"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

#### 5. **320x50 (Mobile Banner)**
- **Kullanım:** Mobil header/footer
- **CTR:** Ortalama %1-3
- **Gelir:** Düşük ama gerekli

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8486271485798253"
     crossorigin="anonymous"></script>
<!-- Mobil header/footer -->
<ins class="adsbygoogle"
     style="display:inline-block;width:350px;height:50px"
     data-ad-client="ca-pub-8486271485798253"
     data-ad-slot="3758472445"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

## 🎨 REKLAM TASARIM PRENSİPLERİ

### ✅ YAPILMASI GEREKENLER:

1. **Natural Placement (Doğal Yerleştirme)**
   ```css
   .ad-container {
     margin: 2rem auto;
     text-align: center;
     max-width: 100%;
   }
   
   .ad-label {
     font-size: 11px;
     color: #999;
     margin-bottom: 5px;
     text-transform: uppercase;
   }
   ```

2. **Loading Optimization**
   ```javascript
   // Lazy loading for ads
   const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         (adsbygoogle = window.adsbygoogle || []).push({});
       }
     });
   });
   ```

3. **Mobile Responsive**
   ```css
   @media (max-width: 768px) {
     .desktop-ad { display: none; }
     .mobile-ad { display: block; }
   }
   ```

### ❌ YAPILMAMASI GEREKENLER:

1. **Çok fazla reklam** - Sayfada max 3-4 reklam
2. **Above the fold dominant** - İçeriğin üstünde durmamalı
3. **Misleading placement** - İçerik gibi görünmemeli
4. **Pop-up/overlay ads** - AdSense politikalarına aykırı

---

## 🏗️ ADSENSE BİRİM OLUŞTURMA ADIMLAR

### 1. AdSense Dashboard'a Giriş
```
1. adsense.google.com → Giriş yap
2. "Reklamlar" → "Reklam birimleri" → "Yeni reklam birimi"
```

### 2. Reklam Birimi Tipleri:

#### A) **Display Ads (Ana kullanım)**
```
Boyut: Responsive (önerilen)
Ad type: Display ads
Placement: Automatic optimization
```

#### B) **In-feed Ads (Blog için)**
```
Tip: In-feed
Placement: Blog post listesi içi
Style: Native (content-style)
```

#### C) **In-article Ads (Makaleler için)**
```
Tip: In-article
Placement: Paragraflar arası
Style: Responsive text + display
```

### 3. Kod Entegrasyonu:
```html
<!-- Her sayfanın <head> bölümüne -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
     crossorigin="anonymous"></script>
```

---

## 📈 CTR OPTİMİZASYON TACTİKLERİ

### 🎯 Yüksek CTR İçin Stratejiler:

#### 1. **Placement Optimization**
- **Above fold:** %20-30 sayfanın
- **Content middle:** En yüksek engagement
- **Native integration:** İçerikle uyumlu

#### 2. **Size Selection**
- **Large rectangles** → Yüksek CTR
- **Leaderboards** → Görünürlük
- **Native formats** → Doğal görünüm

#### 3. **Content Relevance**
- eSIM/travel keyword'leri optimize
- Country-specific content alignment
- User intent matching

#### 4. **A/B Testing**
```javascript
// Different ad positions test
const adPositions = ['top', 'middle', 'bottom'];
const randomPosition = adPositions[Math.floor(Math.random() * 3)];
```

### 📊 Beklenen Performance Metrics:

| Sayfa Tipi | Aylık Traffic | CTR | CPC | Gelir/Ay |
|------------|---------------|-----|-----|-----------|
| Ana Sayfa | 10,000 | %2.5 | $0.50 | $125 |
| Blog Posts | 15,000 | %4.5 | $0.75 | $506 |
| Country Pages | 8,000 | %3.0 | $0.60 | $144 |
| **TOTAL** | **33,000** | **%3.5** | **$0.65** | **$775** |

---

## 🚨 ADSENSE POLİTİKA UYUMU

### ✅ Güvenli Uygulamalar:

1. **Content Policy**
   - Kaliteli, orijinal içerik
   - Copyright ihlali yok
   - Spam/fake content yok

2. **Placement Policy**
   - Reklam/content ayrımı net
   - Accidental click prevention
   - Natural user flow

3. **Traffic Policy**
   - Organic traffic odaklı
   - Bot traffic yok
   - Click fraud prevention

### ⚠️ Dikkat Edilecek Noktalar:

1. **Click farming yasak**
2. **Kendi reklamlarına tıklama yasak**
3. **Misleading content yasak**
4. **Adult/illegal content yasak**

---

## 🔧 TEKNİK İMPLEMENTASYON

### 1. Global AdSense Component:
```typescript
// components/AdSense.tsx
interface AdSenseProps {
  slot: string;
  format?: string;
  responsive?: boolean;
  style?: React.CSSProperties;
}

export const AdSense: React.FC<AdSenseProps> = ({
  slot,
  format = "auto",
  responsive = true,
  style
}) => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div className="ad-container" style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      />
    </div>
  );
};
```

### 2. Sayfaya Entegrasyon:
```typescript
// Kullanım örneği
<AdSense 
  slot="1234567890" 
  format="rectangle" 
  style={{ margin: "2rem 0" }}
/>
```

---

## 📅 İMPLEMENTASYON TIMELINE

### Hafta 1: Setup
- [ ] AdSense başvuru & onay
- [ ] Tracking kodları yerleştirme
- [ ] İlk 3 reklam birimi (ana sayfa)

### Hafta 2: Blog Integration
- [ ] Blog sayfalarına reklam entegrasyonu
- [ ] A/B testing başlatma
- [ ] Performance monitoring

### Hafta 3: Optimization
- [ ] CTR data analizi
- [ ] Düşük performans alanları optimize
- [ ] Native ad testing

### Hafta 4: Scale
- [ ] Country pages integration
- [ ] Advanced placement testing
- [ ] Revenue optimization

**Beklenen İlk Ay Gelir:** $500-800
**3. Ay Hedef:** $1,500-2,000
**6. Ay Hedef:** $3,000-4,000

Bu strateji ile AdSense politikalarına uygun, yüksek CTR'li reklam yerleştirmesi yapabilirsiniz! 🚀 