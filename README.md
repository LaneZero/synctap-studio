# SyncTap Studio v5.0.0

**Lightweight, bilingual narration-to-text timing for motion graphics.** Developed by [LaneZero](https://github.com/LaneZero/synctap-studio).

## Features

- Mark the start of each narration sentence using Space or touch controls.
- Skip missing lines, undo a mark, adjust timestamps in 0.1s / 0.01s increments, replay around a mark.
- Search narration sentences, review quality warnings and view an optional waveform.
- Local autosave, up to 12 projects, duplicate project, per-project and full backup import/export.
- Copy or download the **unchanged V2 JSON** timing output.
- English and Persian interface (LTR/RTL), responsive UI, offline-capable PWA.
- About and optional donations; author link in footer.

## Audio file support on iPhone

**Use the primary “Choose from Files” button.** It intentionally has **no `accept` filter**, because iOS file pickers may disable playable MP3 or WAV files when a filter is present. You can also use the optional **Filter audio** button on devices where filtering works. The app checks the selected file name/MIME type and then asks your browser to play it. **Choosing a file does not guarantee decoding**: MP3, WAV PCM and AAC M4A usually work, while FLAC, OGG, OPUS and others vary by browser and OS. Unsupported codecs show an error instead of silently failing. No conversion is performed.

## Quick start

1. Open the app from GitHub Pages, or open `index.html` locally (offline PWA installation requires HTTPS).
2. Paste the exact TTS script, one line per sentence, then click **Apply text**.
3. Choose the narration recording from Files. On iPhone, use the unrestricted primary file picker.
4. Play the audio and press **Space** / **Mark** at the start of each line. Use Undo or Skip when needed.
5. Edit timestamps and validate the result; copy or download the timing JSON.

On narrow screens, use the quick navigation at the top; the script can be expanded on demand. The bottom dock keeps **Play**, **Undo**, **Mark**, and **Skip** within thumb reach.

## Timing JSON compatibility

The JSON export deliberately keeps `[{"n":1,"start":1.25,"text":"..."}, ...]` with keys in the order `n`, `start`, `text`. Skipped sentences have `start:null`; unprocessed sentences omit `start`. This is the V2 contract and must not be changed. Project backups are a different JSON format.

## Privacy and storage

All audio stays in the browser and is not sent to a server. The audio bytes are not persisted; reselect the file after reopening. Script and timestamp data are stored in browser localStorage, subject to private-browsing and device storage restrictions. **Export project backups** for recovery or transfer. GitHub Pages hosting still receives ordinary site requests.

## Deployment

Upload all files in this directory to the repository root on `main`. Enable GitHub Pages from `main` / `/(root)` in Settings → Pages. Release checks: `node tests/release-check.mjs`.

## Build principles

No frameworks, remote fonts, external JavaScript or client-side speech models. Waveform extraction is opt-in and size-limited. iOS Safari and Chrome share the WebKit platform behavior, but should both be tested on a real iPhone.

## Donate

Donations are optional. Confirm address and network carefully before sending.

| Asset | Network | Address |
| --- | --- | --- |
| Bitcoin | Bitcoin | `bc1q5tl36qpk27hf7upl8l753xa0gcm57adrvmwgkz` |
| USDT | TRON / TRC20 | `TA5pibChqS7CeHiDvfP7V3uQVMynk6SxLq` |
| EVM | Ethereum / BNB Smart Chain / Polygon | `0x6634E26BA0e323182B7A9a89278E9a7BbCa9aF70` |
| Solana | Solana | `91kuBFEZAnRk8ixsuzAQnAVvtzLAsQpPFRsfe285ZKUC` |
