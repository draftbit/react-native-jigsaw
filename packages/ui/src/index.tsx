import { Icon } from "@draftbit/native";
export { AudioPlayer, Icon, LinearGradient, WebView } from "@draftbit/native";

export {
  Center,
  Circle,
  CheckboxGroup,
  DefaultTheme,
  Provider,
  RadioButtonFieldGroup,
  RadioButtonGroup,
  Row,
  ScreenContainer,
  Spacer,
  Square,
  Stack,
  SVG,
  Switch,
  SwitchRow,
  NumberInput,
  ThemeProvider,
  Touchable,
  withTheme,
  ActionSheet,
  ActionSheetItem,
  ActionSheetCancel,
  Swiper,
  SwiperItem,
} from "@draftbit/core";

/**
 * Components with Injected Dependencies
 *
 * Inject a native module from `@draftbit/native` into these components for use
 * is snack / expo / react-native
 */

import {
  injectIcon,
  Button as BaseButton,
  Banner as BaseBanner,
  Link as BaseLink,
  Checkbox as BaseCheckbox,
  CheckboxRow as BaseCheckboxRow,
  DatePicker as BaseDatePicker,
  IconButton as BaseIconButton,
  Picker as BasePicker,
  StarRating as BaseStarRating,
  TextField as BaseTextField,
  RadioButton as BaseRadioButton,
  RadioButtonRow as BaseRadioButtonRow,
  Stepper as BaseStepper,
  Slider as BaseSlider,
  AccordionGroup as BaseAccordionGroup,
  AccordionItem as BaseAccordionItem,
} from "@draftbit/core";

export const Banner = injectIcon(BaseBanner, Icon);
export const Button = injectIcon(BaseButton, Icon);
export const Checkbox = injectIcon(BaseCheckbox, Icon);
export const CheckboxRow = injectIcon(BaseCheckboxRow, Icon);
export const DatePicker = injectIcon(BaseDatePicker, Icon);
export const IconButton = injectIcon(BaseIconButton, Icon);
export const Link = injectIcon(BaseLink, Icon);
export const Picker = injectIcon(BasePicker, Icon);
export const RadioButton = injectIcon(BaseRadioButton, Icon);
export const RadioButtonRow = injectIcon(BaseRadioButtonRow, Icon);
export const StarRating = injectIcon(BaseStarRating, Icon);
export const Stepper = injectIcon(BaseStepper, Icon);
export const TextField = injectIcon(BaseTextField, Icon);
export const Slider = injectIcon(BaseSlider, Icon);
export const AccordionGroup = injectIcon(BaseAccordionGroup, Icon);
export const AccordionItem = injectIcon(BaseAccordionItem, Icon);
