# SyncTap Studio v4.7.0 deployment

Run from your local Git repository after extracting this ZIP:

```powershell
node tests/release-check.mjs
git status
git add index.html README.md CHANGELOG.md RELEASE_COMMANDS.md manifest.webmanifest sw.js tests/
git commit -m "fix: harden project saves and mobile validation (v4.7.0)"
git push origin main
```

Verify GitHub Pages at https://lanezero.github.io/synctap-studio/ and verify mobile offline refresh.
