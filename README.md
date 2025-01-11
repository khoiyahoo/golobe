# Your project name

## 🚀 Overview
[Please describe your project here]

## ⚙️ Tech Stack
- Nuxt.js
- TypeScript
- Vue 3
- List your techs that have been added.

## 📁 Project Structure
```
pages/               # file-based routing
├── index.vue
├── profile.vue

assets/              # Static files
├── images/
├── fonts/
└── styles/

components/          # Shared components (Atomic Design)
├── atoms/
│   ├── Button/
│   ├── Input/
│   └── Text/
├── molecules/
│   ├── FormGroup/
│   ├── SearchBar/
│   └── Card/
├── organisms/
    ├── Header/
    ├── Footer/
    └── NavigationBar/


config/              # Global configurations
├── env.ts
└── constants.ts

features/           # Feature-based modules
├── auth/
│   ├── components/
│   ├── hooks/
│   └── types/
└── dashboard/
    ├── components/
    ├── hooks/
    └── types/

composables/              # Shared hooks
├── useAuth.ts
└── useTheme.ts

lib/               # Reusable libraries
├── api/
└── validators/

constants/            # Constants parameter
├── META.ts
└── SITEMAP.ts

layout/           # Test utilities
├── index.vue/
└── form.vue/

types/             # Shared types
├── components.ts
└── api.ts

utils/             # Shared utilities
├── formatting.ts
└── validation.ts

```

## 🌲 Component Hierarchy

### 1. Atoms
- Basic building blocks of matter
- Cannot be broken down further without losing their meaning
- Examples: Button, Input, Text, Icon

### 2. Molecules
- Groups of atoms bonded together
- Serve as the foundation for larger components
- Examples: FormGroup, SearchBar, Card

### 3. Organisms
- Complex UI components composed of molecules and atoms
- Form distinct sections of the interface
- Examples: Header, Footer, NavigationBar

### 4. Templates/Page
- Page-level objects that place components into a layout
- Provide context to molecules and organisms
- Page is the instance of out template.

## 🗺️ Usage Guidelines

### 1. Feature-Based Development
Each feature should be self-contained in the `features` directory:
```ts
// components/organisms/LoginForm.vue
<script setup lang="ts">
import { useAuth } from '@/features/auth/hooks/useAuth'
import type { LoginFormData } from '@/features/auth/types'

const { login } = useAuth()
</script>
```

### 2. Component Creation
Always create components in their appropriate atomic level:
```typescript
// atoms/Button/Button.vue
<script setup lang="ts">
interface ButtonProps {
  label: string
  onClick?: () => void
}
</script>

// molecules/SearchBar/SearchBar.vue
<template>
  <div class="search-bar">
    <AtomInput v-model="searchText" />
    <AtomButton label="Search" />
  </div>
</template>
```

### 3. Type Safety
Use TypeScript interfaces for all things:
```typescript
// types/components.ts
export interface InputProps {
  modelValue: string
  placeholder?: string
  disabled?: boolean
}
```

## 🥇 Best Practices

1. **Component Independence**
   - Atoms should be independent and reusable
   - Higher-level components should handle business logic

2. **type**
   - Do not use 'any' unless you have no other choice.

3. **Documentation**
   - Consider documenting feature usage in the readme file:
    - Why use this feature?
    - How to use this feature?
    - What does this feature do?

4. **Testing**
   - Write unit tests for atoms and molecules, utils
   - Integration tests for organisms, features
   - E2E tests for templates

## 🚥 Getting Started
### Setup

Make sure to install dependencies:

```bash
pnpm install
```

### Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

### Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

## 🌐 Resources
- [Atomic Design Methodology](https://bradfrost.com/blog/post/atomic-web-design/)
- [Nuxt Documentation](https://nuxt.com/)
- [Vue 3 Documentation](https://vuejs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
