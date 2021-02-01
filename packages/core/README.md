# @draftbit/core

This module contains web-compatible components used by @draftbit/ui.

You should look @ `@draftbit/ui` if you are just looking to use these components
in your own projects.

This module is consumed by the `ui` module, which injects native dependencies
and re-export the components with those dependencies included for react-native
projects.

It is possible, but not advised, to directly consume components from this module
in your own web projects. You will have to inject your own compatible
dependencies. This is how this project is consumed internally by Draftbit to
power our builder experience. See the `interfaces` folder to see what you'll
need to implement yourself.

## Contributing

If you're looking to contribute to components in `@draftbit/ui` this is usually
the module you're looking for. Checkout [@draftbit/native](../native/) if you
need to add a module with a native dependency. But please open a PR to discuss
first. It's possible! There's just some gotcha's we should talk through before
you start.

### Note on Dependencies

`@draftbit/native` can (and should) depend on this module when composing
components to create higher-order functionality, and to share interfaces. This
module should _never_ depend on `@draftbit/native`, directly or otherwise, as
that will break non-Expo toolchains that expect to be able use `@draftbit/core`
directly.
