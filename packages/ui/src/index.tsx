import { Icon } from "@draftbit/native";
export { AudioPlayer, Icon, LinearGradient, WebView } from "@draftbit/native";

export {
  Carousel,
  // Center,
  // Circle,
  CircleImage,
  // Container,
  CheckboxGroup,
  DefaultTheme,
  Divider,
  Provider,
  RadioButtonFieldGroup,
  RadioButtonGroup,
  // Row,
  ScreenContainer,
  // Spacer,
  // Square,
  // Stack,
  Surface,
  SVG,
  Switch,
  SwitchRow,
  NumberInput,
  ThemeProvider,
  Touchable,
  withTheme,
  useAuthState,
  /* Deprecated, needs fixing */
  CardBlock,
  CardInline,
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
 * NativeBase Components Jan 2023
 *
 * ALERT
 * - AlertDialog
 * - AlertDialog.Header
 * - AlertDialog.Body
 * - AlertDialog.Footer
 * - AlertDialog.Content
 * - AlertDialog.CloseButton
 *
 * FORMS
 * - Button -- COMMENTED OUT
 * - Button.Group -- COMMENTED OUT
 * - Fab
 *
 * DATA DISPLAY
 * - Badge
 * - Divider
 *
 * FEEDBACK
 * - Alert
 * - Alert.Icon
 * - Progress
 *
 * LAYOUT
 * - AspectRatio
 * - Box
 * - Center
 * - Square
 * - Circle
 * - Column
 * - Container
 * - Flex
 * - Spacer
 * - Row
 * - Stack
 * - ZStack
 *
 * MEDIA
 * - Avatar
 * - Avatar.Badge
 * - Avatar.Group
 *
 * MENU
 * - Menu
 * - Menu.Item
 * - Menu.Group
 * - Menu.OptionGroup
 * - Menu.ItemOption
 * - Menu.Trigger
 *
 * MODAL
 * - Modal
 * - Modal.Content
 * - Modal.Header
 * - Modal.Footer
 * - Modal.Body
 * - Modal.CloseButton
 *
 * OTHER
 * - Tooltip
 *
 * */

/**
 * Components with Injected Dependencies
 *
 * Inject a native module from `@draftbit/native` into these components for use
 * is snack / expo / react-native
 */

import {
  injectIcon,
  //AvatarEdit as BaseAvatarEdit,
  Banner as BaseBanner,
  Button as BaseDeprecatedButton,
  ButtonSolid as BaseButtonSolid,
  ButtonOutline as BaseButtonOutline,
  Card as BaseCard,
  Link as BaseLink,
  CardContainer as BaseCardContainer,
  CardContainerRating as BaseCardContainerRating,
  Checkbox as BaseCheckbox,
  CheckboxRow as BaseCheckboxRow,
  DatePicker as BaseDatePicker,
  FieldSearchBarFull as BaseFieldSearchBarFull,
  IconButton as BaseIconButton,
  Picker as BasePicker,
  StarRating as BaseStarRating,
  TextField as BaseTextField,
  RadioButton as BaseRadioButton,
  RadioButtonRow as BaseRadioButtonRow,
  Stepper as BaseStepper,
  ToggleButton as BaseToggleButton,
  HeaderLarge as BaseHeaderLarge,
  HeaderMedium as BaseHeaderMedium,
  HeaderOverline as BaseHeaderOverline,
  RowBodyIcon as BaseRowBodyIcon,
  RowHeadlineImageIcon as BaseRowHeadlineImageIcon,
  Slider as BaseSlider,
  AccordionGroup as BaseAccordionGroup,
  AccordionItem as BaseAccordionItem,
} from "@draftbit/core";

//export const AvatarEdit = injectIcon(BaseAvatarEdit, Icon);
export const Banner = injectIcon(BaseBanner, Icon);
export const Button = injectIcon(BaseDeprecatedButton, Icon);
export const ButtonOutline = injectIcon(BaseButtonOutline, Icon);
export const ButtonSolid = injectIcon(BaseButtonSolid, Icon);
export const Card = injectIcon(BaseCard, Icon);
export const CardContainer = injectIcon(BaseCardContainer, Icon);
export const CardContainerRating = injectIcon(BaseCardContainerRating, Icon);
export const Checkbox = injectIcon(BaseCheckbox, Icon);
export const CheckboxRow = injectIcon(BaseCheckboxRow, Icon);
export const DatePicker = injectIcon(BaseDatePicker, Icon);
export const FieldSearchBarFull = injectIcon(BaseFieldSearchBarFull, Icon);
export const HeaderLarge = injectIcon(BaseHeaderLarge, Icon);
export const HeaderMedium = injectIcon(BaseHeaderMedium, Icon);
export const HeaderOverline = injectIcon(BaseHeaderOverline, Icon);
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
