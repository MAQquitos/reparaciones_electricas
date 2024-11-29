/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};

import { BrowserRouter } from "react-router-dom";

<BrowserRouter basename="/reparaciones_electricas">
  <App />
</BrowserRouter>;
