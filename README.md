# react-native-jigsaw

[Draftbit's](https://draftbit.com) component library used inside our Builder. It's based on [React Native Paper](https://github.com/callstack/react-native-paper) but allows us to extend and empower our users with more features :lightning:

## Installation

```sh
npm install @draftbit/ui
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
formType: FORM_TYPES.array,
propType: PROP_TYPES.STRING,
defaultValue: "highQuality",
```

## License

MIT
