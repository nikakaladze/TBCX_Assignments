import type { Config } from "tailwindcss";

export const darkMode: Config["darkMode"] = "class";

export const content: Config["content"] = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
];

export const theme: Config["theme"] = {
  extend: {
    colors: {},
  },
};

export const plugins: Config["plugins"] = [];

