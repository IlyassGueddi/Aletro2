# Design System Specification: High-End Editorial Dining

## 1. Overview & Creative North Star
**Creative North Star: "The Culinary Noir"**

This design system is built to transform a standard food ordering process into a high-end, editorial experience. We reject the "utility-first" look of standard delivery apps in favor of a cinematic, dark-mode aesthetic that mirrors a physical, premium restaurant menu. 

The system utilizes **intentional asymmetry** and **high-contrast tonal depth** to create a sense of luxury. By prioritizing large-scale photography and generous negative space, we allow the food to act as the primary visual anchor. The interface is not just a tool; it is a digital curator that guides the user through a curated gastronomic journey using a "Fast-Minimal" philosophy—removing every unnecessary line to focus on speed, flavor, and elegance.

---

## 2. Colors
Our palette is rooted in deep, charcoal foundations to provide a canvas where vibrant, culinary-inspired reds can pop with intensity.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections or containers. Separation must be achieved through background shifts. For example, a card using `surface-container-highest` (#262626) should sit directly on a `surface` (#0e0e0e) background. The contrast between these two tones is the only divider needed.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of stacked obsidian.
*   **Base:** `surface` (#0e0e0e) — The foundation of the application.
*   **Mid-Level:** `surface-container` (#1a1a1a) — Used for primary content blocks.
*   **Top-Level:** `surface-bright` (#2c2c2c) — For active elements or modals.

### The "Glass & Gradient" Rule
To elevate the "Editorial" feel, use **Glassmorphism** for floating headers or navigation bars. Apply `surface` at 70% opacity with a 20px backdrop-blur. 
*   **Signature Textures:** Use subtle linear gradients for primary CTAs, transitioning from `primary` (#ff8d8c) to `primary-container` (#ff7576) at a 45-degree angle. This adds a "glow" effect that flat colors cannot replicate.

---

## 3. Typography
We utilize **Plus Jakarta Sans** for its geometric precision and premium readability.

*   **Display (lg/md):** Used for dish names in hero sections. These should be tracked slightly tight (-2%) to feel modern and impactful.
*   **Headline (sm/md):** Used for category titles. Use these to anchor the editorial layout with significant leading (whitespace) above them.
*   **Title (lg/md):** Used for dish names in list views. 
*   **Body (lg/md):** Optimized for ingredient descriptions. High-contrast (`on-surface`) ensures legibility against dark backgrounds.
*   **Label (sm/md):** Used for nutritional info and price tags.

**Hierarchy Strategy:** Brand identity is conveyed by pairing `display-lg` typography with high-quality photography, creating a magazine-style layout where text overlaps images slightly to break the rigid grid.

---

## 4. Elevation & Depth
In this design system, shadows and borders are replaced by **Tonal Layering**.

*   **The Layering Principle:** Depth is achieved by stacking containers. Place a `surface-container-low` item inside a `surface-container-high` wrapper to create "recessed" or "elevated" zones without a single drop shadow.
*   **Ambient Shadows:** If an element must float (e.g., a "Back to Top" button), use an extra-diffused shadow. 
    *   *Spec:* Blur: 40px, Y: 10px, Color: `on-background` at 6% opacity.
*   **The Ghost Border Fallback:** If accessibility requires a border, use the **Ghost Border**: `outline-variant` (#484847) at 15% opacity. Never use 100% opaque borders.
*   **Glassmorphism:** Navigation menus should use `surface-container-lowest` with a backdrop-blur. This makes the UI feel integrated and airy, preventing the "heavy" feeling common in dark-mode apps.

---

## 5. Components

### Buttons & Chips
*   **Primary Button:** Full-pill shape (`rounded-full`). Background: `primary` (#ff8d8c). Text: `on-primary` (#640010). No border.
*   **Selection Chips:** For categories (e.g., "Burgers," "Sushi"). When unselected, use `surface-variant`. When selected, use `primary` with a high-glow `primary-dim` shadow.
*   **Interaction States:** On press, scale buttons down to 96% to provide tactile, "fast" feedback.

### Cards & Lists
*   **Food Cards:** Forbid divider lines. Use `surface-container-low` (#131313) for the card background. The card must have a `xl` (3rem) corner radius for a soft, premium feel. 
*   **Price Tags:** Floating pill shapes using `secondary` (#fb7e9e) with `on-secondary` text, positioned asymmetrically over the food image.

### Input Fields
*   **Search Bar:** A large, pill-shaped `surface-container-highest` container. Icons should be `primary` to guide the eye. Helper text should use `on-surface-variant` at `body-sm` scale.

### Navigation (The "Floating Tab")
Instead of a standard bottom nav, use a floating, pill-shaped dock. 
*   **Style:** `surface-container-high` at 80% opacity with a 15px backdrop-blur. Use `primary` for active icons and `outline` for inactive.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use massive margins. White space (or "Dark Space") is the ultimate luxury.
*   **Do** let food photography bleed to the edges of the screen in hero sections.
*   **Do** use `primary-fixed-dim` for "Add to Cart" actions to ensure they are the most vibrant element on the screen.
*   **Do** use subtle transitions (300ms ease-out) when moving between menu categories.

### Don't:
*   **Don't** use pure black (#000000) for large surfaces; it feels "dead." Always use the deep charcoal `surface` (#0e0e0e).
*   **Don't** use standard dividers or lines to separate ingredients. Use vertical spacing (`spacing-md`) instead.
*   **Don't** use sharp corners. Everything in this system—from buttons to images—must utilize the `rounded-lg` to `rounded-full` scale.
*   **Don't** use high-contrast white for body text. Use `on-surface-variant` (#adaaaa) for secondary info to maintain the moody, editorial atmosphere.