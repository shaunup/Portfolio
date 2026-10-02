import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // Apostrophes in user-facing text are intentional and readable
      "react/no-unescaped-entities": "off",
      // Allow setState in effects for mounting patterns
      "react-hooks/set-state-in-effect": "off",
      // Allow refs in navigation
      "react/no-access-state-in-setstate": "off",
    },
  },
]);

export default eslintConfig;
