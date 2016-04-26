# eslintrc
A collection of my common eslint configurations

## Install

Add eslintrc to your package.json. This can easily be done with the following command

```shell
npm install https://github.com/JakeSidSmith/eslintrc#v0.0.0 --save-dev
```

Or manually add this to the package.json

```json
"devDependencies": {
  "eslintrc": "git+https://github.com/JakeSidSmith/eslintrc.git#v0.0.0"
}
```

Check the [releases](https://github.com/JakeSidSmith/eslintrc/releases) for the latest version.

## Run eslint

Add a script like the following to your package.json with your chosen configurations

```json
"scripts": {
  "eslint": "eslint -c node_modules/eslintrc/.eslintrc-es6-react src/"
}
```

And run it with

```shell
npm run eslint
```

I'd recommend calling the eslint script in your test script

```json
"scripts": {
  "test": "npm run eslint && npm run mocha"
}
```
