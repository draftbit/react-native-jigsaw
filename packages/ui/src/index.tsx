export {
  Center,
  Circle,
  CircleImage,
  Square,
  Row,
  Stack,
  Spacer,
  Avatar,
  CardBlock,
  CardContainerShortImage,
  CardInline,
  Carousel,
  Container,
  DefaultTheme,
  Divider,
  FieldSlider,
  ProgressBar,
  ProgressCircle,
  ProgressIndicator,
  Provider,
  RowBodySwitch,
  RowHeadlineImageCaption,
  ScreenContainer,
  Slider,
  Switch,
  ThemeProvider,
  Touchable,
  withTheme,
} from "@draftbit/core";

export { AudioPlayer, Icon } from "@draftbit/native";

/**
 * Components with Injected Dependencies
 *
 * Inject a native module from `@draftbit/native` into these components for use
 * is snack / expo / react-native
 */

import {
  injectIcon,
  AvatarEdit as BaseAvatarEdit,
  ButtonSolid as BaseButtonSolid,
  ButtonOutline as BaseButtonOutline,
  Link as BaseLink,
  // CardContainer as BaseCardContainer,
  // CardContainerRating as BaseCardContainerRating,
  DatePicker as BaseDatePicker,
  FAB as BaseFab,
  // FieldSearchBarFull as BaseFieldSearchBarFull,
  IconButton as BaseIconButton,
  Picker as BasePickerComponent,
  StarRating as BaseStarRating,
  TextField as BaseTextField,
} from "@draftbit/core";

import { Icon } from "@draftbit/native";

export {
  RadioButton,
  RadioButtonFieldGroup,
  RadioButtonRow,
  RadioButtonGroup,
} from "@draftbit/core";

export const IconButton = injectIcon(BaseIconButton, Icon);
export const FAB = injectIcon(BaseFab, Icon);
export const ButtonSolid = injectIcon(BaseButtonSolid, Icon);
export const ButtonOutline = injectIcon(BaseButtonOutline, Icon);
export const Link = injectIcon(BaseLink, Icon);
export const StarRating = injectIcon(BaseStarRating, Icon);
export const AvatarEdit = injectIcon(BaseAvatarEdit, Icon);
export const TextField = injectIcon(BaseTextField, Icon);
export const DatePicker = injectIcon(BaseDatePicker, Icon);
