## Follow-up tasks
- create a template for creating .gitignore files
- create a bp doc on creating package.json files
- 



npm i express
npx eslint --init
 - configure eslintrc.json file by adding "jest" to the env section
npm i jest ~ some libraries like React come with jest already installed
npm i supertest
npm i cross-env

Install as dev dependency
npm i -D <library name>


npm i -g knex
 - installs globally so then I can run `knex init` which creates a knexfile.js so I can configure my environments


--runInBand

This is what my test script should look like
"test": "cross-env NODE_ENV=testing jest --verbose --watchAll --runInBand"