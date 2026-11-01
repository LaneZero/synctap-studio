# Publish V4.6.0

```powershell
node tests/release-check.mjs
git status
git add index.html README.md CHANGELOG.md RELEASE_COMMANDS.md manifest.webmanifest sw.js tests/release-check.mjs
git commit -m "release: stabilize mobile workflow and projects (v4.6.0)"
git push origin main
```

Confirm the production site and PWA cache update after the push. Keep a backup of your projects before clearing browser storage.
