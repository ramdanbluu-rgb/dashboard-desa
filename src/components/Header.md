# Header Component

## Deskripsi
Komponen Header utama untuk Dashboard Transparansi Anggaran Desa. Menampilkan judul dashboard dan informasi desa dengan desain mobile-first yang responsif.

## Features
- ✅ Mobile-first responsive design
- ✅ Tailwind CSS styling dengan primary color #005A9C
- ✅ Gradient background profesional
- ✅ Info bar dengan metadata (tahun anggaran, status, update terakhir)
- ✅ Sticky positioning untuk navigasi mudah
- ✅ Customizable via props
- ✅ Aksesibilitas tinggi dengan kontras warna yang baik
- ✅ Mengikuti Technical Styling Guide

## Props

```typescript
interface HeaderProps {
  villageName?: string;      // Nama desa yang ditampilkan (default: "Dashboard Desa")
  showSubtitle?: boolean;     // Tampilkan subtitle/tagline (default: true)
}
```

## Usage

### Basic Usage
```typescript
import { Header } from '@/components';

export default function Home() {
  return (
    <div>
      <Header />
      {/* Konten lainnya */}
    </div>
  );
}
```

### Dengan Nama Desa Custom
```typescript
<Header 
  villageName="Desa Merdeka"
  showSubtitle={true}
/>
```

### Tanpa Subtitle
```typescript
<Header 
  villageName="Dashboard Desa"
  showSubtitle={false}
/>
```

## Design Details

### Color Scheme
- **Primary Gradient**: #005A9C to #0066B2 (Biru profesional)
- **Text**: Putih (#FFFFFF) di header, Abu-abu (#2C3E50) di info bar
- **Background Info Bar**: #F4F6F7 (Neutral background)

### Typography
- **Font Family**: Inter (dari next/font/google)
- **Title**: Bold, responsive (text-2xl sm:text-3xl)
- **Subtitle**: Font medium, blue-100
- **Info Labels**: Uppercase, font-semibold

### Responsive Breakpoints
- **Mobile** (< 768px): Single column layout, compact spacing
- **Tablet** (768px - 1023px): Grid cols-2 untuk info bar
- **Desktop** (≥ 1024px): Full layout dengan sidebar support

### Accessibility
- High contrast ratio (WCAG AA)
- Proper heading hierarchy (h1)
- Semantic HTML
- Readable font size (min 14px di info bar)

## Layout Structure

```
┌─────────────────────────────────────────┐
│     MAIN HEADER (Gradient Blue)         │ <- Judul & Tagline
│  Dashboard Desa | Transparansi...       │
├─────────────────────────────────────────┤
│ Tahun | Status | Update │ (Info Bar)    │ <- Metadata
└─────────────────────────────────────────┘
```

## Integration dengan Layout Utama

Dalam layout.tsx atau page.tsx utama:

```typescript
import { Header } from '@/components';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-gray-50">
        <Header villageName="Desa Contoh" />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        
        {/* Bottom Navigation akan ditambahkan kemudian */}
      </body>
    </html>
  );
}
```

## Customization Tips

### 1. Mengubah Tahun Anggaran
Modifikasi hardcoded value "2024" menjadi dynamic dari database/props:

```typescript
interface HeaderProps {
  villageName?: string;
  showSubtitle?: boolean;
  year?: number;  // Tambah prop ini
}

// Dalam JSX: <span>{props.year || new Date().getFullYear()}</span>
```

### 2. Mengubah Warna Primary
Modifikasi class `bg-gradient-to-r from-blue-700 to-blue-600` sesuai kebutuhan

### 3. Menambah Navigation Menu
Tambahkan nav menu di section baru atau integrasikan dengan Bottom Navigation

## Future Enhancements
- [ ] Integrasi dengan Bottom Navigation component
- [ ] Responsive navigation menu untuk desktop
- [ ] Breadcrumb navigation support
- [ ] User profile/logout button (untuk admin)
- [ ] Search bar integration
- [ ] Dark mode support

## Notes
- Component menggunakan `'use client'` directive (Next.js 13+ App Router)
- Design mengikuti TECHNICAL_STYLING_GUIDE.md
- Tailwind CSS classes digunakan untuk semua styling (no inline styles)
- Import aliases (@/) digunakan sesuai tsconfig.json configuration
