import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import nextPlugin from "@next/eslint-plugin-next";

export default tseslint.config(
  // Ignorar pastas de build e configurações da IDE
  { ignores: [".next/**", "node_modules/**", ".idx/**"] },
  
  // Regras base recomendadas
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  
  // Configuração estrita do Next.js sem a camada "compat"
  {
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      // Desativando as regras sensíveis para a nossa infraestrutura
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off"
    },
  }
);
