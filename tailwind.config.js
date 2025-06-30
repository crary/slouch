/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#A7D1AB',   // Soft green
        'secondary': '#E2F0CB', // Very light green for a soft background
        'accent': '#77B5FE',    // Soft blue for highlights
        'success': '#6EEB83',   // Muted green for positive feedback
        'warning': '#FCD34D',   // Soft yellow for warnings
        'error': '#FCA5A5',     // Light red for errors
        'text-primary': '#374151', // Dark gray for primary text
        'text-secondary': '#6B7280', // Medium gray for secondary text
      },
      fontFamily: {
        'sans': ['"Roboto"', 'sans-serif'], // More modern and readable sans-serif
        'display': ['"Poppins"', 'sans-serif'], // Clean and friendly font for headings
      },
    },
  },
  plugins: [],
}
