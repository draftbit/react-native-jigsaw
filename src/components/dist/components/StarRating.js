"use strict";exports.__esModule=!0,exports.default=void 0;var React=_interopRequireWildcard(require("react")),_reactNative=require("react-native"),_Icon=_interopRequireDefault(require("./Icon")),_Config=_interopRequireDefault(require("./Config")),_theming=require("../core/theming");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _interopRequireWildcard(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,c):{};d.get||d.set?Object.defineProperty(b,c,d):b[c]=a[c]}return b.default=a,b}class StarRating extends React.PureComponent{render(){const{maxStars:a,rating:b,theme:c,style:d}=this.props,{colors:e}=c,f=Math.round(2*b)/2;return React.createElement(_reactNative.View,{style:[styles.containerStyle,d]},[...Array(a)].map((a,b)=>React.createElement(_Icon.default,{key:b,name:.5==f-b?"MaterialIcons/star-half":"MaterialIcons/star",size:_Config.default.ratingStarSize,color:f>b?e.primary:e.divider})))}}StarRating.defaultProps={maxStars:5,rating:0};const styles=_reactNative.StyleSheet.create({containerStyle:{flexDirection:"row",alignItems:"center"}});var _default=(0,_theming.withTheme)(StarRating);exports.default=_default;