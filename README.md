# react-native-jigsaw

[Draftbit's](https://draftbit.com) component library used inside our Builder. It's based on [React Native Paper](https://github.com/callstack/react-native-paper) but allows us to extend and empower our users with more features ⚡️

## Differences between React Native Paper and Jigsaw

- Embedded themes. Jigsaw has a very robust theming system that is directly integrated into our builder. React Native Paper is based on Material Design where ours is more generalized for both iOS and Android. That doesn't make it any better or worse, it just means ours is directly integrated into our product and by controlling the library we can make changes as often as we need

- Different components & use cases. React Native Paper is really great for building Material-style apps where we use Jigsaw to build any type of app. You'll find a different series of components for different use cases

We love React Native Paper and even plan on supporting it one day as a different component library, Jigsaw just allows us to deeply embed components, props, themes directly into the Draftbit platform

## Differences between @draftbit/ui and @draftbit/web

@draftbit/web is only used for our internal builder. Because we're using `@expo/vector-icons` and React Native's way of compiling files, this isn't compatible inside create-react-app. The fix is to publish a separate `@draftbit/web` file with Icon.web.tsx being the Icon.tsx file and Icon.native.tsx being the Icon.tsx file.

Both icon files live inside `files/` top level, next to `src`.

## Installation

```sh
npm install @draftbit/ui
```

## Publishing

```sh
yarn publish:both
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## Adding components


### Primitives (Text, View)

Most of the primitives should already be here. If a component with no actual logic needs to be added, you can add that into `src/mappings` (see that folder for an example)

### Custom Components

All components live inside `src/components/MyComponent.ts`. Add your component, add the required `SEED_DATA` and you should be good to go!

## Seed Data

Seed data is how we know what to render and support inside the product. It takes on this format. `src/core/component-types.js` will show you the different GROUPS, PROP_TYPES, FORM_TYPES, and other fields you might need.

```js
group: GROUPS.advanced,
name: "textBreakStrategy",
label: "textBreakStrategy",
description:
"Set text break strategy on Android API Level 23+, possible values are simple, highQuality, balanced The default value is highQuality.",
options: ["simple", "highQuality", "balanced"],
editable: true,
required: false,
formType: FORM_TYPES.flatArray,
propType: PROP_TYPES.STRING,
defaultValue: "highQuality",
```

## License

MIT
