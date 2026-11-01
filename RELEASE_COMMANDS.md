## v4.9.0

```powershell
node tests/release-check.mjs
git add .
git commit -m "feat: add precision replay search and quality dashboard (v4.9.0)"
git push origin main
git tag -a v4.9.0 -m "SyncTap Studio v4.9.0"
git push origin v4.9.0
```

Tag only after validating on a real mobile browser.
