# react-native-jigsaw

This is a monorepository containing the packages comprising `@draftbit/ui`,
[Draftbit's](https://draftbit.com) component library used inside our Builder.

See [the `ui` package readme](./packages/ui#readme) for details.

## Contributing

Quickstart:

```console
$ git clone https://github.com/draftbit/react-native-jigsaw && cd react-native-jigsaw
$ yarn install
$ yarn examples start
# Open example project in ios/web/android using metro bundler your browser
# Edit files in `packages/core` or `packages/native`
```

Any changes in the `packages/` typescript files should be automatically picked
up by the Metro bundler and reflected in the example application.

Please read the [contributing guide](CONTRIBUTING.md) before making
a pull-request and to understand the full development flow

## Linking

If you want to dynamically link these packages into a project using `yarn link`,
make sure to run `yarn build` from the root folder so that lerna can properly
cross link everything, then `yarn link` from the particular package directory
(not the root!) you are interested in.

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
