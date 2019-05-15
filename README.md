# React-Redux-Webpack Boilerplate

-   [react](https://facebook.github.io/react/)
-   [react-router](https://github.com/rackt/react-router)
-   [redux](http://redux.js.org/)
-   [express](http://expressjs.com/)
-   [storybook](https://storybook.js.org/)
-   [jest](https://jestjs.io/)

## Start with local Node

1. NPM Install:

    ```sh
    npm install
    ```

2. Run App:

    ```sh
    npm start
    ```

## Start with Docker

Build docker:

```sh
./dev.sh
```

## Storybook

Run Storybook:

```sh
npm run storybook
```

## Testing

Run Jest Tests (Unit Tests, Snapshots and Storyshots)

```sh
npm run test
```

Run Image Snapshots of Stories (locally with Jest Image Snapshots):

-   [jest-image-snapshots](https://github.com/storybooks/storybook/tree/master/addons/storyshots#specifying-options-to-jest-image-snapshots/)

1. Run Storybook
    ```sh
    npm run storybook
    ```
2. Run Jest Image Snapshots **in a new terminal** _while Storybook is running_

    ```sh
    npm run screenshot:local
    ```

Run Image Snapshots of Stories (with Percy):

-   [percy](https://docs.percy.io/docs/storybook/)

    _replace `$PERCY_TOKEN` with your percy account api token in the `package.json` to run locally_

Run Percy Image Snapshots

```sh
npm run screenshot
```
