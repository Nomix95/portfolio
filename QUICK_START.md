# Quick Start Guide — Nouman Arif Portfolio

## 60-Second Setup

### 1. Extract & Install
```bash
tar -xzf nomix-portfolio.tar.gz
cd nomix-portfolio
npm install
```

### 2. Update Your Content
Edit `lib/data.ts` and replace:
- `name`: Your name
- `email`: Your email
- `phone`: Your phone
- `github`: Your GitHub URL
- All projects, skills, experience

### 3. Run Locally
```bash
npm run dev
# Open http://localhost:3000
```

### 4. Deploy to Vercel
```bash
# Push to GitHub first
git push origin main

# Then go to vercel.com/new
# → Import your GitHub repo
# → Click Deploy
# → Done! ✅
```

---

## Adding GitHub Project Links

In `lib/data.ts`, find your projects array:

```typescript
{
  id: "parallel-warfare",
  name: "Parallel Warfare — Real-Time 3D Multiplayer Game",
  github: "https://github.com/Nomix95/Parallel-Warfare",  // ← UPDATE THIS
  demo: "#",  // ← Add your demo URL if you have one
  // ... rest of project
}
```

---

## Key Files to Customize

| File | What to Edit |
|------|-------------|
| `lib/data.ts` | **All content** (name, email, projects, skills, experience) |
| `app/page.tsx` | Layout structure (if needed) |
| `app/globals.css` | Global colors and fonts |
| `components/Navigation.tsx` | Nav menu items |

---

## Updating Projects

### To showcase a project on top:
```typescript
{
  featured: true,  // ← Add this line
  // ... rest of project
}
```

### To hide a project:
Remove it from the `projects` array or set `featured: false`.

---

## Changing Colors

Search and replace in all component files:
- `from-blue-500` → your primary color
- `to-purple-600` → your secondary color

Example: Change to green theme
```
blue-500 → green-500
purple-600 → green-600
```

---

## Build & Deploy Checklist

- [ ] Extract project
- [ ] `npm install`
- [ ] Edit `lib/data.ts` with your info
- [ ] Add GitHub links to projects
- [ ] `npm run dev` (test locally)
- [ ] `npm run build` (production build)
- [ ] Push to GitHub
- [ ] Deploy via Vercel (recommended)
- [ ] Test live URL
- [ ] Share your portfolio! 🚀

---

## Deployment Links

**Vercel (Recommended)**: https://vercel.com/new
- 1-click deploy from GitHub
- Free tier includes automatic deployments
- Custom domain support

**Netlify**: https://app.netlify.com/drop
- Drag & drop deployment
- Continuous deployment from Git

**GitHub Pages**: 
```bash
npm run build
# Deploy .next folder as static site
```

---

## Live Preview

Once deployed, your portfolio will include:
✅ Responsive hero section
✅ Project showcase
✅ Skills breakdown
✅ Experience timeline
✅ Contact methods
✅ Mobile navigation
✅ Dark-mode ready (add toggle if needed)

---

## Troubleshooting

**Q: Components not showing?**
A: Run `npm install` and `npm run build` again

**Q: Styling looks wrong?**
A: Check that Tailwind CSS is loaded in `app/globals.css`

**Q: GitHub links not working?**
A: Update URLs in `lib/data.ts` with your actual GitHub links

**Q: Build fails?**
A: Run `npm run build` locally to see errors, fix them, then deploy

---

## Next Steps

1. ✅ Get portfolio running locally
2. ✅ Add your projects and links
3. ✅ Deploy to Vercel
4. ✅ Share link on LinkedIn/Twitter/Instagram
5. ✅ Get interviews! 🎯

---

**Questions?** Check `PORTFOLIO_README.md` for detailed docs.

**Ready to deploy?** Go to https://vercel.com/new now! 🚀
