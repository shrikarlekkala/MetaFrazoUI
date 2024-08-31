/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: {
          light: ['Satoshi-Light', 'sans-serif'],
          lightItalic: ['Satoshi-LightItalic', 'sans-serif'],
          regular: ['Satoshi-Regular', 'sans-serif'],
          italic: ['Satoshi-Italic', 'sans-serif'],
          medium: ['Satoshi-Medium', 'sans-serif'],
          mediumItalic: ['Satoshi-MediumItalic', 'sans-serif'],
          bold: ['Satoshi-Bold', 'sans-serif'],
          boldItalic: ['Satoshi-BoldItalic', 'sans-serif'],
          black: ['Satoshi-Black', 'sans-serif'],
          blackItalic: ['Satoshi-BlackItalic', 'sans-serif'],
          variable: ['Satoshi-Variable', 'sans-serif'],
          variableItalic: ['Satoshi-VariableItalic', 'sans-serif'],
        },
      },
    },
  },
  plugins: [],
}