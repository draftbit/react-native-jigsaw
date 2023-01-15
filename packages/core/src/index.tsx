export { injectIcon } from "./interfaces/Icon";
export { withTheme, ThemeProvider } from "./theming";
export { default as Provider } from "./Provider";
export { default as DefaultTheme } from "./styles/DefaultTheme";

/** Replaced By NativeBase
 * export { default as Avatar } from "./components/CircleImage";
 * export { default as Container } from "./components/Container";
 * export { default as FAB } from "./components/FAB";
 * export {
  Center,
  Circle,
  Square,
  Row,
  Stack,
  Spacer,
} from "./components/Layout";
 */

// BASIC
export { default as ScreenContainer } from "./components/ScreenContainer";
export { default as Banner } from "./components/Banner";

// BUTTONS
export { Button, ButtonSolid, ButtonOutline } from "./components/Button";
export { Link } from "./components/Text";
export { default as IconButton } from "./components/IconButton";
export { default as Touchable } from "./components/Touchable";
export { default as ToggleButton } from "./components/ToggleButton";

// INPUTS
export { default as DatePicker } from "./components/DatePicker/DatePicker";
export { default as NumberInput } from "./components/NumberInput";
export { default as TextField } from "./components/TextField";
export { default as FieldSearchBarFull } from "./components/FieldSearchBarFull";
export { default as Picker } from "./components/Picker/Picker";

// CONTROLS
export { Checkbox, CheckboxGroup, CheckboxRow } from "./components/Checkbox";
export {
  RadioButton,
  RadioButtonGroup,
  RadioButtonRow,
  RadioButtonFieldGroup,
} from "./components/RadioButton/index";
export { default as Slider } from "./components/Slider";
export { default as Stepper } from "./components/Stepper";
export { default as StarRating } from "./components/StarRating";
export { default as Switch, SwitchRow } from "./components/Switch";

// MEDIA
export { default as SVG } from "./components/SVG";
export { default as Image } from "./components/Image";
// export { default as Avatar } from "./components/CircleImage"; Replaced by NativeBase
export { default as AvatarEdit } from "./components/AvatarEdit";
export { default as CircleImage } from "./components/CircleImage";

// SWIPER
export { Swiper, SwiperItem } from "./components/Swiper";

// CONTAINERS
export { AccordionGroup, AccordionItem } from "./components/Accordion";
export { default as Surface } from "./components/Surface";

// ACTIONSHEET
export {
  ActionSheet,
  ActionSheetItem,
  ActionSheetCancel,
} from "./components/ActionSheet";

// OTHER
export { default as Divider } from "./components/Divider";
export { default as ProgressBar } from "./components/ProgressBar";
export { default as ProgressCircle } from "./components/ProgressCircle";
export { useAuthState } from "./components/useAuthState";

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
