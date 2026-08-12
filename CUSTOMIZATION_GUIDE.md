# Customization Guide for Nouman Arif Portfolio

## What's Already Set Up ✅

Your portfolio comes pre-populated with:
- Your name, email, phone, GitHub
- All 9 projects from your CV
- All technical, design, and soft skills
- Professional experience (Cure IT, Arch Technologies, Tutoring)
- Education (UET Gujranwala, Superior College, Watan Ideal)
- CGPA and details

## What You Need to Add 🔗

### Step 1: Add Real GitHub Links

Your projects currently have `github: "#"` placeholders. Replace these with actual links:

**File to edit**: `lib/data.ts`

Find each project and update:

```typescript
// BEFORE
{
  id: "parallel-warfare",
  name: "Parallel Warfare — Real-Time 3D Multiplayer Game",
  github: "#",  // ← This is placeholder
}

// AFTER
{
  id: "parallel-warfare",
  name: "Parallel Warfare — Real-Time 3D Multiplayer Game",
  github: "https://github.com/Nomix95/Parallel-Warfare",  // ← Real link
}
```

### GitHub URLs to Add

| Project | Current Link | Your GitHub Repo |
|---------|--------------|------------------|
| Trash-CO | # | `https://github.com/Nomix95/trash-co` |
| TutorSphere | # | `https://github.com/Nomix95/tutorsphere` |
| Parallel Warfare | # | `https://github.com/Nomix95/Parallel-Warfare` ✅ |
| ZestCart | # | `https://github.com/Nomix95/zestcart` |
| MedInfo | # | `https://github.com/Nomix95/medinfo` |
| Hospital & Bank | # | `https://github.com/Nomix95/hospital-bank-systems` |
| Online Voting | # | `https://github.com/Nomix95/voting-system` |
| Simulatrix | # | `https://github.com/Nomix95/simulatrix` |
| Mood Detector | # | `https://github.com/Nomix95/mood-detector-chatbot` |

**⚠️ Note**: Replace `Nomix95` with your actual GitHub username if different.

### Step 2: Add Demo/Live Links

If you have deployed versions of your projects, add them as `demo` URLs:

```typescript
{
  id: "trash-co",
  name: "Trash-CO — AI Waste Classification System",
  github: "https://github.com/Nomix95/trash-co",
  demo: "https://trash-co.vercel.app",  // ← Add live URL if exists
}
```

### Step 3: Update Featured Projects (Optional)

Currently **3 projects are featured** (shown with full details):
1. Trash-CO
2. TutorSphere
3. Parallel Warfare

To change which projects are featured, edit `featured: true`:

```typescript
// Current
{
  id: "zestcart",
  featured: false,  // ← Will show in "Other Projects"
}

// To feature it
{
  id: "zestcart",
  featured: true,  // ← Will show in main featured section
}
```

**Pro tip**: Feature your most impressive/complete projects.

---

## Customization Details

### Hero Section
✅ Already set with:
- Your name: "Nouman Arif"
- Title: "Full-Stack Developer"
- Subtitle: "AI & Data | WordPress | Content"
- Email, phone, location, GitHub

### Projects Section
✅ Pre-loaded with all 9 projects
- 3 featured (detailed cards)
- 6 in grid (compact cards)

**To add a new project**:
```typescript
{
  id: "new-project",
  name: "Project Name",
  description: "Short description",
  tags: ["React", "TypeScript"],
  highlights: [
    "Highlight 1",
    "Highlight 2"
  ],
  github: "https://github.com/Nomix95/...",
  demo: "https://...",
  featured: false  // Set true to show in main section
}
```

### Skills Section
✅ Already organized by:
- **Technical**: Backend, Frontend, Data & AI, Databases, Other
- **Design**: Adobe tools, Canva, Copywriting, etc.
- **Soft Skills**: All 6 included
- **Languages**: Urdu (Native), English (Professional)

**To update skills**, edit `portfolioData.skills` in `lib/data.ts`:

```typescript
skills: {
  technical: [
    { 
      category: "Backend", 
      items: ["Python / Flask / FastAPI", "Node.js / Express.js"] 
    }
  ],
  // ... rest
}
```

