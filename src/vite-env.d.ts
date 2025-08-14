/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GA4_MEASUREMENT_ID: string
  readonly VITE_ENABLE_DEV_ANALYTICS: string
  readonly VITE_ANALYTICS_DEBUG: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
