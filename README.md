<div align="center">

# 🎙️ SyncTap Studio

**Lightweight narration-to-text timestamping, built by [LaneZero](https://github.com/LaneZero)**

[![Version](https://img.shields.io/badge/version-4.2.0-6366f1)](https://github.com/LaneZero/synctap-studio)
[![Pure JavaScript](https://img.shields.io/badge/stack-HTML%20%7C%20CSS%20%7C%20JavaScript-0ea5e9)](index.html)
[![PWA](https://img.shields.io/badge/PWA-offline--ready-10b981)](manifest.webmanifest)

[**Open the web app**](https://lanezero.github.io/synctap-studio/) · [Repository](https://github.com/LaneZero/synctap-studio) · [Changelog](CHANGELOG.md)

</div>

> SyncTap Studio is a **manual** audio/text alignment tool. It does not transcribe audio, perform forced alignment, or generate sentence boundaries automatically.

## Overview

SyncTap Studio helps video editors, motion-graphics creators, and TTS workflows record the **start time** of each narration line as audio plays. Users supply the exact narration script, place one sentence or segment on each line, and tap when a line begins. The app exports a compact JSON array for downstream timeline and animation workflows.

The app is **local-first**, written in plain HTML, CSS, and JavaScript. It runs without a backend, external libraries, account, or upload service. V4.2 adds a small installable Progressive Web App (PWA) shell so browsers with support can cache the interface for offline use.

## Features

| Area | Capability |
| --- | --- |
| Alignment | Mark sentence start times manually using **Space** or the on-screen button |
| Corrections | Undo the last action with **Backspace**; edit any recorded timestamp to **0.01 s** precision |
| Missing audio | Skip a line and record `start: null` |
| Player | Native audio controls, seek back/forward 3 seconds, 0.75× / 1× speed |
| Waveform | Optional waveform from the selected audio, touch/click seek, playback cursor, recorded markers |
| Quality checks | Non-blocking warnings for duplicate times, out-of-order times, values beyond audio duration, and unfinished lines |
| Progress | Counters, currently active line, and per-line status |
| Resilience | Local automatic save and recovery of script, recorded times, position, and theme |
| PWA | Installable where supported; static application shell cached for offline reopening after one successful online visit |
| Interface | Persian RTL, dark/light themes, responsive desktop and mobile controls |
| Export | Copy compact JSON compatible with the original V2 output schema |

## Quick start

1. Open **[SyncTap Studio](https://lanezero.github.io/synctap-studio/)** in a browser, or open `index.html` locally for the basic app.
2. Paste the **exact** narration text provided to your TTS tool into the script editor, using **one line per segment**.
3. Select the narration audio (`.wav`, `.mp3`, or another format supported by the browser).
4. Press **Apply text** to build the segment list. Reapplying text discards existing timing marks after confirmation if work is in progress.
5. Play the audio and press **Space** (desktop) or **Mark start** (touch) at the **beginning** of each displayed segment.
6. Use **Undo**, **Skip**, and timestamp editing to correct the results. Optionally render the waveform for visual navigation.
7. Review quality warnings, then **Copy JSON** and provide it to the motion-graphics pipeline.

**Keyboard:** `Space` = mark; `Backspace` = undo. These hotkeys are ignored while entering text or focusing buttons. The waveform also supports arrow-key navigation when focused.

## Output contract (unchanged since V2)

Each output item preserves the keys and sequence `n`, `start`, `text`. The app uses the original compact `JSON.stringify` representation (not a new export schema).

```json
[{"n":1,"start":1.25,"text":"جمله اول"},{"n":2,"start":null,"text":"جمله دوم"},{"n":3,"text":"جمله سوم"}]
```

- `n`: 1-based segment number in script order.
- `start`: number of **seconds** from the beginning of the audio, rounded to two decimal places when marked.
- `start: null`: line explicitly skipped because it is absent from the audio.
- **Missing `start` key:** line not yet processed. This is different from `null`.
- `text`: exact applied segment text after trimming leading and trailing whitespace on each line.
- The app records **start timestamps only**. It does **not** infer end timestamps or clip boundaries.

> Important: quality checks only report potential problems. They do not silently modify timestamps or change JSON generation.

## Privacy, storage and offline behavior

- The chosen audio is loaded into the browser as an object URL. It is **not uploaded, cached by the app's service worker, or saved in localStorage**.
- The current script, marks, progress, and theme are stored in the browser's **localStorage** under `synctap-studio-v4` when storage is available.
- After reopening, choose the audio file again. The browser cannot automatically restore local-file permissions or the selected audio.
- **Autosave is not cross-device sync or a guaranteed backup.** Browser cleanup, private mode, and storage restrictions can erase or prevent it. Copy the JSON somewhere safe.
- The PWA service worker caches **only static app files** (`index.html`, manifest, icons). The app continues working offline **after the initial successful online install/cache**, provided the browser keeps that cache.
- GitHub Pages hosts the public static app; normal hosting/network metadata may be logged by GitHub. The application itself contains no analytics or audio-upload endpoint.
- The optional waveform uses native Web Audio API and Canvas, with conservative **24 MiB / 15-minute limits**, and only runs on demand. Audio playback works even when waveform extraction is unavailable.

## Install on mobile (PWA)

1. Open the **HTTPS** site using a compatible browser.
2. On supported Android browsers, use **Install app** / **Add to Home screen** if shown.
3. On iOS/iPadOS, use the browser's **Share → Add to Home Screen** flow where supported.
4. Open SyncTap from the home screen. The interface can reopen offline after caching, but audio still needs to be reselected.

Installation prompts and standalone behavior vary by browser and operating system. Opening `index.html` with a `file://` address works for the core application but **does not enable service workers or offline PWA caching**.

## Development and deployment

The project is static and requires **no build step** or package manager:

```text
synctap-studio/
├── index.html              # UI, player, timing logic, styling
├── manifest.webmanifest    # PWA metadata
├── sw.js                   # static-only offline cache
├── favicon.svg             # browser tab icon
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
├── README.md
├── CHANGELOG.md
├── RELEASE_COMMANDS.md
├── .nojekyll
└── .gitignore
```

To test locally with PWA features, serve the directory over localhost, e.g. `python -m http.server 8000`, and open `http://localhost:8000/`. The direct HTML file works for ordinary timing, but not service-worker registration.

**GitHub Pages:** Push these files to the repository root and select **Settings → Pages → Deploy from a branch → `main` → `/(root)`**. The site URL for this repository is expected to be `https://lanezero.github.io/synctap-studio/` once Pages is enabled and deployment succeeds.

For release commands, see [RELEASE_COMMANDS.md](RELEASE_COMMANDS.md). Always verify the deployed page and offline reopen before announcing PWA support as tested for a particular device.

## Limitations

- Timing is based on human marking, not automatic speech recognition or forced alignment.
- Waveform peaks are visual aids; they are not a guarantee of exact word alignment.
- Browser format support and decoding limits vary by device.
- The app stores only one working session per browser origin; applying a new script may replace its marks.
- PWA installability, storage persistence, and offline support depend on browser settings and cache retention.

## Contributing and license

Bug reports and feature suggestions: [GitHub Issues](https://github.com/LaneZero/synctap-studio/issues).

**License:** No license file is included yet; public source access does not automatically grant rights to redistribute or modify it. Add an explicit license before accepting outside contributions.

---

Made with care by **[LaneZero](https://github.com/LaneZero/synctap-studio)**.
