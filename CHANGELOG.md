# Changelog

## v5.0.0 — iPhone Files + mobile usability

- Primary audio picker has **no accept filter**, avoiding grayed-out MP3/WAV files in iOS Files.
- Optional filtered picker with explicit extensions and post-selection type validation.
- Local audio decode errors reported; file selection and actual playback support are distinct.
- Mobile quick navigation: Audio / Mark / Script / Export.
- Mobile dock adds Play/Pause, active sentence number, and audio time.
- Collapsible script editor on phone and larger tap/typing targets.
- PWA static shell cache bumped to v5.0.0.
- V2 timing JSON format and project storage keys **unchanged**.
- Previous features, bilingual interface, About, Donate, GitHub footer preserved.

**Known limitation:** Codec support depends on Safari/WebKit; no client-side transcoding is performed. iPhone hardware/browser testing must still be carried out.
