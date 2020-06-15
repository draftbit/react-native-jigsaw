"use strict";exports.__esModule=!0,exports.SEED_DATA=exports.default=void 0;var React=_interopRequireWildcard(require("react")),_reactNative=require("react-native"),_theming=require("../core/theming"),_componentTypes=require("../core/component-types"),_Icon=_interopRequireDefault(require("./Icon")),_Config=_interopRequireDefault(require("./Config"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _interopRequireWildcard(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,c):{};d.get||d.set?Object.defineProperty(b,c,d):b[c]=a[c]}return b.default=a,b}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}class FieldSearchBarFull extends React.Component{constructor(){super(...arguments),this.state={focused:!1},this.clearText=()=>{this.setState({value:""})},this.onBlur=()=>{this.setState({focused:!1})},this.onChange=a=>{this.props.onChange&&this.props.onChange(a)},this.onFocus=()=>{this.setState({focused:!0})},this.onSubmit=()=>{this.props.onSubmit&&this.props.onSubmit()}}render(){const{icon:a,placeholder:b,onSubmit:c,style:d,theme:{colors:g,spacing:h,typography:i},onChange:e,value:f}=this.props,{focused:j}=this.state,k=i.body2,{lineHeight:l}=k,m=_objectWithoutProperties(k,["lineHeight"]);return React.createElement(_reactNative.View,{style:[{padding:h.large},styles.container,d]},React.createElement(_Icon.default,{name:a,size:_Config.default.fieldSearchBarFullIconSize,color:j?g.primary:g.light}),React.createElement(_reactNative.TextInput,{clearButtonMode:"while-editing",placeholder:b,value:f,onBlur:this.onBlur,onFocus:this.onFocus,onChange:e,onSubmitEditing:this.onSubmit,placeholderTextColor:g.light,style:[m,{color:g.medium,marginLeft:h.medium,flex:1,justifyContent:"center"}]}))}}FieldSearchBarFull.defaultProps={icon:"search"};const styles=_reactNative.StyleSheet.create({container:{flexDirection:"row",alignItems:"center"}});var _default=(0,_theming.withTheme)(FieldSearchBarFull);exports.default=_default;const SEED_DATA=[{name:"Search Bar",tag:"FieldSearchBarFull",description:"A search bar with accompanying search icon and clear button.",category:_componentTypes.COMPONENT_TYPES.field,preview_image_url:"{CLOUDINARY_URL}/Field_SearchBar_Full.png",supports_list_render:!1,props:{icon:{label:"Icon",description:"Left icon to display",type:_componentTypes.FORM_TYPES.icon,value:null,editable:!0,required:!1},placeholder:{label:"Placeholder",description:"Input placeholder text",type:_componentTypes.FORM_TYPES.string,value:"Type something...",editable:!0,required:!1},onSubmit:{label:"Submit action",description:"Action to execute on submission",editable:!0,type:_componentTypes.FORM_TYPES.action,value:null},fieldName:_componentTypes.FIELD_NAME},layout:{}}];exports.SEED_DATA=SEED_DATA;