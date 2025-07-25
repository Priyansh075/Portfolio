/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // Enable class-based dark mode
    theme: {
      extend: {
        colors: {
          primary: '#1e293b', // Slate-800
          secondary: '#0ea5e9', // Sky-500
          accent: '#f472b6', // Pink-400
          highlight: '#facc15', // Yellow-400
          surface: '#334155', // Slate-700
          muted: '#64748b', // Slate-500
          background: '#0f172a', // Slate-900
        },
      },
    },
    plugins: [],
  }