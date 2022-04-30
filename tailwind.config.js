const purgeEnabled = process.env.NODE_ENV === "production";

console.log("\n");
console.log(`   TailwindCSS \n`);
console.log(`   ----------- \n`);
console.log(`   ✅ purgeEnabled=${purgeEnabled}\n`);

module.exports = {
  content: [".src/pages/**/*.{js,jsx,ts,tsx}", ".src/components/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    {
      pattern: /./,
    },
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("daisyui")],
};
