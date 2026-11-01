# Changelog

## 4.0.0 - 2026-11-01
- Added debounced local-only autosave and restore (text, applied lines, marks, position, theme).
- Added per-sentence timestamp editing with 0.01-second precision.
- Added non-blocking warnings for duplicate, descending, out-of-audio-range and pending timestamps.
- Added confirmation before replacing an in-progress timing session.
- Kept JSON output data shape and serialization exactly compatible with V2/V3.
- No external dependencies and no audio data storage or upload.

## 3.2.0
- Mobile-first timing controls and persistent touch dock.
