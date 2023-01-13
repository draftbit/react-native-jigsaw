import { Icon } from "@draftbit/native";
export { AudioPlayer, Icon, LinearGradient, WebView } from "@draftbit/native";

export {
  Avatar,
  Center,
  Circle,
  CircleImage,
  Container,
  CheckboxGroup,
  DefaultTheme,
  Divider,
  Provider,
  RadioButtonFieldGroup,
  RadioButtonGroup,
  Row,
  ScreenContainer,
  Spacer,
  Square,
  Stack,
  Surface,
  SVG,
  Switch,
  SwitchRow,
  NumberInput,
  ThemeProvider,
  Touchable,
  Pressable,
  withTheme,
  useAuthState,
  /* Deprecated, needs fixing */
  ProgressBar,
  ProgressCircle,
  RowHeadlineImageCaption,
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
  AvatarEdit as BaseAvatarEdit,
  Banner as BaseBanner,
  Button as BaseDeprecatedButton,
  ButtonSolid as BaseButtonSolid,
  ButtonOutline as BaseButtonOutline,
  Card as BaseCard,
  Link as BaseLink,
  Checkbox as BaseCheckbox,
  CheckboxRow as BaseCheckboxRow,
  DatePicker as BaseDatePicker,
  FAB as BaseFab,
  FieldSearchBarFull as BaseFieldSearchBarFull,
  IconButton as BaseIconButton,
  Picker as BasePicker,
  StarRating as BaseStarRating,
  TextField as BaseTextField,
  RadioButton as BaseRadioButton,
  RadioButtonRow as BaseRadioButtonRow,
  Stepper as BaseStepper,
  ToggleButton as BaseToggleButton,
  RowBodyIcon as BaseRowBodyIcon,
  RowHeadlineImageIcon as BaseRowHeadlineImageIcon,
  Slider as BaseSlider,
  AccordionGroup as BaseAccordionGroup,
  AccordionItem as BaseAccordionItem,
} from "@draftbit/core";

export const AvatarEdit = injectIcon(BaseAvatarEdit, Icon);
export const Banner = injectIcon(BaseBanner, Icon);
export const Button = injectIcon(BaseDeprecatedButton, Icon);
export const ButtonOutline = injectIcon(BaseButtonOutline, Icon);
export const ButtonSolid = injectIcon(BaseButtonSolid, Icon);
export const Card = injectIcon(BaseCard, Icon);
export const Checkbox = injectIcon(BaseCheckbox, Icon);
export const CheckboxRow = injectIcon(BaseCheckboxRow, Icon);
export const DatePicker = injectIcon(BaseDatePicker, Icon);
export const FAB = injectIcon(BaseFab, Icon);
export const FieldSearchBarFull = injectIcon(BaseFieldSearchBarFull, Icon);
export const IconButton = injectIcon(BaseIconButton, Icon);
export const Link = injectIcon(BaseLink, Icon);
export const Picker = injectIcon(BasePicker, Icon);
export const RadioButton = injectIcon(BaseRadioButton, Icon);
export const RadioButtonRow = injectIcon(BaseRadioButtonRow, Icon);
export const RowBodyIcon = injectIcon(BaseRowBodyIcon, Icon);
export const RowHeadlineImageIcon = injectIcon(BaseRowHeadlineImageIcon, Icon);
export const StarRating = injectIcon(BaseStarRating, Icon);
export const Stepper = injectIcon(BaseStepper, Icon);
export const TextField = injectIcon(BaseTextField, Icon);
export const ToggleButton = injectIcon(BaseToggleButton, Icon);
export const Slider = injectIcon(BaseSlider, Icon);
export const AccordionGroup = injectIcon(BaseAccordionGroup, Icon);
export const AccordionItem = injectIcon(BaseAccordionItem, Icon);
