import eslintPluginPrettier from "eslint-plugin-prettier/recommended"
import withNuxt from "./.nuxt/eslint.config.mjs"

export default withNuxt(eslintPluginPrettier)
