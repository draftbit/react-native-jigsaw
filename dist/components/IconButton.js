"use strict";exports.__esModule=!0,exports.SEED_DATA=exports.default=void 0;var React=_interopRequireWildcard(require("react")),_reactNative=require("react-native"),_color=_interopRequireDefault(require("color")),_Touchable=_interopRequireDefault(require("./Touchable")),_Icon=_interopRequireDefault(require("./Icon")),_theming=require("../core/theming"),_componentTypes=require("../core/component-types");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _interopRequireWildcard(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,c):{};d.get||d.set?Object.defineProperty(b,c,d):b[c]=a[c]}return b.default=a,b}function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}/**
 * An icon button is a button which displays only an icon without a label.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img src="screenshots/icon-button-1.png" />
 *     <figcaption>Icon button</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/icon-button-2.png" />
 *     <figcaption>Pressed icon button</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { IconButton, Colors } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <IconButton
 *     icon="add-a-photo"
 *     color={Colors.red500}
 *     size={20}
 *     onPress={() => console.log('Pressed')}
 *   />
 * );
 *
 * export default MyComponent;
 * ```
 */const IconButton=(a)=>{let{icon:b,color:c,size:j=32,accessibilityLabel:d,disabled:e,loading:f,onPress:g,theme:h,style:i}=a,k=_objectWithoutProperties(a,["icon","color","size","accessibilityLabel","disabled","loading","onPress","theme","style"]);const l=c||h.colors.text,m=(0,_color.default)(l).alpha(h.disabledOpacity).rgb().string();return React.createElement(_Touchable.default,_extends({onPress:g,disabled:e||f,background:_Touchable.default.Ripple(m),style:[styles.container,f||e&&{opacity:h.disabledOpacity},i],accessibilityLabel:d,accessibilityTraits:e?["button","disabled"]:"button",accessibilityComponentType:"button",accessibilityRole:"button",accessibilityStates:e?["disabled"]:void 0,hitSlop:{top:6,left:6,bottom:6,right:6}},k),React.createElement(_reactNative.View,null,b&&!0!==f?React.createElement(_Icon.default,{name:b,size:j,color:l}):null,f?React.createElement(_reactNative.ActivityIndicator,{size:"small",color:l}):null))},styles=_reactNative.StyleSheet.create({container:{alignItems:"center",justifyContent:"center"}});var _default=(0,_theming.withTheme)(IconButton);exports.default=_default;const SEED_DATA={name:"Icon Button",tag:"IconButton",category:_componentTypes.COMPONENT_TYPES.button,preview_image_url:"{CLOUDINARY_URL}/Button_Icon.png",props:{icon:{label:"Icon Name",description:"Name of icon",editable:!0,required:!1,type:_componentTypes.FORM_TYPES.icon,value:"MaterialIcons/brightness-4"},size:{label:"Icon Size",description:"Size of icon",editable:!0,required:!1,type:_componentTypes.FORM_TYPES.flatArray,value:32,options:[16,24,32]},color:{label:"Color",description:"Color of the icon",type:_componentTypes.FORM_TYPES.color,value:"strong",editable:!0,required:!0},onPress:{label:"Action",description:"Action to execute when icon button pressed",editable:!0,type:_componentTypes.FORM_TYPES.action,value:null}},layout:{width:32,height:32}};exports.SEED_DATA=SEED_DATA;