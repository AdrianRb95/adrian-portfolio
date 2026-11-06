# DESIGN.md — Visual System Contract (Impeccable Standard)

> **Visual World:** Architectural Titanium & Specular Obsidian  
> **Aesthetic Benchmarks:** Tomasz Fudali, With Honey, Outpace Studios, Emil Kowalski  
> **Anti-Slop Compliance:** Verified via `impeccable detect` (0 anti-patterns)

---

## 1. Typography & Hierarchy

* **Display / Headlines:** `Syne` (Bold, 800/900 weight), `letter-spacing: -0.03em`, `text-wrap: balance`. Deliberate, sculpted letterforms with high character.
* **Body Copy:** `Plus Jakarta Sans`, line-height `1.6`, `text-wrap: pretty`, measure strictly kept between `45ch` and `65ch`.
* **Technical Metadata / Code:** `JetBrains Mono`, tabular figures (`tnum`).

### Type Ramp
| Token | Size | Line Height | Tracking | Weight | Role |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `display-hero` | 4rem – 6rem (64–96px) | 1.05 | -0.035em | 900 | Hero punchy title |
| `heading-section` | 2.5rem – 3.5rem (40–56px) | 1.1 | -0.03em | 800 | Section titles |
| `heading-card` | 1.5rem – 1.875rem (24–30px) | 1.2 | -0.025em | 800 | Project card titles |
| `body-editorial` | 1.125rem – 1.25rem (18–20px) | 1.5 | -0.01em | 400 | Manifesto & key copy |
| `body-standard` | 0.875rem – 1rem (14–16px) | 1.6 | normal | 400 | Standard prose |
| `code-meta` | 0.75rem – 0.8125rem (12–13px) | 1.4 | 0.02em | 500 | Badges, coordinates, timecodes |

---

## 2. Color Palette & Roles

* **Obsidian Canvas (`--bg-canvas`):** `#06090E`
* **Surface Panel (`--bg-surface`):** `#0B1017`
* **Surface Elevated (`--bg-elevated`):** `#111823`
* **Subtle Rim Border (`--border-subtle`):** `rgba(255, 255, 255, 0.08)`
* **Specular Top Chamfer (`--border-chamfer`):** `rgba(255, 255, 255, 0.16)`
* **Text High Contrast:** `#F1F5F9` (Alabaster / Off-white)
* **Text Secondary:** `#94A3B8` (Slate 400)
* **Text Muted:** `#64748B` (Slate 500)
* **Live Status Indicator:** `#10B981` (6px Emerald LED dot, reserved exclusively for active production indicators).

---

## 3. Tactile Button Specification

1. **Primary Button:** Alabaster matte porcelain (`bg-zinc-100 text-zinc-950 hover:bg-white`) with micro-border, specular rim highlight, and real physical press feedback (`active:translate-y-[1px] active:scale-[0.98]`).
2. **Secondary Button:** Deep obsidian graphite (`bg-zinc-900/90 text-zinc-200 border border-white/10 hover:border-white/20`).
3. **No Rainbows:** Never use arbitrary pink, indigo, purple, or cyan button fills.

---

## 4. Impeccable Craft Floor (Absolute Negative Constraints)

1. ❌ **NO Kickers / Eyebrows above Headings:** Headings speak for themselves; no decorative labels floating overhead.
2. ❌ **NO Nested Cards:** Avoid `card` inside `card`. Separate interior content with white space, typography, and 1px dividers.
3. ❌ **NO Gradient Text:** Solid colors only; emphasis comes from weight, contrast, and scale.
4. ❌ **NO Monospace as Costume:** Monospace is reserved strictly for actual code, telemetry, coordinates, and metrics.
5. ❌ **NO Zero-Offset Halos:** Directional soft elevation shadows only (`offset-y: 12px, blur: 32px`).
