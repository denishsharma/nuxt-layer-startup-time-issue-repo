import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  devtools: {enabled: true},
  compatibilityDate: '2024-12-12',
  future: {
    compatibilityVersion: 4
  },
  extends: ['..'],
  modules: ['@nuxt/eslint'],
  eslint: {
    config: {
      // Use the generated ESLint config for lint root project as well
      rootDir: fileURLToPath(new URL('..', import.meta.url))
    }
  },
})
