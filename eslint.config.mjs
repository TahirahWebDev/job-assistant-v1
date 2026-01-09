import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disables the error for unused variables (router, err, icons, etc.)
      "@typescript-eslint/no-unused-vars": "off",
      
      // Disables the error for using 'any' types
      "@typescript-eslint/no-explicit-any": "off",
      
      // Disables the error for unused imports
      "no-unused-vars": "off",

      // Optional: Disables warning for unescaped entities like '
      "react/no-unescaped-entities": "off"
    },
  },
];

export default eslintConfig;