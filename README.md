# SyncTap Studio

**A lightweight, bilingual, privacy-first narration timing tool by [LaneZero](https://github.com/LaneZero/synctap-studio).**

[![Version](https://img.shields.io/badge/version-4.5.0-6366f1)](https://github.com/LaneZero/synctap-studio) ![Vanilla JS](https://img.shields.io/badge/dependencies-zero-16a34a) ![Languages](https://img.shields.io/badge/languages-FA%20%7C%20EN-0ea5e9)

**Live application:** https://lanezero.github.io/synctap-studio/ (after GitHub Pages deployment)

## What it does

SyncTap Studio lets editors and motion-graphics creators manually record when each line of a narration begins. It exports compact JSON compatible with the original V2 output. No backend, account, or external JavaScript dependency is needed.

## Features

- Persian (RTL) and English (LTR) interface with persistent language preference.
- Tap or press **Space** to mark a line's starting timestamp.
- **Backspace** to undo, or skip lines absent from the audio.
- Seek ±3 seconds, switch between 0.75× and 1× playback.
- Optional real waveform and touch/click audio seeking. Audio decoding is explicitly requested, never automatic.
- Autosave script and recorded timestamps in browser local storage (audio files are **not** stored).
- Edit existing timestamps and check for missing, duplicated or out-of-order times.
- Mobile layout with a bottom action dock, optional PWA installation and an offline-cached app shell.
- About dialog and optional Donate dialog with one-tap address copying.

## Multi-project workflow (V4.5)

- **Duplicate:** create a separate copy of a project without changing the original.
- **Full backup:** download all saved projects in one JSON bundle, then import that bundle in another browser (subject to the 12-project capacity).
- **Mobile save reliability:** pending changes are flushed when the app goes into the background.
- **Projects:** click **Projects / پروژه‌ها** to view locally saved projects, rename the active project, open an older project, or start a new one.
- **Autosave:** project script, recorded markers, cursor position and theme are saved after edits. Existing V4.3 autosave is adopted as the first project.
- **Backup:** **Export project** saves a standalone JSON file using `format: "synctap-project"` and `schemaVersion: 1`. This is **not** the downstream timing JSON.
- **Import:** **Import project** accepts one project or an all-projects bundle and loads that backup from your device, validating its schema and timestamps before accepting it.
- **Safety:** the current project is saved before switching; deleting a project requires confirmation. Maximum 12 local projects; backup import is limited to 1 MB.
- **Audio:** for privacy and performance, audio is never stored in backups or browser storage. You must reselect the source audio after loading a project.
- **Storage:** projects remain in that browser profile only, and may be lost if browser site data is cleared. Export backups to protect important work.

## Quick start

1. Open **index.html** locally or use the published GitHub Pages URL.
2. Choose **English** or **فارسی** from the header.
3. Paste the *exact* narration script; place one sentence/segment per line and click **Apply script** / **اعمال متن**.
4. Select an audio file. Press play and mark the beginning of each line using Space or the large mobile button.
5. Use Undo/Skip or edit individual timestamps if necessary.
6. Check timing quality and copy the JSON to your downstream video/motion workflow.

## Output contract: unchanged from V2

```json
[{"n":1,"start":0.75,"text":"Example line"},{"n":2,"start":null,"text":"Skipped line"},{"n":3,"text":"Pending line"}]
```

- `n`: 1-based line number; `start`: timestamp rounded to two decimals when recorded.
- `start: null` means a line was skipped.
- `start` is **omitted** for lines not yet processed.
- The JSON is a compact **array**, with keys in the order `n`, `start`, `text` when `start` exists.
- Switching languages changes the interface only, never your narration script or the JSON field names.

## Privacy and storage

Audio files are played/decoded locally in the browser and are not transmitted by the application. Draft text and recorded timestamps are stored using localStorage on that browser origin. Clearing site data can remove them; the audio file must be selected again on reopening. The PWA service worker caches only the public static app shell (HTML, manifest and icons), not audio, scripts or wallet details from users. GitHub Pages itself handles normal website requests.

Waveform decoding is optional, limited to 24 MiB of source audio and 15 minutes, and can still consume memory on low-end phones. Standard playback and timing are available without creating a waveform.

## About & donations

Open **About** for version, developer and privacy details. **Donate** lists optional cryptocurrency addresses, with network labels and copy controls:

| Asset | Network | Address |
| --- | --- | --- |
| Bitcoin | Bitcoin | `bc1q5tl36qpk27hf7upl8l753xa0gcm57adrvmwgkz` |
| Tether (USDT) | TRON / TRC20 | `TA5pibChqS7CeHiDvfP7V3uQVMynk6SxLq` |
| EVM | Ethereum / BNB Smart Chain / Polygon | `0x6634E26BA0e323182B7A9a89278E9a7BbCa9aF70` |
| Solana | Solana | `91kuBFEZAnRk8ixsuzAQnAVvtzLAsQpPFRsfe285ZKUC` |

**Donations are voluntary. Verify the network and destination address before sending; blockchain transfers are typically irreversible.** The application does not connect to wallets or process payments.

## Deploy to GitHub Pages

1. Place the files from the release ZIP at the **root** of the public `LaneZero/synctap-studio` repository.
2. In **Settings → Pages**, select **Deploy from a branch → main → /(root)** and save.
3. Visit https://lanezero.github.io/synctap-studio/ once deployment finishes.
4. For PWA installation, use the browser's **Install app** or **Add to Home Screen** option where supported. HTTPS is required for service workers.
5. After an update, reload once while online to refresh the cached app shell.

## Keyboard shortcuts

| Key | Action |
| --- | --- |
| `Space` | Mark start of current line |
| `Backspace` | Undo previous line |
| Audio controls | Play/pause and seek |

Shortcuts are disabled when typing or focusing an interactive control.

## Development

The app uses native HTML, CSS, JavaScript, Canvas, Web Audio API, localStorage, and an optional service worker. There is no build step. Open `index.html` for basic use; for testing offline/PWA functionality, serve the folder with localhost or GitHub Pages.

Developer: **[LaneZero](https://github.com/LaneZero/synctap-studio)**.

## V4.5 backup safety

The all-project bundle uses `format: "synctap-project-collection"` and `schemaVersion: 1`. Its `projects` array contains project names and snapshots only. No audio is included. Import does not overwrite existing projects, and refuses a bundle that would exceed 12 saved projects. Save backups outside the browser before clearing website data. The timing export remains the original compact V2 JSON array.
