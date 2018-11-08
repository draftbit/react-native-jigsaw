/* @flow */

import * as React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import { TextField, withTheme } from "@draftbit/ui";
import type { Theme } from "@draftbit/ui/types";

type Props = {
  theme: Theme
};

type State = {
  text: string,
  outlinedText: string,
  name: string,
  outlinedName: string,
  textWithPlaceholder: string,
  outlinedTextWithPlaceholder: string,
  textWithLeftOutsetIcon: string,
  outlinedTextWithLeftOutsetIcon: string,
  textWithLeftInsetIcon: string,
  outlinedTextWithLeftInsetIcon: string,
  textWithRightIcon: string,
  outlinedTextWithRightIcon: string
};

class TextFieldExample extends React.Component<Props, State> {
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
    outlinedTextWithRightIcon: ""
  };

  _isUsernameValid = () => /^[a-zA-Z]*$/.test(this.state.name);

  render() {
    const {
      theme: {
        colors: { background }
      }
    } = this.props;

    return (
      <KeyboardAvoidingView
        style={styles.wrapper}
        behavior="padding"
        keyboardVerticalOffset={80}
      >
        <ScrollView
          style={[styles.container, { backgroundColor: background }]}
          keyboardShouldPersistTaps={"always"}
          removeClippedSubviews={false}
        >
          <TextField
            style={styles.inputContainerStyle}
            label="Flat input"
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
          />
          <TextField
            mode="outlined"
            style={styles.inputContainerStyle}
            label="Outlined input"
            value={this.state.outlinedText}
            onChangeText={outlinedText => this.setState({ outlinedText })}
          />
          <TextField
            style={styles.inputContainerStyle}
            label="Flat input with placeholder"
            placeholder="Type something"
            value={this.state.textWithPlaceholder}
            onChangeText={textWithPlaceholder =>
              this.setState({ textWithPlaceholder })
            }
          />
          <TextField
            mode="outlined"
            style={styles.inputContainerStyle}
            label="Outlined input with placeholder"
            placeholder="Type something"
            value={this.state.outlinedTextWithPlaceholder}
            onChangeText={outlinedTextWithPlaceholder =>
              this.setState({ outlinedTextWithPlaceholder })
            }
          />
          <TextField
            label="Flat input with assistive text"
            placeholder="Enter username, only letters"
            value={this.state.name}
            error={!this._isUsernameValid()}
            onChangeText={name => this.setState({ name })}
            assistiveText="Only letters are allowed"
            style={styles.inputContainerStyle}
          />
          <TextField
            mode="outlined"
            label="Outlined input with assistive text"
            placeholder="Enter username, only letters"
            value={this.state.outlinedName}
            error={!this._isUsernameValid()}
            onChangeText={outlinedName => this.setState({ outlinedName })}
            assistiveText="Only letters are allowed"
            style={styles.inputContainerStyle}
          />
          <TextField
            style={styles.inputContainerStyle}
            label="Flat input with left outset icon"
            leftIconName="add"
            leftIconMode="outset"
            placeholder="Type something"
            value={this.state.textWithLeftOutsetIcon}
            onChangeText={textWithLeftOutsetIcon =>
              this.setState({ textWithLeftOutsetIcon })
            }
          />
          <TextField
            mode="outlined"
            style={styles.inputContainerStyle}
            label="Outlined input with left outset icon"
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
            label="Flat input with left inset icon"
            leftIconName="add"
            leftIconMode="inset"
            placeholder="Type something"
            value={this.state.textWithLeftInsetIcon}
            onChangeText={textWithLeftInsetIcon =>
              this.setState({ textWithLeftInsetIcon })
            }
          />
          <TextField
            mode="outlined"
            style={styles.inputContainerStyle}
            label="Outlined input with left inset icon"
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
            label="Flat input with right icon"
            rightIconName="add"
            placeholder="Type something"
            value={this.state.textWithRightIcon}
            onChangeText={textWithRightIcon =>
              this.setState({ textWithRightIcon })
            }
          />
          <TextField
            mode="outlined"
            style={styles.inputContainerStyle}
            label="Outlined input with right icon"
            rightIconName="add"
            placeholder="Type something"
            value={this.state.outlinedTextWithRightIcon}
            onChangeText={outlinedTextWithRightIcon =>
              this.setState({ outlinedTextWithRightIcon })
            }
          />
          <TextField
            style={styles.inputContainerStyle}
            label="Disabled flat input"
            disabled
          />
          <TextField
            mode="outlined"
            style={styles.inputContainerStyle}
            label="Disabled outlined input"
            disabled
          />
        </ScrollView>
      </KeyboardAvoidingView>
    );
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
  }
});

export default withTheme(TextFieldExample);