### Experience Section
✅ Already includes:
1. **Cure IT Solutions** (Graphic Design, Video Editing, Recruitment)
2. **Arch Technologies** (Web Development)
3. **Self-Employed Tutoring**

**To add new experience**:
```typescript
{
  role: "New Role",
  company: "Company Name",
  period: "Month Year – Month Year",
  location: "City",
  highlights: [
    "Achievement 1",
    "Achievement 2"
  ]
}
```

### Education Section
✅ Already complete:
- BSCS at UET Gujranwala (6th Semester, CGPA 3.49)
- FSc at Superior College
- Matriculation at Watan Ideal High School

---

## Styling Customization

### Change Color Scheme

**Current colors**: Blue → Purple gradient

**To change to Green**:
Replace all instances:
- `blue-500` → `green-500`
- `blue-600` → `green-600`
- `purple-600` → `green-600`

**To change to Red**:
- `blue-*` → `red-*`
- `purple-*` → `red-*`

Edit in these files:
- `components/Navigation.tsx`
- `components/HeroSection.tsx`
- `components/ProjectsSection.tsx`
- `components/SkillsSection.tsx`
- `components/ExperienceSection.tsx`
- `components/Footer.tsx`

### Change Typography

Edit `app/globals.css`:
```css
@tailwind base;
@layer base {
  h1 { @apply text-5xl font-bold; }
  h2 { @apply text-4xl font-bold; }
  p { @apply text-base leading-relaxed; }
}
```

---

## Contact Information Check ✅

Verify these are up-to-date in `lib/data.ts`:

```typescript
export const portfolioData = {
  name: "Nouman Arif",  // ✅ Correct
  title: "Full-Stack Developer",  // ✅ Correct
  email: "noumanarif501@gmail.com",  // ✅ Correct
  phone: "+92 341 6566535",  // ✅ Correct
  github: "https://github.com/Nomix95",  // ✅ Correct
  location: "Daska, Punjab, Pakistan",  // ✅ Correct
};
```

---

## Before Deploying

### Final Checklist

- [ ] All GitHub project links added (not `#`)
- [ ] Demo links added where applicable
- [ ] Featured projects updated (if needed)
- [ ] Contact info verified
- [ ] All skills current and accurate
- [ ] Experience descriptions match reality
- [ ] Portfolio tested locally: `npm run dev`
- [ ] Build succeeds: `npm run build`
- [ ] No TypeScript errors

### Test Locally

```bash
npm run dev
# Visit http://localhost:3000
# Click all links
# Test mobile view (F12 → device toolbar)
# Verify all text is readable
```

---

## Deployment URLs

After deployment, your portfolio will be at one of:

**Vercel** (recommended):
- `https://nomix-portfolio.vercel.app`
- Or custom domain: `https://yourname.com`

**Netlify**:
- `https://nomixportfolio.netlify.app`

**Custom Domain**:
- Update in provider settings
- Point DNS to deployment URL

---

## Common Customizations

### Add LinkedIn URL
In `components/Footer.tsx`, add LinkedIn button:
```typescript
<a href="https://linkedin.com/in/yourprofile" ...>
  <Linkedin />
</a>
```

### Add Resume/CV Download Button
In `components/HeroSection.tsx`:
```typescript
<a href="/resume.pdf" className="...">
  Download CV
</a>
```
(Add PDF to `public/resume.pdf`)

### Add Dark Mode
Add toggle in `Navigation.tsx` and update Tailwind config.

### Add Blog Section
Create new component `components/BlogSection.tsx` and add to `app/page.tsx`.

---

## After First Deploy

1. ✅ Verify live URL works
2. ✅ Test all GitHub links
3. ✅ Check email contact form (add contact form if needed)
4. ✅ Mobile responsiveness test
5. ✅ Share on social media
6. ✅ Add to GitHub profile README
7. ✅ Share with recruiters/network

---

## Questions?

Refer to:
- **Setup**: `QUICK_START.md`
- **Full Docs**: `PORTFOLIO_README.md`
- **Code**: `lib/data.ts` (all content is here!)
- **Components**: `components/` folder

**Start editing now!** 🚀

---

**Your portfolio is ready. Make it yours!**
