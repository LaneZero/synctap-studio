# SyncTap Studio v4.8.0 release (single main branch)

From the repository root after copying these files:

```powershell
node tests/release-check.mjs
git status
git add .
git commit -m "feat: add precision playback and timing JSON download (v4.8.0)"
git push origin main
git tag -a v4.8.0 -m "SyncTap Studio v4.8.0"
git push origin v4.8.0
```

The previously tagged v4.7.0 remains recoverable, no develop branch is needed.
