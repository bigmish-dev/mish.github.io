my-portfolio/
  ├── app/
  │   ├── layout.tsx
  │   ├── page.tsx         // Home
  │   ├── blog/
  │   │   └── page.tsx
  │   ├── projects/
  │   │   └── page.tsx
  │   ├── contact/
  │   │   └── page.tsx
  ├── components/
  │   └── Navbar.tsx
  ├── public/
  │   └── favicon.ico
  ├── tailwind.config.js
  ├── package.json
  └── tsconfig.json
{
  "name": "my-portfolio",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "15.0.0",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.4",
    "typescript": "^5.3.3"
  }
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
import './globals.css'
import { Navbar } from '../components/Navbar'

export const metadata = {
  title: "My Portfolio",
  description: "Personal blog and projects",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans">
        <Navbar />
        <main className="max-w-3xl mx-auto p-6">{children}</main>
      </body>
    </html>
  )
}
import Link from "next/link"

export function Navbar() {
  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-3xl mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-xl font-bold">MyPortfolio</Link>
        <div className="space-x-6">
          <Link href="/blog">Blog</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
export default function Home() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Hey, I’m [Your Name]</h1>
      <p className="text-lg text-gray-700">
        Welcome to my little corner of the internet. I write about coding, AI, and ideas I’m building.  
        This site is my portfolio + blog + playground.
      </p>
    </section>
  )
}
export default function Blog() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <p className="text-gray-700">Posts will show up here soon.</p>
    </section>
  )
}
export default function Projects() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>🎮 Game idea: [Title]</li>
        <li>🤖 AI experiment: [Cool thing]</li>
        <li>💻 Other coding work...</li>
      </ul>
    </section>
  )
}
export default function Contact() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Contact</h1>
      <p>Email me at <a href="mailto:you@example.com" className="text-blue-600">you@example.com</a></p>
      <p>Or connect on <a href="https://twitter.com/yourhandle" target="_blank" className="text-blue-600">Twitter</a></p>
    </section>
  )
}
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: system-ui, sans-serif;
}
