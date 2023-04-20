⚠️ This project is [now archived](https://github.com/shilangyu/cra-preact/issues/5#issuecomment-1515847168). You should use [Vite](https://vitejs.dev/) with the Preact preset instead. ⚠️

# [create react app](https://create-react-app.dev/) + [preact](https://preactjs.com/) = 💖

[![](https://github.com/shilangyu/cra-preact/workflows/ci/badge.svg)](https://github.com/shilangyu/cra-preact/actions)

### _Love the CRA bootstrap? Hate big bundle sizes?_

```sh
npm i -D cra-preact
# or
yarn add --dev cra-preact
```

Write your code as if you weren't using `preact`, continue importing `react`.

## usage

Replace your `build`, `start` and `test` scripts

```diff
"scripts": {
- "start": "react-scripts start",
- "build": "react-scripts build",
- "test": "react-scripts test",
+ "start": "cra-preact start",
+ "build": "cra-preact build",
+ "test": "cra-preact test",
  "eject": "react-scripts eject"
}
```

Cool, done. Now watch the bundle size go down.

## bundle size drop porn

### initial CRA bootstrap

![initial app](assets/initial.png)

### medium size real-world production project

![middle size](assets/medium-size.png)

## disclaimer

While rare, problems may occur.

- Please be aware that `cra-preact` is using preact's compatibility layer (`preact/compat`) and issues with it should be directed to [preact's repo](https://github.com/preactjs/preact/issues)
- Make sure to develop and test with `cra-preact` to catch incompatibilities during development
- This project requires react-scripts v3+
- It is **NOT** recommended to plug this into existing projects just as a build script. Incompatibilities will most likely surface during runtime, not compile time
- Because it relies on fine details in `react-scripts` any minor upgrade of it might be a breaking change for `cra-preact`
- While it works with npm, there are no tests available for npm. Because `npm link` and `npm install` don't respect peer dependencies

---

This whole project was inspired by [this](https://github.com/facebook/create-react-app/issues/1230#issuecomment-334284088) github comment.
