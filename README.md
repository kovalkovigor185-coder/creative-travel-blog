# The Roam Report — Creative Travel Blog

Creative travel landing page for a Kwork portfolio. Adapted from the Creative Travel Blog community reference with a custom illustrated road-trip sequence.

- Live: https://creative-travel-blog-igor-16db.vercel.app/
- Repository: https://github.com/kovalkovigor185-coder/creative-travel-blog
- Figma reference: https://www.figma.com/site/DsaWFNrdDxy84mTPfBkuSR/Creative-Travel-Blog--Community-?node-id=33-28522

## Stack and setup

Next.js App Router, React, TypeScript, SCSS Modules, GSAP ScrollTrigger and MotionPathPlugin. Local Gasoek One and Plus Jakarta Sans fonts; their SIL OFL licenses are included in `src/app/fonts`.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3003. `npm run build` produces the static site in `out/`. `npm run typecheck` checks TypeScript.

## Interaction

Scroll through an original SVG landscape to drive a camper along a winding road. Its rotation follows the road tangent; the traveled path, distance counter and four chapter cards update together. The mobile camera follows the vehicle. Chapter buttons navigate the journey; a motion toggle and the OS reduced-motion preference provide a static version.

Story cards open short original field notes in a native modal dialog with keyboard focus containment, Escape and backdrop dismissal. All photography is local. The page uses normal document scrolling and native anchors.

## Reference and assets

The delivered layout is a creative adaptation, not an exact replica of all Figma pages. It includes the blue/cream/olive palette, Gasoek One and Plus Jakarta Sans typography, travel cards, upcoming itinerary, and a custom road scene. There is no backend, account registration or form submission.

The user-supplied photograph exports are 210–256 px wide. They are used as card images and small itinerary previews. Five 26×26 px exports were saved with the design references but not enlarged into production photographs. The dune photograph, large Tasmania photograph and train illustration were not supplied as separate usable assets. The hero therefore uses live typography and the original coded map scene rather than a flattened screenshot. Full-size originals can replace the local files without changing component logic.

Reference exports are preserved outside the repository in `KWORK/designs/creative-travel-blog`. The source project is in `KWORK/projects/creative-travel-blog`.

## Verification

Production build and TypeScript pass. Browser checks cover desktop (1440×900), mobile (390×844), route chapter navigation, forward/backward movement, motion toggle, image loading, story modal and Escape. No horizontal overflow or browser errors were found in these flows.

Animation implementation follows the official [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) and [MotionPathPlugin](https://gsap.com/docs/v3/Plugins/MotionPathPlugin/) documentation.

Vercel hosts a locally built static export. GitHub automatic deployments are not configured.
