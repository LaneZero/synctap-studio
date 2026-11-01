## 4.7.0 — Reliability and mobile performance

- Display truthful failure status when project storage cannot persist.
- Cap visible validation warnings at 30 while preserving total issue counts.
- Refresh PWA shell cache and documentation.
- Preserve V2 timing JSON, project backup schema, bilingual UI and wallet addresses.

## V4.6.0 — Finalization and mobile performance

- Bound the timing list to 160 visible rows; previous/next navigation for long scripts.
- Restore the selected project snapshot on startup to avoid legacy-state mixups.
- Refine mobile touch targets, safe-area clearance, and reduced-motion support.
- Preserve timing JSON V2 schema, bilingual UI, Donate addresses and PWA.
- Add automated release checks; full physical-device testing remains required.

## 4.5.0

- Duplicate any saved project with independent snapshot data.
- Export all projects as one portable JSON backup and import the collection.
- Flush pending autosave on page visibility change for mobile reliability.
- Preserve original V2 timing JSON and all V4.4 features.

## v4.4.0 — Local project management

- Added separate local project slots (up to 12), with create/open/rename/delete.
- Added portable project backup import/export with schema validation.
- Preserved v4 autosave and legacy V2 JSON output serializer.
- Preserved Persian/English UI, About, Donate, PWA, and mobile controls.
- Audio is not included in backups or cached.

# Changelog

## 4.3.0 — Bilingual About & Donate
- Added full-page UI language switching (Persian RTL / English LTR), remembered locally.
- Added About dialog: features, privacy information, version, developer and project link.
- Added opt-in Donate dialog with four exact cryptocurrency addresses and copy buttons.
- Kept the V2 JSON output expression and timing logic intact.
- Preserved lightweight PWA support and optional waveform analysis.
- Updated application-shell service-worker cache.

## 4.2.0
- PWA support, offline app shell, GitHub footer and updated docs.

## 4.1.0
- Optional waveform display and interactive audio seeking.

## 4.0.0
- Autosave, timestamp editing and quality checks.
