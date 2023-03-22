```bash
npx create-react-app@5.0.1 frontend --template typescript
cd frontend

# optional:
npm audit
npm audit fix
npm audit fix --force
```

```bash
npm i react-bootstrap bootstrap
```

```bash
cd frontend
mkdir src/models
touch src/models/note.ts


mkdir src/components
touch src/components/Note.tsx

mkdir src/styles
mv src/global.css src/styles/global.css
touch src/styles/Note.module.css


mkdir src/utils
touch src/utils/formatDate.ts
```
