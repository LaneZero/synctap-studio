# Release v5.0.0

Run from the extracted project directory or your repository root:

```powershell
node tests/release-check.mjs
git status
git add .
git commit -m "fix(ios): unrestricted audio files picker and mobile UX (v5.0.0)"
git push origin main
# After testing on real iPhone:
git tag -a v5.0.0 -m "SyncTap Studio v5.0.0"
git push origin v5.0.0
```

GitHub Pages cache may need refresh after deploy. No remote push is performed by this package.
