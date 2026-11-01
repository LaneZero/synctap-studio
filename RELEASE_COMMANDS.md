# Release V4.2.0

From the root of an existing local clone (`git status` should show the expected repository):

```powershell
git status
git add index.html manifest.webmanifest sw.js icons/icon-192.png icons/icon-512.png README.md CHANGELOG.md RELEASE_COMMANDS.md
git commit -m "feat(pwa): add offline app shell and GitHub-linked LaneZero footer (v4.2.0)"
git push origin main
```

No push or release has been performed by this generated package. After deploying, verify GitHub Pages, mobile installation, offline reopen, and the JSON contract. A fresh Git clone may have no local files yet; copy the release package contents into the repository root first.
