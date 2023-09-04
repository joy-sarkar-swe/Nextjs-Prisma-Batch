import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["night", "dark", "cupcake","light","forest","bumblebee","emerald","halloween","luxury","garden","lofi","pastel","valentine","retro"],
  },
};
