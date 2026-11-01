# SyncTap Studio

**A local-first narration timing tool by LaneZero.**

SyncTap Studio helps creators manually mark the start times of narration lines and export an unchanged V2-compatible JSON array. It runs entirely in your browser with no build step, account, backend, or external dependencies.

## Features

- Persian RTL interface and light/dark themes
- Edit narration text, one line per segment
- Load a local audio file (browser-supported audio formats)
- Mark a line using **Space**, undo using **Backspace**, or skip missing lines
- Seek backward/forward 3 seconds, play at 0.75× or 1×
- Monitor progress and copy the JSON output
- Mobile-friendly layout

## Quick start

Open `index.html` locally in a modern browser, or deploy these repository files through GitHub Pages.

1. Paste the **exact** narration script (one segment per line), then click **اعمال متن**.
2. Select an audio file and play it.
3. Press Space at the beginning of each displayed line. Use Backspace to undo or the skip button when the line does not exist in the audio.
4. Copy the JSON output.

## JSON compatibility

**The export expression is unchanged from V2:**

```js
JSON.stringify(LINES.map((t,k)=>({n:k+1,start:k<T.length?T[k]:undefined,text:t})),null,0)
```

- `n` is the 1-based line number.
- `start` is a numeric second value for marked lines, `null` for skipped lines, and omitted for unprocessed lines.
- `text` is the text of the line.

This export is **not a forced-alignment transcription**. Start points are entered manually and accuracy depends on the operator.

## Privacy

The selected audio is loaded with `URL.createObjectURL()` for browser-local playback; it is not uploaded by the app. All narration edits and timing data stay in the current page, except when you choose to copy the JSON. Reloading the page clears session timing data. GitHub Pages can still receive ordinary page-request metadata from visitors.

## Publishing on GitHub Pages

1. Create a public GitHub repository named `synctap-studio`.
2. Upload all files from this folder to the root of the repository, keeping `index.html` at the top level.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select **main** and **/(root)**, then click **Save**.
6. After deployment succeeds, open `https://YOUR_USERNAME.github.io/synctap-studio/`.

## Author

Designed & Developed by **LaneZero**.

## License

No license has been selected yet. Public GitHub visibility does **not** automatically permit reuse, modification, or redistribution. Add a license if you want others to reuse the source.
