# @draftbit/ui

The user interface library that powers [Draftbit](https://draftbit.com) Apps.

`@draftbit/ui` is based on [React Native Paper](https://github.com/callstack/react-native-paper) but allows us to extend
components to empower our users with more features ⚡️

## Differences between React Native Paper and Jigsaw

- Embedded themes. Jigsaw has a very robust theming system that is directly
  integrated into our builder. React Native Paper is based on Material Design
  where ours is more generalized for both iOS and Android. That doesn't make it
  any better or worse, it just means ours is directly integrated into our
  product and by controlling the library we can make changes as often as we need

- Different components & use cases. React Native Paper is really great for
  building Material-style apps where we use Jigsaw to build any type of app.
  You'll find a different series of components for different use cases.

We love React Native Paper and even plan on supporting it one day as a different
component library, Jigsaw just allows us to deeply embed components, props,
themes directly into the Draftbit platform

## Installation

```console
npm install @draftbit/ui
```

## Contributing

This package is developed in a monorepository. See the
[root readme](https://github.com/draftbit/react-native-jigsaw) for details on
contributing.

## License

MIT
