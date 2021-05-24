# react-native-jigsaw

This is a monorepo containing the packages comprising `@draftbit/ui`,
[Draftbit's](https://draftbit.com) component library used inside our Builder.

See [the `ui` package readme](./packages/ui#readme) for details.

## Contributing

Quickstart:

```sh
git clone https://github.com/draftbit/react-native-jigsaw && cd react-native-jigsaw
yarn install
yarn example start
# Open example project in ios/web/android using metro bundler that opened in
# your browser
# Edit files in `packages/core` or `packages/native`
```

Any changes in the `packages/` typescript files should be automatically picked
up by the Metro bundler and reflected in the example application.

Please read the [contributing guide](CONTRIBUTING.md) before making
a pull-request and to understand the full development flow

## Linking

If you want to dynamically link these packages into a project using `yarn link`,
make sure to run `yarn watch <packagename>` from the root folder so that lerna
can properly cross link everything, then `yarn link` from the particular package
directory (not the root!) you are interested in.

So if using `@draftbit/core` in a create-react-app, this would look like:

```console
# In react-native-jigsaw/
$ yarn install
$ yarn watch core

# In ./packages/core/
$ yarn link

# In create-react-app project root
$ <shutdown any running create-react-app dev mode>
$ yarn add @draftbit/core # only if this is the first time using it
$ yarn install
$ yarn link @draftbit/core
$ yarn start
```

You should be able to make changes inside `core/`, have nodemon pick them up and
rebuild, then have create-react-app pick that up and rebuild.

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

- If auto-publication fails, say because npm is down, contributors can also run
  `yarn lerna publish from-package` from an up-to-date master branch. Lerna
  will automatically inspect the registry and the versions on master and
  publish only the appropriate packages.

## Plug

Sound cool? [We're hiring!](https://draftbit.com/jobs).

## License

MIT

## Contributing

- Any color should be passed down via theme prop:

```
// NOT dotColor="#5a45ff" b/c that isn't theme powered
// Learn more here https://callstack.github.io/react-native-paper/theming.html
<Carousel dotColor={theme.colors.strong}>
```
