# eslintrc
A collection of my common eslint configurations

## Install

Check the [releases](https://github.com/JakeSidSmith/eslintrc/releases) for the latest version.

Add eslintrc to your package.json. This can easily be done with the following command

```shell
npm install https://github.com/JakeSidSmith/eslintrc#v1.0.0 --save-dev
```

Or manually add this to the package.json

```json
"devDependencies": {
  "eslintrc": "git+https://github.com/JakeSidSmith/eslintrc.git#v1.0.0"
}
```

## Create your config

Create a file called `.eslintrc.json` and extend the configs you require

Default config (ES6, React & CommonJS)

```json
{
  "extends": [
    "eslintrc/default"
  ]
}
```

Custom config

```json
{
  "extends": [
    "eslintrc/node",
    "eslintrc/es6"
  ]
}
```

## Available configs

```
base (all basic rules, all other configs extend base)

default (ES6, React & CommonJS)

browser
commonjs
es6
jest
mocha
node
react
react-native
```

## Run eslint

Add a script like the following to your package.json with your chosen configurations.

In this example we have a second config specifically for our test files

```json
"scripts": {
  "lint": "eslint src/",
  "lint-tests": "eslint -c .eslintrc-tests tests/"
}
```

And run it with

```shell
npm run eslint

# and or

npm run eslint-tests
```

I'd recommend calling the eslint script in your test script

```json
"scripts": {
  "test": "npm run lint && npm run mocha"
}
```
