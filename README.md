# React-Redux-Webpack Boilerplate

-   [react](https://facebook.github.io/react/)
-   [react-router](https://github.com/rackt/react-router)
-   [redux](http://redux.js.org/)
-   [express](http://expressjs.com/)
-   [storybook](https://storybook.js.org/)
-   [jest](https://jestjs.io/)

## Start with local Node

NPM Install:

```
npm install
```

## Start with Docker

Build docker:

```
./dev.sh
```

## Storybook

Run Storybook:

```
npm run storybook
```

## Testing

Run Jest Unit Tests:

```
npm run test
```

Run Image Snapshots of Stories:

1. Run Storybook
    ```
    npm run storybook
    ```
2. Run Image Snapshots **in a new terminal** _while Storybook is running_
    ```
    npm run screenshot
    ```
