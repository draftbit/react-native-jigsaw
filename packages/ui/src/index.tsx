import { Icon } from "@draftbit/native";
export { AudioPlayer, Icon } from "@draftbit/native";
export {
  Switch,
  Avatar,
  CircleImage,
  Center,
  Circle,
  Row,
  Spacer,
  Square,
  Stack,
  Divider,
  Surface,
  Carousel,
  Container,
  DefaultTheme,
  Provider,
  ScreenContainer,
  ThemeProvider,
  Touchable,
  withTheme,
  RadioButtonFieldGroup,
  RadioButtonRow,
  RadioButtonGroup,
  /* Deprecated, needs fixing */
  CardBlock,
  FieldSlider,
  Slider, // ProgressBar, // ProgressCircle, // ProgressIndicator, // RowBodySwitch, // RowHeadlineImageCaption,
} from "@draftbit/core";

/**
 * Components with Injected Dependencies
 *
 * Inject a native module from `@draftbit/native` into these components for use
 * is snack / expo / react-native
 */

import {
  // CardContainerShortImage,
  // CardInline,
  injectIcon,
  AvatarEdit as BaseAvatarEdit,
  ButtonSolid as BaseButtonSolid,
  ButtonOutline as BaseButtonOutline,
  Link as BaseLink,
  // CardContainer as BaseCardContainer,
  // CardContainerRating as BaseCardContainerRating,
  DatePicker as BaseDatePicker,
  FAB as BaseFab,
  FieldSearchBarFull as BaseFieldSearchBarFull,
  IconButton as BaseIconButton,
  Picker as BasePicker,
  StarRating as BaseStarRating,
  TextField as BaseTextField,
  RadioButton as BaseRadioButton,
  ToggleButton as BaseToggleButton,
  Stepper as BaseStepper,
} from "@draftbit/core";

export const IconButton = injectIcon(BaseIconButton, Icon);
export const FAB = injectIcon(BaseFab, Icon);
export const ButtonSolid = injectIcon(BaseButtonSolid, Icon);
export const ButtonOutline = injectIcon(BaseButtonOutline, Icon);
export const Link = injectIcon(BaseLink, Icon);
export const TextField = injectIcon(BaseTextField, Icon);
export const AvatarEdit = injectIcon(BaseAvatarEdit, Icon);
export const DatePicker = injectIcon(BaseDatePicker, Icon);
export const Picker = injectIcon(BasePicker, Icon);
export const ToggleButton = injectIcon(BaseToggleButton, Icon);
export const FieldSearchBarFull = injectIcon(BaseFieldSearchBarFull, Icon);
export const StarRating = injectIcon(BaseStarRating, Icon);
export const Stepper = injectIcon(BaseStepper, Icon);

export const RadioButton = injectIcon(BaseRadioButton, Icon);
