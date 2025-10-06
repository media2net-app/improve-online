# Curacao Retraite - Moderne Login Pagina

Een moderne, responsive login pagina gebouwd met Next.js 14, TypeScript en Tailwind CSS.

## Features

- 🎨 **Moderne Design**: Dark mode met glassmorphism effecten
- 🎯 **Brand Colors**: Orange (#E33412) en Grey (#1F1F1F)
- 📱 **Responsive**: Mobile-first design
- ✨ **Animaties**: Subtiele floating animaties en smooth transitions
- 🔒 **Form Validatie**: React Hook Form met Zod validatie
- 🚀 **TypeScript**: Volledige type safety
- 🎭 **Accessibility**: Screen reader vriendelijk

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Hook Form** - Form handling
- **Zod** - Schema validatie
- **Lucide React** - Icons

## Installatie

1. Installeer dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open [http://localhost:6001](http://localhost:6001) in je browser

## Project Structuur

```
├── app/
│   ├── globals.css          # Global styles en Tailwind config
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   └── LoginPage.tsx        # Main login component
├── package.json
├── tailwind.config.js       # Tailwind configuratie
└── tsconfig.json           # TypeScript configuratie
```

## Features Overzicht

### Design
- Full-screen background met gradient
- Floating geometric shapes met animaties
- Glassmorphism effecten
- Smooth hover states en transitions

### Functionaliteit
- Email/password validatie
- Show/hide password toggle
- Remember me checkbox
- Forgot password link
- Social login (Google) placeholder
- Loading states
- Form error handling

### Responsive Design
- Mobile-first approach
- Tablet en desktop optimalisatie
- Touch-friendly interface

## Customization

### Colors
De brand colors zijn gedefinieerd in `tailwind.config.js`:
- Primary Orange: #E33412
- Primary Grey: #1F1F1F

### Animaties
Custom animaties zijn beschikbaar in `globals.css`:
- `floating-animation`: Floating effect voor shapes
- `fade-in`: Fade in effect
- `slide-up`: Slide up effect

## Development

De development server draait standaard op poort 6001 om conflicten te voorkomen met andere projecten.

```bash
npm run dev    # Development server
npm run build  # Production build
npm run start  # Production server
npm run lint   # ESLint check
```

