"use strict";exports.__esModule=!0,exports.SEED_DATA=exports.default=void 0;var _react=_interopRequireDefault(require("react")),_reactNative=require("react-native"),_reactNativePlatformTouchable=_interopRequireDefault(require("react-native-platform-touchable")),_componentTypes=require("../core/component-types");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}class _default extends _reactNativePlatformTouchable.default{render(){const a=this.props,{children:b}=a,c=_objectWithoutProperties(a,["children"]);return _react.default.createElement(_reactNativePlatformTouchable.default,c,_react.default.createElement(_reactNative.View,null,b))}}exports.default=_default;const SEED_DATA={name:"Touchable",tag:"Touchable",description:"Provides a way to capture tapping gestures, and displays feedback when a gesture is recognized",category:_componentTypes.COMPONENT_TYPES.input,supports_list_render:!1/* Need collapsable=false here to clip the elevations, otherwise they appear above sibling components */,layout:{},props:{onPress:{label:"Action",description:"Action to execute when touchable pressed",editable:!0,type:_componentTypes.FORM_TYPES.action,value:null},hitSlop:{label:"Hit Slop",description:"Makes the Touchable easier to press by expanding the touchable area a specified number of points, without having to change the layout of the Touchable (e.g. by adding padding)",editable:!0,required:!1,type:_componentTypes.FORM_TYPES.position,value:null}}};exports.SEED_DATA=SEED_DATA;