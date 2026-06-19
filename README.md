# Neon First Day

A modern employee onboarding and internal staff management dashboard built with Next.js, TypeScript, TanStack Query, Zustand, Tailwind CSS, and shadcn/ui.

## Overview

Neon First Day is an internal employee experience platform designed to streamline onboarding, staff management, announcements, activity tracking, and administrative workflows.

The application demonstrates modern React and Next.js patterns including Server Components, Dynamic Routing, Metadata Generation, State Management, Data Fetching, Performance Optimization, and Role-Based Access Control.

---

## Features

### Authentication & Authorization

* Login system
* Protected routes
* Role-based access control
* Admin vs Employee experience
* Zustand-powered authentication state

### Employee Onboarding

* Multi-step onboarding flow
* Progress tracking
* Form validation with Zod
* Identity verification
* Professional information collection
* Confirmation workflow

### Staff Management

* Grid and Table views
* Debounced search
* Department filtering
* Sorting functionality
* Pagination
* Staff profile cards
* Batch selection
* Batch delete (local state)
* CSV upload support

### Announcements

* Dynamic announcement pages
* Server Components
* Dynamic routes (`/announcements/[id]`)
* Loading UI with Streaming Support
* Dynamic SEO metadata
* Open Graph integration

### Analytics

* Zodiac analytics dashboard
* Staff insights
* Team statistics
* Activity feed monitoring

### User Experience

* Responsive design
* Dark/Light mode
* Skeleton loading states
* Scroll-to-top functionality
* Lazy-loaded images
* Offline detection
* Modern dashboard UI

---

## Tech Stack

### Frontend

* Next.js 15
* React 19
* TypeScript
* Tailwind CSS
* shadcn/ui
* Lucide Icons

### State Management

* Zustand

### Data Fetching

* TanStack Query
* Axios

### Forms & Validation

* React Hook Form
* Zod

### UI Components

* Radix UI
* shadcn/ui

---

## Architecture Highlights

### App Router

The project uses the Next.js App Router architecture:

```text
app/
├── (auth)
├── (dashboard)
├── announcements/[id]
├── layout.tsx
└── providers.tsx
```

### Dynamic Routing

```text
/announcements/[id]
```

Each announcement has its own dynamic route and metadata.

### Server Components

Announcement detail pages are rendered on the server for improved performance and SEO.

### Performance Optimizations

* Debounced search
* React.memo
* Lazy image loading
* Pagination
* Memoized computations
* Server-side rendering
* Streaming UI

---

## Project Structure

```text
src/
├── app/
├── components/
├── hooks/
├── config/
├── lib/
├── types/
└── public/
```

### Components

Reusable UI and feature components.

### Hooks

Custom hooks for:

* Pagination
* Search
* Sorting
* Authentication
* Offline detection
* View management

### Lib

Business logic, API services, mappers, schemas, stores, and utilities.

---

## Getting Started

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

### Build Production Version

```bash
npm run build
npm start
```

---

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Add additional API keys and environment-specific values as needed.

---

## Key Learning Objectives Demonstrated

* Next.js App Router
* Server Components
* Dynamic Routing
* generateMetadata API
* TanStack Query
* Zustand State Management
* Form Validation with Zod
* TypeScript Best Practices
* Performance Optimization
* Role-Based Access Control
* Responsive Dashboard Design

---

## Screenshots

Add screenshots here:

```text
/public/screenshots/dashboard.png
```

---

## Future Improvements

* Real backend integration
* Persistent batch delete
* Advanced filtering
* Export analytics reports
* Notification system
* Audit logging
* User profile management
* Team collaboration tools

---

## License

This project is intended for educational and demonstration purposes.
