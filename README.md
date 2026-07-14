# IAI Studio Website

Static marketing website for IAI Studio.

## Local Development

```bash
npm install
npm run build
npm run preview
```

The build output is generated into `dist/`.

## Deploy On Vercel

Import this GitHub repository in Vercel:

```text
RushikeshChavan-AI/iai-format-website
```

Recommended Vercel settings:

```text
Framework Preset: Other
Root Directory: .
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

The project also includes `vercel.json`, so Vercel should automatically use the correct build command and output directory.
