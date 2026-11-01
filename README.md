# SyncTap Studio V4.0 · LaneZero

Lightweight browser-based Persian narration alignment tool, designed for desktop and mobile.

## Features
- Manual timestamp marking with Space and touch controls
- Skip and undo, playback seeking and speed controls
- Autosave of text, timing marks, progress and theme to this browser's `localStorage`
- Editable recorded timestamps (precision: 0.01 second)
- Quality warnings for repeated, out-of-order, beyond-duration and unfinished timestamps
- Identical JSON output contract to V2/V3 (n, start, text)
- No framework, no network requests, no audio upload

## Run locally
Open `index.html` in a current browser, select audio, paste narration, and press Apply.

## Publish on GitHub Pages
Upload files to repository root. Go to Settings → Pages → Deploy from a branch → main → /(root) → Save.

## Privacy
Text and progress are stored on the current device and browser origin only. Audio is not saved to storage and must be re-selected when returning. Clearing site data removes work. Private-mode storage may be unavailable. Copy JSON for a portable final result.

## Output compatibility
The exact V2 serialization is retained. Unrecorded lines omit `start`; skipped lines use `start: null`; marked lines use `start` as a number rounded to two decimals.

## License
There is no license yet. Add one before inviting contributions.
