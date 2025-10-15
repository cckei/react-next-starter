# UA Finance - Next.js Full-Stack Project

A modern full-stack web application built with Next.js 15, featuring internationalization (i18n), server-side rendering, API content fetching, and Tailwind CSS styling.

## 🚀 Features

- **🌐 Internationalization (i18n)** - Multi-language support (English, Simplified Chinese, Traditional Chinese)
- **⚡ Server-Side Rendering (SSR)** - Fast, SEO-friendly page rendering
- **🔌 Server-Side API Content Fetching** - Dynamic content from external APIs
- **🎨 Tailwind CSS** - Modern, utility-first CSS framework
- **📱 Responsive Design** - Mobile-first, responsive layout
- **🐳 Docker Support** - Containerized development and production
- **📦 TypeScript** - Type-safe development experience
- **🔧 Strapi CMS Integration** - Headless CMS for content management

## 🛠 Tech Stack

### Frontend
- **Next.js 15.5.5** - React framework with App Router
- **React 19.1.0** - Latest React with concurrent features
- **TypeScript 5** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **Next.js i18n** - Built-in internationalization

### Backend
- **Strapi 5.25.0** - Headless CMS
- **SQLite** - Lightweight database
- **Node.js 18** - Runtime environment

### DevOps
- **Docker & Docker Compose** - Containerization
- **Alpine Linux** - Lightweight container base

## 📁 Project Structure

```
project-root/
├── frontend/                 # Next.js frontend application
│   ├── src/
│   │   ├── app/
│   │   │   ├── [lang]/      # Internationalized routes
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/  # Dynamic page routes
│   │   │   ├── api/         # API routes
│   │   │   ├── components/  # Reusable components
│   │   │   ├── styles/      # Global styles
│   │   │   └── types/       # TypeScript type definitions
│   │   └── lib/            # Utility functions
│   ├── public/             # Static assets
│   ├── tailwind.config.js  # Tailwind configuration
│   ├── next.config.ts      # Next.js configuration
│   └── tsconfig.json       # TypeScript configuration
├── backend/                 # Strapi CMS backend
│   ├── src/
│   │   ├── api/            # API endpoints
│   │   ├── extensions/     # Strapi extensions
│   │   └── index.js        # Entry point
│   ├── config/             # Strapi configuration
│   ├── database/           # Database files
│   └── public/             # Public assets
├── docker-compose.yaml     # Docker services configuration
└── README.md              # This file
```

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+** - [Download here](https://nodejs.org/)
- **Docker & Docker Compose** - [Download here](https://www.docker.com/products/docker-desktop/)
- **Git** - [Download here](https://git-scm.com/)

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd ua-finance
```

### 2. Start with Docker (Recommended)

```bash
# Build and start all services
docker compose up --build

# Or run in background
docker compose up -d --build
```

### 3. Manual Setup (Alternative)

#### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

#### Backend Setup
```bash
cd backend
npm install
npm run develop
```

## 🌐 Access Points

- **Frontend**: http://localhost:3000
- **Backend (Strapi)**: http://localhost:1337
- **Admin Panel**: http://localhost:1337/admin

## 🌍 Internationalization

The project supports multiple languages with automatic routing:

- **English**: `/en/`
- **Simplified Chinese**: `/zh-hans/`
- **Traditional Chinese**: `/zh-hant/`

### Adding New Languages

1. Add language code to `src/app/types/locales.ts`:
```typescript
export type Language = 'en' | 'zh-hans' | 'zh-hant' | 'ja';
```

2. Create translation files in `src/app/dictionaries/`:
```json
// src/app/dictionaries/ja.json
{
  "hello": "こんにちは",
  "welcome": "ようこそ"
}
```

3. Update the `SUPPORTED_LANGUAGES` array in `src/app/types/locales.ts`

### Using Translations

```typescript
import { getDictionary } from '@/app/[lang]/dictionaries';

export default async function Page({ params }: LocalePageProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Language);
  
  return <h1>{dictionary.hello}</h1>;
}
```

## 🔌 API Content Fetching

The project includes server-side API content fetching for dynamic content:

### API Route Example
```typescript
// src/app/api/pages/route.ts
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get('locale') || 'en';
  
  // Fetch content from external API
  const response = await fetch(`https://api.example.com/pages?locale=${locale}`);
  const data = await response.json();
  
  return Response.json(data);
}
```

### Server Component Usage
```typescript
export default async function Page({ params }: LocalePageProps) {
  const { lang } = await params;
  
  // Server-side data fetching
  const response = await fetch(`http://localhost:1337/api/pages?locale=${lang}`, {
    cache: 'no-store' // Always fetch fresh data
  });
  const data = await response.json();
  
  return <div>{data.title}</div>;
}
```

## 🎨 Tailwind CSS

The project uses Tailwind CSS 4 with modern configuration:

### Configuration
```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
    },
  },
  plugins: [],
}
```

### Usage Examples
```tsx
<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
  <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
    <h1 className="text-4xl font-bold">Welcome</h1>
  </main>
</div>
```

## 🐳 Docker Configuration

### Development
```bash
# Start development environment
docker compose up --build

# View logs
docker compose logs -f

# Stop services
docker compose down
```

### Production
```bash
# Build production images
docker compose -f docker-compose.prod.yml up --build

# Run in background
docker compose -f docker-compose.prod.yml up -d
```

## 📝 TypeScript

The project is fully typed with TypeScript:

### Type Definitions
```typescript
// src/app/types/locales.ts
export type Language = 'en' | 'zh-hans' | 'zh-hant';

export interface LocalePageProps {
  params: Promise<{
    lang: Language;
  }>;
}

export interface TranslationDictionary {
  [key: string]: string | TranslationDictionary;
}
```

### Component Props
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}
```

## 🔧 Development Scripts

### Frontend
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

### Backend
```bash
npm run develop      # Start Strapi development server
npm run build        # Build Strapi admin panel
npm run start        # Start Strapi production server
```

## 📊 Performance Features

- **Server-Side Rendering** - Fast initial page loads
- **Dynamic Imports** - Code splitting for optimal performance
- **Image Optimization** - Next.js automatic image optimization
- **Static Generation** - Pre-rendered pages where possible
- **Edge Runtime** - Fast API responses

## 🔒 Security Features

- **TypeScript** - Compile-time error prevention
- **Environment Variables** - Secure configuration management
- **CORS Configuration** - Controlled cross-origin requests
- **Input Validation** - Server-side validation
- **HTTPS Ready** - Production security headers

## 🚀 Deployment

### Vercel (Recommended for Frontend)
```bash
npm install -g vercel
vercel --prod
```

### Docker Production
```bash
docker compose -f docker-compose.prod.yml up -d
```

### Environment Variables
```bash
# Frontend
NEXT_PUBLIC_API_URL=https://your-api-domain.com

# Backend
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
JWT_SECRET=your-super-secret-jwt-key
ADMIN_JWT_SECRET=your-admin-jwt-secret
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check the `/docs` folder for detailed guides
- **Issues**: Report bugs and request features via [GitHub Issues](https://github.com/your-username/ua-finance/issues)
- **Discussions**: Join community discussions in [GitHub Discussions](https://github.com/your-username/ua-finance/discussions)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Strapi](https://strapi.io/) - Headless CMS
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript

---

**Happy Coding! 🎉**
