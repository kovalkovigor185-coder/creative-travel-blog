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

Story cards open complete article routes. `/archive/` contains all eight entries, `/article/` and `/article/tasmania/` contain the featured Tasmania story, and `/about/` includes the author biography and a contact email link. The Tasmania story and biography use the text supplied in the exported reference; the other stories contain short original field notes for the portfolio demo. All photography is local. The page uses normal document scrolling and native anchors.

Navigation is 18 px on desktop and 17 px on mobile; article body copy is 18–22 px. Useful captions and card metadata were enlarged throughout the page. Secondary pages share the reference's blue sidebar and cream/olive content areas.

## Reference and assets

The delivered layout is a creative adaptation, not an exact replica of all Figma pages. It includes Home, the eight-entry archive, eight article routes, About/Contact, the blue/cream/olive palette, Gasoek One and Plus Jakarta Sans typography, upcoming itinerary, and a custom road scene. There is no backend, account registration or form submission.

The usable user-supplied photograph exports are 210–256 px wide. They are used as card images and small itinerary previews. Five other photographs are available only as 26×26 px thumbnails. Those archive entries use editorial text cards with the actual small thumbnail rather than enlarged photographs. The dune photograph, large Tasmania photograph, in-article photographs, author portrait and train illustration were not supplied as separate usable assets. The About introduction uses typography instead of the missing portrait. The hero uses live typography and the original coded map scene rather than a flattened screenshot. The new ZIP archives contain rendered Desktop/Tablet/Mobile screenshots, not individual photo originals. These are retained as visual references only. Full-size original assets are still needed for exact photographic fidelity.

Reference exports are preserved outside the repository in `KWORK/designs/creative-travel-blog`. The source project is in `KWORK/projects/creative-travel-blog`.

## Verification

Production build and TypeScript pass. Browser checks cover desktop (1440×1000), mobile (390×844 and 320×740), route chapter navigation, forward/backward movement, motion toggle, image loading, all eight archive links, the featured article and About/Contact. No horizontal overflow or browser errors were found in these flows.

Animation implementation follows the official [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) and [MotionPathPlugin](https://gsap.com/docs/v3/Plugins/MotionPathPlugin/) documentation.

Vercel hosts a locally built static export. GitHub automatic deployments are not configured.
