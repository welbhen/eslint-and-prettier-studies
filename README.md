# How to use Prettier and ESLint with JS projects

## ESLint

ESLint os about code style and code mistakes.

1. Use `npm install -D eslint` on your project.

2. USe `npx eslint --init`. Go through the given options, select the Airbnb type and JSON file option.

3. Now you should have a '.eslintrc.json' file on your project.

4. Add "prettier" to the `extends` key.
   It should be like:
   `"extends":["airbnb-base", "prettier"],`.

5. Add
   `"plugins": ["prettier"],`
   to the '.eslintrc.json' file.

## Prettier

1. Use `npm install -D prettier eslint-config-prettier eslint-plugin-prettier` on your project.

2. Now, Prettier and ESLint can be seen inside the 'devDependencies' on the 'package.json' file of your project.

3. Make sure you have `ESLint` and `Prettier` extensions installed on VSCode as well.

4. Create a new file `prettierrc`, inside the file:

   ```.prettierrc
   {
       "trailingComma": "es5",
       "tabWidth": 4,
       "semi": true,
       "singleQuote": false
   }
   ```
