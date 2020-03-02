import * as React from "react"
import { StyleSheet, ScrollView, KeyboardAvoidingView } from "react-native"
import { TextField, TextInput, withTheme } from "@draftbit/ui"

class TextFieldExample extends React.Component {
  state = {
    text: "",
    outlinedText: "",
    name: "",
    outlinedName: "",
    textWithPlaceholder: "",
    outlinedTextWithPlaceholder: "",
    textWithLeftOutsetIcon: "",
    outlinedTextWithLeftOutsetIcon: "",
    textWithLeftInsetIcon: "",
    outlinedTextWithLeftInsetIcon: "",
    textWithRightIcon: "",
    outlinedTextWithRightIcon: "",
    textareaText: "",
    outlinedTextareaText: ""
  }

  _isUsernameValid = () => /^[a-zA-Z]*$/.test(this.state.name)

  render() {
    const {
      theme: {
        colors: { background }
      }
    } = this.props

    return (
      <KeyboardAvoidingView style={styles.wrapper} behavior="padding" keyboardVerticalOffset={80}>
        <ScrollView
          style={[styles.container, { backgroundColor: background }]}
          keyboardShouldPersistTaps={"always"}
          removeClippedSubviews={false}>
          <TextField
            style={styles.inputContainerStyle}
            label="Underline input"
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
          />
          <TextField
            type="solid"
            style={styles.inputContainerStyle}
            label="Solid input"
            value={this.state.outlinedText}
            onChangeText={outlinedText => this.setState({ outlinedText })}
          />
          <TextField
            style={styles.inputContainerStyle}
            label="Underline input with placeholder"
            placeholder="Type something"
            value={this.state.textWithPlaceholder}
            onChangeText={textWithPlaceholder => this.setState({ textWithPlaceholder })}
          />
          <TextField
            type="solid"
            style={styles.inputContainerStyle}
            label="Solid input with placeholder"
            placeholder="Type something"
            value={this.state.outlinedTextWithPlaceholder}
            onChangeText={outlinedTextWithPlaceholder =>
              this.setState({ outlinedTextWithPlaceholder })
            }
          />
          <TextField
            label="Underline input with assistive text"
            placeholder="Enter username, only letters"
            value={this.state.name}
            error={!this._isUsernameValid()}
            onChangeText={name => this.setState({ name })}
            assistiveText="Only letters are allowed"
            style={styles.inputContainerStyle}
          />
          <TextField
            type="solid"
            label="Solid input with assistive text"
            placeholder="Enter username, only letters"
            value={this.state.outlinedName}
            error={!this._isUsernameValid()}
            onChangeText={outlinedName => this.setState({ outlinedName })}
            assistiveText="Only letters are allowed"
            style={styles.inputContainerStyle}
          />
          <TextField
            style={styles.inputContainerStyle}
            label="Underline input with left outset icon"
            leftIconName="add"
            leftIconMode="outset"
            placeholder="Type something"
            value={this.state.textWithLeftOutsetIcon}
            onChangeText={textWithLeftOutsetIcon => this.setState({ textWithLeftOutsetIcon })}
          />
          <TextField
            type="solid"
            style={styles.inputContainerStyle}
            label="Solid input with left outset icon"
            leftIconName="add"
            leftIconMode="outset"
            placeholder="Type something"
            value={this.state.outlinedTextWithLeftOutsetIcon}
            onChangeText={outlinedTextWithLeftOutsetIcon =>
              this.setState({ outlinedTextWithLeftOutsetIcon })
            }
          />
          <TextField
            style={styles.inputContainerStyle}
            label="Underline input with left inset icon"
            leftIconName="add"
            leftIconMode="inset"
            placeholder="Type something"
            value={this.state.textWithLeftInsetIcon}
            onChangeText={textWithLeftInsetIcon => this.setState({ textWithLeftInsetIcon })}
          />
          <TextField
            type="solid"
            style={styles.inputContainerStyle}
            label="Solid input with left inset icon"
            leftIconName="add"
            leftIconMode="inset"
            placeholder="Type something"
            value={this.state.outlinedTextWithLeftInsetIcon}
            onChangeText={outlinedTextWithLeftInsetIcon =>
              this.setState({ outlinedTextWithLeftInsetIcon })
            }
          />
          <TextField
            style={styles.inputContainerStyle}
            label="Underline input with right icon"
            rightIconName="add"
            placeholder="Type something"
            value={this.state.textWithRightIcon}
            onChangeText={textWithRightIcon => this.setState({ textWithRightIcon })}
          />
          <TextField
            type="solid"
            style={styles.inputContainerStyle}
            label="Solid input with right icon"
            rightIconName="add"
            placeholder="Type something"
            value={this.state.outlinedTextWithRightIcon}
            onChangeText={outlinedTextWithRightIcon => this.setState({ outlinedTextWithRightIcon })}
          />
          <TextField style={styles.inputContainerStyle} label="Disabled underline input" disabled />
          <TextField
            type="solid"
            style={styles.inputContainerStyle}
            label="Disabled solid input"
            disabled
          />
          <TextField
            style={styles.inputContainerStyle}
            label="Underline textarea"
            value={this.state.textareaText}
            onChangeText={textareaText => this.setState({ textareaText })}
            multiline
          />
          <TextField
            type="solid"
            style={styles.inputContainerStyle}
            label="Solid textarea"
            value={this.state.outlinedTextareaText}
            onChangeText={outlinedTextareaText => this.setState({ outlinedTextareaText })}
            multiline
          />
          <TextInput style={[styles.textInput]} defaultValue="Default Value" />
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  wrapper: {
    flex: 1
  },
  inputContainerStyle: {
    marginVertical: 16
  },
  textInput: {
    height: 30,
    width: 200
  }
})

export default withTheme(TextFieldExample)
