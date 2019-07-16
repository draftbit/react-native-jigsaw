/* @flow */

import * as React from "react"
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Platform,
  DatePickerIOS,
  DatePickerAndroid,
  TimePickerAndroid
} from "react-native"
import dateFormat from "dateformat"
import { withTheme } from "../core/theming"
import type { Theme } from "../types"
import Portal from "./Portal/Portal"
import Button from "./Button"
import TextField from "./TextField"
import Touchable from "./Touchable"
import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types"

type Props = {
  /**
   * Type of the Picker.
   * - `underline` - input with an underline.
   * - `solid` - input with an outline.
   *
   * In `solid` type, the background color of the label is derived from `colors.background` in theme or the `backgroundColor` style.
   */
  type?: "underline" | "solid",
  /**
   * Uses dateFormat library to format your date / time
   */
  format?: string,
  /**
   * If true, user won't be able to interact with the component.
   */
  disabled?: boolean,
  /**
   * The text to use for the floating label.
   */
  label?: string,
  /**
   * Whether to style the Picker with error style.
   */
  error?: boolean,
  /**
   * Helper text to display below the input
   */
  assistiveText?: string,
  /**
   * The name of the icon to show on the left
   */
  leftIconName?: string,
  /**
   * Whether to display the left button inside or outside of the Picker
   */
  leftIconMode?: "inset" | "outset",
  /**
   * The name of the icon to show on the right
   */
  rightIconName?: string,
  options: Array<{ label: string, value: string }>,
  date: Date,
  onDateChange: (date: Date) => void,
  style?: any,
  theme: Theme
}

class Picker extends React.Component<Props> {
  static defaultProps = {
    type: "underline",
    mode: "date",
    disabled: false,
    error: false,
    date: new Date(),
    onDateChange: () => {}
  }

  state = {
    pickerVisible: false
  }

  constructor(props) {
    super(props)
    this.textField = React.createRef()
  }

  formatDate = () => {
    const { date, mode, format } = this.props

    if (format) return dateFormat(date, format)

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]

    if (mode === "time") {
      return `${date.toLocaleTimeString()}`
    }

    if (mode === "datetime") {
      return `${date.toLocaleString()}`
    }

    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
  }

  toggleVisibility = async () => {
    const { date, mode, onDateChange } = this.props

    if (Platform.OS === "ios") {
      this.setState(prevState => ({ pickerVisible: !prevState.pickerVisible }))
    } else {
      try {
        if (mode === "date") {
          const { action, year, month, day } = await DatePickerAndroid.open({
            date
          })

          if (action !== DatePickerAndroid.dismissedAction) {
            return onDateChange(new Date(year, month, day))
          }
        }

        if (mode === "time") {
          const { action, hour, minute } = await TimePickerAndroid.open({ mode: "default" })

          if (action !== DatePickerAndroid.dismissedAction) {
            const time = new Date()
            time.setHours(hour)
            time.setMinutes(minute)
            time.setSeconds(0)
            onDateChange(time)
          }
        }
      } catch ({ code, message }) {
        console.warn("Cannot open date picker", message)
      }
    }

    this.textField.current.toggleFocus()
  }

  render() {
    const {
      style,
      theme,
      options,
      initialDate,
      locale,
      minuteInterval,
      timeZoneOffsetInMinutes,
      date,
      onDateChange,
      disabled,
      mode,
      ...props
    } = this.props
    const { colors, spacing } = theme

    const { pickerVisible } = this.state

    return (
      <View style={[styles.container, style]}>
        <Touchable disabled={disabled} onPress={this.toggleVisibility}>
          <View pointerEvents="none">
            <TextField
              {...props}
              value={this.formatDate(date)}
              ref={this.textField}
              disabled={disabled}
            />
          </View>
        </Touchable>
        {pickerVisible && (
          <Portal>
            <View
              style={[
                styles.picker,
                {
                  backgroundColor: colors.divider
                }
              ]}>
              <SafeAreaView style={styles.pickerContainer}>
                <Button type="text" onPress={this.toggleVisibility} style={styles.closeButton}>
                  Close
                </Button>
                <DatePickerIOS date={date} onDateChange={onDateChange} mode={mode} />
              </SafeAreaView>
            </View>
          </Portal>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch"
  },
  picker: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center"
  },
  pickerContainer: { flexDirection: "column", width: "100%" },
  closeButton: {
    alignSelf: "flex-end"
  }
})

