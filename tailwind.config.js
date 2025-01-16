/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': 'var(--primary-color)',
        'secondary-color': 'var(--secondary-color)',
        'background': 'var(--background-color)',
        'card-background': 'var(--card-background)',
        'text-color': 'var(--text-color)',
        'text-secondary': 'var(--text-secondary)',
      },
    },
  },
  plugins: [],
}

