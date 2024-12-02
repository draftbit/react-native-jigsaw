# react-native-jigsaw

Draftbit's specialized component library. Loosely based on React Native Paper, this allows you to incorporate your components into the Draftbit platform. You're also welcome to use this library however you'd like in a typical Expo/React Native project

This is a monorepo containing the packages comprising `@draftbit/ui`,
[Draftbit's](https://draftbit.com) component library used inside our Builder.

## Quickstart:

```sh
git clone https://github.com/draftbit/react-native-jigsaw && cd react-native-jigsaw
yarn && yarn build
yarn example start
```

Any changes in the `packages/` typescript files should be automatically picked
up by the Metro bundler and reflected in the example application. In some cases,
you may need to stop the example app, rebuild, and restart it.

Please read the [contributing guide](CONTRIBUTING.md) before making
a pull-request and to understand the full development flow

## Overview

This is a lerna/monorepo setup that is split up into several packages.

- packages/ui: pulls in everything from core, native, and theme and re-exports it. This is what any user will install to use this Library
- packages/core: This is where all components go, components should work across web, ios, and android. Additionally, all utils and shared files go here.
- packages/theme: This houses our theming system and all it's related files.
- packages/native: This was intended to house native components that rely on expo/react-native modules likes `expo-av` and `@expo/vector-icons`. However, currently all our components work with on all platforms (even the ones here) and there is no need to have a separate native package. However, this this is kept for now to avoid breaking changes.
- packages/maps: This is where the map components go. This package utlizes a native package and a web package to provide a cross platform map component.
- packages/types: This was intended to expose some additional types to the components. However, we've moved away from this in favor of writing all components in typescript.

** Chances are, you'll spend most of your time in `packages/core` **

## Running Example App

```sh
yarn
yarn build
yarn example start
```

## Publishing

Pre-Release:

- Every pull request will cause a prerelease version to be published on npm.
  You can use these versions to test you changes without having to worry about
  linking packages.

Release Process:

- We release master, meaning a pull-request containing substantive changes
  should not alter any version information.

- When master is ready for release, create a new branch and run a `yarn version:XXXX` command from the root, as appropriate. Lerna will update all
  the package.json files with the next version, and create and tag a commit.

  - **NOTE:** We follow a modified semver: EXPO_VERSION.MAJOR.MINOR.

- Push the branch and tag to github, and open a pull-request for the new
  version.

- When the pull-request is approved and merged to master, a github action
  & lerna will automatically publish all packages to npm with the new version.

- Usually a tag is crated. If not, you may need to create a tag for the version, ie `git tag v46.2.4` and `git push --tags`

- If auto-publication fails, say because npm is down, contributors can also run
  `yarn lerna publish from-package` from an up-to-date master branch. Lerna
  will automatically inspect the registry and the versions on master and
  publish only the appropriate packages.

## Upgrade Expo SDK Modules

- Go through each of the packages and temporarily install the intended version of `expo`
- Run `npx expo install --fix` to update the packages to the correct version
- Remove the temporarily installed `expo`
- Check if there any packages or resolutions that need to be updated in root `package.json`

## Plug

Sound cool? [We're hiring!](https://draftbit.com/jobs).

## License

MIT
