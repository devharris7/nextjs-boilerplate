const purgeEnabled = process.env.NODE_ENV === "production";

console.log("\n");
console.log(`   TailwindCSS \n`);
console.log(`   ----------- \n`);
console.log(`   ✅ purgeEnabled=${purgeEnabled}\n`);

module.exports = {
  purge: {
    enabled: purgeEnabled,
    content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  },
  theme: {
    extend: {},
  },
  variants: {},
};
