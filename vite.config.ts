import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const csp = "default-src 'self'; font-src 'self' https://fonts.gstatic.com data:; style-src 'self' https://fonts.googleapis.com; script-src 'self'; img-src 'self' data:; connect-src 'self'; object-src 'none'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'";

// Report-only CSP: violations are logged to the console but nothing is
// blocked, so Vite's dev-mode eval/HMR websocket keep working.
const securityHeaders = {
  'Cross-Origin-Opener-Policy': 'same-origin-allow-popups',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
  'Cross-Origin-Resource-Policy': 'same-origin',
  'content-security-policy-report-only': csp,
};

// Only reached via "npm run build && npm run preview" — mirrors the
// production (vercel.json) headers so the enforced CSP can be tested
// locally. Strict-Transport-Security is meaningless/harmless over
// localhost http, kept here only to exercise the same header set.
const securityHeadersPreview = {
  'Cross-Origin-Opener-Policy': 'same-origin-allow-popups',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
  'Cross-Origin-Resource-Policy': 'same-origin',
  'content-security-policy': `${csp}; require-trusted-types-for 'script'; trusted-types 'none'`,
  'Strict-Transport-Security': 'max-age=300',
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { headers: securityHeaders },
  preview: { headers: securityHeadersPreview },
})
