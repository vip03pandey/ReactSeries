Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

@tailwind base;
@tailwind components;
@tailwind utilities;