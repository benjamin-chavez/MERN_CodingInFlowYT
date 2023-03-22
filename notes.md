Tutorial URL: https://www.youtube.com/watch?v=FcxjCPeicvU&ab_channel=CodinginFlow

# Notes

```bash
mkdir backend
cd backend

npm init -y

npm i -D typescript
npx tsc --init

npm i express

npm i -D @types/express

touch server.ts
```

At its simplest, you can run the server using this:

```bash
npx tsc
node server.js
```

```bash
mkdir src
mv server.ts src/server.ts
```

```bash
npm i -D nodemon ts-node
```

Now, with nodemon you can run the server using:

```bash
npx nodemon src/server.t
```

```bash
npm i -D eslint
npx eslint --init

# SELECT THE FOLLOWING OPTIONS:
✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JavaScript
The config that you've selected requires the following dependencies:

@typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
✔ Would you like to install them now? · No / Yes
✔ Which package manager do you want to use? · npm
```

```bash
# TO check syntax
npx eslint . --ext .ts
```

```bash
cd backend
npm i dotenv
npm i mongoose
```

```bash
# Utilitiy that allows us to require the definitions of our ENV Variables
npm i envalid
mkdir src/util
touch src/util/validateEnv.ts
```

```bash
touch src/app.ts
```