export default withTheme(Picker)

const SEED_DATA_PROPS = {
  label: {
    label: "Label",
    description: "The label to be displayed on the picker",
    type: FORM_TYPES.string,
    value: "Date",
    editable: true,
    required: true
  },
  mode: {
    label: "Mode",
    description: "Choose between date, time and datetime",
    value: "date",
    editable: true,
    required: true,
    type: FORM_TYPES.flatArray,
    options: ["date", "time", "datetime"]
  },
  assistiveText: {
    label: "Assistive text",
    description: "Helper text to display below the picker",
    type: FORM_TYPES.string,
    value: null,
    editable: true,
    required: false
  },
  locale: {
    label: "Locale",
    description: "Locale for the datepicker. Must be a valid Locale",
    type: FORM_TYPES.string,
    value: null,
    editable: true,
    required: false
  },
  minuteInterval: {
    label: "Minute Interval",
    description: "The interval at which minutes can be selected",
    type: FORM_TYPES.flatArray,
    options: [1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30],
    value: null,
    editable: true,
    required: false
  },
  timeZoneOffsetInMinutes: {
    label: "Time zone offset",
    description:
      "By default, the datepicker uses the device's timezone. This will allow you to offset it",
    type: FORM_TYPES.number,
    value: null,
    editable: true,
    required: false
  },
  initialDate: {
    label: "Initial Date",
    description: "Optionally set an initial date to make your forms easier to work with",
    type: FORM_TYPES.date,
    value: null,
    editable: true,
    required: false
  },
  date: {
    label: "Selected date",
    description: "The selected date of the picker",
    type: FORM_TYPES.date,
    value: null,
    editable: true,
    required: false
  },
  onDateChange: {
    label: "Picker onDateChange function",
    description: "Function to call as picker date is changed",
    editable: true,
    type: FORM_TYPES.function,
    value: "{this.onDateChange}"
  },
  options: {
    label: "Options",
    description: "Array of picker options. An array of objects containing a label and value.",
    editable: true,
    type: FORM_TYPES.array,
    value: null
  },
  disabled: {
    label: "Disabled",
    description:
      "Whether the picker should be disabled. Will prevent selection and show a greyed out state.",
    type: FORM_TYPES.boolean,
    value: false,
    editable: true
  },
  error: {
    label: "Error",
    description: "Whether the picker should display the error state",
    type: FORM_TYPES.boolean,
    value: false,
    editable: true
  },
  leftIconName: {
    label: "Left icon name",
    description: "The icon to display on the left",
    type: FORM_TYPES.icon,
    value: null,
    editable: true
  },
  leftIconMode: {
    label: "Left icon mode",
    description: "The mode of the icon to display on the left. 'inset' or 'outset'.",
    type: FORM_TYPES.flatArray,
    value: "inset",
    options: ["inset", "outset"],
    editable: true,
    required: true
  },
  rightIconName: {
    label: "Right icon name",
    description: "The icon to display on the right",
    type: FORM_TYPES.icon,
    value: null,
    editable: true
  }
}

export const SEED_DATA = [
  {
    name: "Date Picker - Solid",
    tag: "DatePicker",
    description: "A date picker with a solid border",
    category: COMPONENT_TYPES.field,
    preview_image_url: "{CLOUDINARY_URL}/DatePicker.png",
    supports_list_render: false,
    props: {
      ...SEED_DATA_PROPS,
      type: {
        type: FORM_TYPES.string,
        value: "solid",
        editable: false
      }
    },
    layout: {}
  },
  {
    name: "Date Picker - Underline",
    tag: "DatePicker",
    description: "A date picker with an underline",
    category: COMPONENT_TYPES.field,
    preview_image_url: "{CLOUDINARY_URL}/DatePicker.png",
    supports_list_render: false,
    props: {
      ...SEED_DATA_PROPS,
      type: {
        type: FORM_TYPES.string,
        value: "underline",
        editable: false
      }
    },
    layout: {}
  }
]
