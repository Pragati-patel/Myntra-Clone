/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Assistant: "Assistant",
      },
      colors: {
        "282c3f": "#282c3f",
        ff3f6c: "#ff3f6c",
        535766: "#535766",
      },
      fontSize: {
        10: "10px",
        18: "18px",
        16: "16px",
        20: "20px",
        14: "14px",
        12: "12px",
        24: "24px",
        32: "32px",
      },
    },
  },
  plugins: [],
};
