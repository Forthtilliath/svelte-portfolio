// Registers the jest-dom matchers (`toBeInTheDocument`, `toHaveAttribute`, …) on
// Vitest's `expect` for the component test suite (`*.svelte.test.ts`). They are
// wired at runtime in `vitest-setup-client.ts`; this file is types-only.
import '@testing-library/jest-dom/vitest';
