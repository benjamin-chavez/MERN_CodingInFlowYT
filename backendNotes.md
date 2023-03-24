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

### MongoDB model setup + Express error handling (+ what is middleware)

```bash
cd backend
mkdir ./src/models
touch ./src/models/note.ts
```

```bash
cd backend
mkdir src/routes
touch src/routes/notes.ts

mkdir src/controllers
touch src/controllers/notes.ts
```

```bash
# install logging middleware
cd backend
npm i morgan
npm i --save-dev @types/morgan
```

```bash
# You could create your own http errors instead of using these dependencies if you wanted to
cd backend
npm i http-errors
npm i -D @types/http-errors

```

################################################################################3

```bash
cd backend
touch ./src/models/user.ts
touch ./src/controllers/users.ts
touch ./src/routes/users.ts
```

```bash
npm i bcrypt
npm i -D @types/bcrypt

# user authentication
# sessions or jwt tokens are the two options. We will use sessions
npm i express-session
npm i -D @types/express-session

# To store session info (redis is a good option for production):
# Compatible Session Stores: https://www.npmjs.com/package/express-session
npm i connect-mongo

# For Custom Types:
# Be sure to update typeRoots and ts-node in your`tsconfig.json` file
mkdir @types
touch @types/session.d.ts
```

```bash
mkdir backend/src/middleware
touch backend/src/middleware/auth.ts
```
