/**
 * Shared design-system constants.
 * Single source of truth for layout, type scale, and components
 * so every page renders with the same rhythm.
 */

/* Layout */
export const containerClass = 'mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-[86px]'
export const sectionClass = 'py-[72px] lg:py-[96px]'

/* Type scale — three tiers, all serif display */
export const heroHeadingClass =
  'text-[44px] font-medium leading-[1.0] tracking-[-0.02em] sm:text-[60px] lg:text-[72px]'
export const headingClass =
  'text-[34px] font-medium leading-[1.1] tracking-[-0.02em] text-neutral-950 sm:text-[42px] lg:text-[50px]'
export const subheadingClass =
  'text-[26px] font-medium leading-[1.2] tracking-[-0.01em] text-neutral-950 sm:text-[32px] lg:text-[38px]'

/* Supporting text */
export const eyebrowClass =
  'text-[11px] font-semibold uppercase tracking-[0.24em] text-neutral-500'
export const bodyClass =
  'text-base leading-[1.7] text-neutral-600 sm:text-lg lg:text-[20px]'
export const wordmarkClass =
  'text-sm font-semibold uppercase tracking-[0.28em]'

/* Buttons — one shape (pill), one type treatment */
export const btnPrimary =
  'group inline-flex items-center justify-center gap-2.5 rounded-full bg-neutral-950 px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-neutral-800'
export const btnSecondary =
  'inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-700 transition-colors duration-300 hover:border-neutral-950 hover:text-neutral-950'
