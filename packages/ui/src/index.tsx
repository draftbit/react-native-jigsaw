export {
  Avatar,
  CardBlock,
  CardContainerShortImage,
  CardInline,
  Carousel,
  Container,
  DataContext,
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
  defaultDataContext,
  withTheme,
} from "@draftbit/core";

export { AudioPlayer } from "@draftbit/native";

/**
 * Components with Injected Dependencies
 *
 * Inject a native module from `@draftbit/native` into these components for use
 * is snack / expo / react-native
 */

import {
  injectIcon,
  AvatarEdit as BaseAvatarEdit,
  Button as BaseButton,
  CardContainer as BaseCardContainer,
  CardContainerRating as BaseCardContainerRating,
  Checkbox as BaseCheckbox,
  DatePicker as BaseDatePicker,
  EmailLoginScreen as BaseEmailLoginScreen,
  FAB as BaseFab,
  FieldCheckbox as BaseFieldCheckbox,
  FieldRadioButton as BaseFieldRadioButton,
  FieldSearchBarFull as BaseFieldSearchBarFull,
  HeaderLarge as BaseHeaderLarge,
  HeaderMedium as BaseHeaderMedium,
  HeaderOverline as BaseHeaderOverline,
  IconButton as BaseIconButton,
  Picker as BasePickerComponent,
  RadioButton as BaseRadioButton,
  RadioButtonFieldGroup as BaseRadioButtonFieldGroup,
  RadioButtonFieldRow as BaseRadioButtonFieldRow,
  RadioButtonGroup as BaseRadioButtonGroup,
  RowBodyCheckbox as BaseRowBodyCheckbox,
  RowBodyIcon as BaseRowBodyIcon,
  RowHeadlineImageIcon as BaseRowHeadlineImageIcon,
  StarRating as BaseStarRating,
  Stepper as BaseStepper,
  TextField as BaseTextField,
} from "@draftbit/core";

import { Icon } from "@draftbit/native";

export const IconButton = injectIcon(BaseIconButton, Icon);
export const FAB = injectIcon(BaseFab, Icon);
export const HeaderMedium = injectIcon(BaseHeaderMedium, Icon);
export const Button = injectIcon(BaseButton, Icon);
export const EmailLoginScreen = injectIcon(BaseEmailLoginScreen, Icon);
export const FieldSearchBarFull = injectIcon(BaseFieldSearchBarFull, Icon);
export const Stepper = injectIcon(BaseStepper, Icon);
export const Checkbox = injectIcon(BaseCheckbox, Icon);
export const StarRating = injectIcon(BaseStarRating, Icon);
export const AvatarEdit = injectIcon(BaseAvatarEdit, Icon);
export const RadioButton = injectIcon(BaseRadioButton, Icon);
export const TextField = injectIcon(BaseTextField, Icon);
export const RadioButtonGroup = injectIcon(BaseRadioButtonGroup, Icon);
export const HeaderLarge = injectIcon(BaseHeaderLarge, Icon);
export const RadioButtonFieldGroup = injectIcon(
  BaseRadioButtonFieldGroup,
  Icon
);
export const RowHeadlineImageIcon = injectIcon(BaseRowHeadlineImageIcon, Icon);
export const RowBodyIcon = injectIcon(BaseRowBodyIcon, Icon);
export const DatePicker = injectIcon(BaseDatePicker, Icon);
export const RowBodyCheckbox = injectIcon(BaseRowBodyCheckbox, Icon);
export const CardContainerRating = injectIcon(BaseCardContainerRating, Icon);
export const FieldCheckbox = injectIcon(BaseFieldCheckbox, Icon);
export const CardContainer = injectIcon(BaseCardContainer, Icon);
export const PickerComponent = injectIcon(BasePickerComponent, Icon);
export const FieldRadioButton = injectIcon(BaseFieldRadioButton, Icon);
export const RadioButtonFieldRow = injectIcon(BaseRadioButtonFieldRow, Icon);
export const HeaderOverline = injectIcon(BaseHeaderOverline, Icon);
