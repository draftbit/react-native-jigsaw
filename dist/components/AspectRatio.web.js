"use strict";exports.__esModule=!0,exports.default=void 0;var _react=_interopRequireDefault(require("react")),_reactNative=require("react-native");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}class AspectRatio extends _react.default.Component{render(){const{children:a,onLayout:b,ratio:c,style:d}=this.props;return _react.default.createElement(_reactNative.View,{onLayout:b,style:[styles.root,d]},(0,_reactNative.createElement)("div",{style:[styles.ratio,{paddingBottom:100/c+"%"}]}),(0,_reactNative.createElement)("div",{children:a,style:styles.content}))}}exports.default=AspectRatio,AspectRatio.displayName="AspectRatio";const styles=_reactNative.StyleSheet.create({root:{display:"block",overflow:"hidden"},ratio:{display:"block",width:"100%"},content:{bottom:0,height:"100%",left:0,position:"absolute",top:0,width:"100%"}});