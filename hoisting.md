# Hoisting

You might notice the node_modules folders are a little...light.

That is due to automatic hoisting: of dependencies via yarn workspaces.

Usually you do not have to worry about this!

But some packages, particularly react-native ones, do not play nicely with
hoisting. You can tell yarn not to host those, by adding them to the
`workspaces.nohoist` key in the root `package.json` file.

This will create **_many_** duplicate versions of that module inside the various
monorepo node_modules folder, which is slow to do, but will help
incompatable packages be found by tooling and avoid 'module not found' errors,
etc. See: https://classic.yarnpkg.com/blog/2018/02/15/nohoist/

We nohoist the following packages because we found it to be the least
complicated solution to certain build issues that pop up.

- `react-native-web`
  - Added as a development dependency to assist resolution for the example
    app. See `example/webpack.config.js`.
