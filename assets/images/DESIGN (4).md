---
name: Warm Professional
colors:
  surface: '#faf9f7'
  surface-dim: '#dadad8'
  surface-bright: '#faf9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f1'
  surface-container: '#efeeec'
  surface-container-high: '#e9e8e6'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1b'
  on-surface-variant: '#444748'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1ef'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#0e0f0f'
  on-primary: '#ffffff'
  primary-container: '#242424'
  on-primary-container: '#8c8b8b'
  inverse-primary: '#c8c6c5'
  secondary: '#655d54'
  on-secondary: '#ffffff'
  secondary-container: '#eaded2'
  on-secondary-container: '#6a6158'
  tertiary: '#0e0f0d'
  on-tertiary: '#ffffff'
  tertiary-container: '#242422'
  on-tertiary-container: '#8c8b88'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e4e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1b1c1c'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#ede0d5'
  secondary-fixed-dim: '#d0c5b9'
  on-secondary-fixed: '#201b14'
  on-secondary-fixed-variant: '#4d463d'
  tertiary-fixed: '#e5e2df'
  tertiary-fixed-dim: '#c8c6c3'
  on-tertiary-fixed: '#1c1c1a'
  on-tertiary-fixed-variant: '#474745'
  background: '#faf9f7'
  on-background: '#1a1c1b'
  surface-variant: '#e3e2e0'
typography:
  headline-xl:
    fontFamily: Source Serif 4
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Source Serif 4
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Source Serif 4
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Source Serif 4
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style
This design system is built for high-end legal practices, prioritizing prestige, intellectual authority, and a legacy-driven aesthetic. The style is a blend of **Minimalism** and **Modern Corporate**, utilizing a "warm" palette to move away from the cold, clinical feel of traditional digital interfaces. 

The UI should evoke the feeling of high-quality parchment and bespoke tailoring—reliable, quiet, and exceptionally organized. We avoid aggressive visual effects in favor of generous whitespace and refined, editorial-grade typography. The emotional response is one of calm assurance and established trust.

## Colors
The color strategy employs a "Triple-Tone" approach to create a sophisticated hierarchy:
- **Base:** A soft parchment off-white (#FAF9F7) used for primary surfaces to reduce eye strain and feel more premium than pure white.
- **Mid-tones:** Light taupe and sand shades are used for containers, dividers, and secondary actions, providing a subtle contrast that guides the eye without creating visual noise.
- **Contrast:** Deep charcoal (#242424) is reserved for high-impact typography and primary interactive elements, ensuring maximum legibility and an authoritative presence.

## Typography
The typographic pairing is designed to mirror the layout of a prestigious law journal. 
- **Source Serif 4** provides the authoritative "editorial" voice for headlines. It should be used with tighter letter-spacing in larger formats to maintain a modern feel.
- **Work Sans** serves as the functional workhorse. It is a grounded, neutral sans-serif that ensures clarity in complex legal documentation and interface labels.
- **Scale:** On mobile devices, `headline-xl` should scale down to 32px to ensure readability and prevent awkward text wrapping.

## Layout & Spacing
This design system utilizes a **Fixed Grid** philosophy for desktop to maintain the "contained" feel of a physical document. 
- **Desktop:** A 12-column grid centered within a 1280px container. 
- **Rhythm:** An 8px linear scale governs all padding and margins. 
- **Density:** We prefer "Low Density" layouts. Ample margins (48px+) around main content blocks are required to signify premium positioning. 
- **Reflow:** On mobile, the 12-column grid collapses to a 4-column system with 16px side margins. Content should stack vertically, prioritizing readability over side-by-side density.

## Elevation & Depth
Elevation in this system is achieved through **Tonal Layers** rather than heavy shadows. 
- **Base Layer:** Off-white (#FAF9F7) background.
- **Elevated Layer:** Containers and cards use a slightly warmer mid-tone (#F4F1EE) or a 1px solid border (#E8E4E0) to differentiate from the background.
- **Shadows:** Only use shadows for ephemeral elements like dropdown menus or modals. When used, shadows must be extremely diffused (24px+ blur), low opacity (max 8%), and tinted with the secondary taupe color to avoid a "dirty" grey appearance.

## Shapes
We use **Rounded** geometry (8px / 0.5rem) to soften the professional aesthetic, making the interface feel modern and accessible rather than archaic.
- **Standard UI Elements:** 8px radius (Buttons, Input fields, Chips).
- **Large Containers:** 16px radius (Cards, Modals).
- **Interactive Elements:** Maintain consistent corner radii across all states to preserve the structural integrity of the grid.

## Components
- **Buttons:** The primary button is Solid Charcoal with White text. Secondary buttons use a transparent background with a 1px Taupe border. High-end legal apps should avoid "loud" call-to-actions; buttons should be wide and use `label-md` for text.
- **Input Fields:** Use a subtle "Sand" background (#F4F1EE) with a bottom-only border that thickens on focus. This mimics the look of a physical form.
- **Cards:** No shadows. Use a 1px border in a slightly darker taupe or a simple fill change to differentiate cards from the background.
- **Lists:** Use generous vertical padding (16px+) between list items. Use thin 1px dividers in a very light taupe (#EEEBE8).
- **Chips/Tags:** Small, 4px rounded corners, using the mid-tone taupe background with charcoal text for high contrast.
- **Additional Elements:** Incorporate "Document Viewers" with a specific off-white treatment and "Signature Blocks" that use the Source Serif 4 font for a personal, professional touch.