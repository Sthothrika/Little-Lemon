# KL University — Department Info (Next.js SSG example)

This folder is a minimal Next.js project demonstrating static generation (SSG) using `getStaticProps()`.

Quick start (Windows PowerShell):

```powershell
cd c:\Users\hp\OneDrive\Desktop\fedlab\lab\next-kl-university
npm install
npm run dev
```

Open `http://localhost:3000/department` to view the statically generated department page.

Notes:
- The data for the department is provided inside `pages/department.js` and fetched at build time with `getStaticProps()`.
- To build a production version run `npm run build` then `npm start`.
