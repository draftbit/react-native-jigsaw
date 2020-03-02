import * as React from "react"
import { Animated, StyleSheet, View } from "react-native"
import { polyfill } from "react-lifecycles-compat"
import Icon, { isValidIcon, isEqualIcon } from "./Icon"

class CrossFadeIcon extends React.Component {
  static getDerivedStateFromProps(nextProps, nextState) {
    if (nextState.currentIcon === nextProps.source) {
      return null
    }

    return {
      currentIcon: nextProps.source,
      previousIcon: nextState.currentIcon
    }
  }

  state = {
    currentIcon: this.props.source,
    previousIcon: null,
    fade: new Animated.Value(1)
  }

  componentDidUpdate(prevProps, prevState) {
    const { previousIcon } = this.state

    if (!isValidIcon(previousIcon) || isEqualIcon(previousIcon, prevState.previousIcon)) {
      return
    }

    this.state.fade.setValue(1)

    Animated.timing(this.state.fade, {
      duration: 200,
      toValue: 0
    }).start()
  }

  render() {
    const { color, size } = this.props
    const opacityPrev = this.state.fade
    const opacityNext = this.state.previousIcon
      ? this.state.fade.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 0]
        })
      : 1

    const rotatePrev = this.state.fade.interpolate({
      inputRange: [0, 1],
      outputRange: ["-90deg", "0deg"]
    })

    const rotateNext = this.state.previousIcon
      ? this.state.fade.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "-180deg"]
        })
      : "0deg"

    return (
      <View
        style={[
          styles.content,
          {
            height: size,
            width: size
          }
        ]}>
        {this.state.previousIcon ? (
          <Animated.View
            style={[
              styles.icon,
              {
                opacity: opacityPrev,
                transform: [{ rotate: rotatePrev }]
              }
            ]}>
            <Icon source={this.state.previousIcon} size={size} color={color} />
          </Animated.View>
        ) : null}
        <Animated.View
          style={[
            styles.icon,
            {
              opacity: opacityNext,
              transform: [{ rotate: rotateNext }]
            }
          ]}>
          <Icon source={this.state.currentIcon} size={size} color={color} />
        </Animated.View>
      </View>
    )
  }
}

polyfill(CrossFadeIcon)

export default CrossFadeIcon

const styles = StyleSheet.create({
  content: {
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
})
