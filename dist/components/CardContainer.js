"use strict";exports.__esModule=!0,exports.SEED_DATA=exports.default=void 0;var _react=_interopRequireDefault(require("react")),_reactNative=require("react-native"),_color=_interopRequireDefault(require("color")),_Image=_interopRequireDefault(require("./Image")),_Card=_interopRequireDefault(require("./Card")),_Elevation=_interopRequireDefault(require("./Elevation")),_Icon=_interopRequireDefault(require("./Icon")),_theming=require("../core/theming"),_componentTypes=require("../core/component-types"),_Config=_interopRequireDefault(require("./Config"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(b,!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(b).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}const ICON_CONTAINER_SIZE=2*_Config.default.cardIconSize,ICON_CONTAINER_PADDING=_Config.default.cardIconSize/2-1;class CardContainer extends _react.default.PureComponent{render(){const{image:a,title:b,leftDescription:c,rightDescription:d,textCentered:e,icon:f,aspectRatio:g,elevation:h,numColumns:i,theme:{colors:l,borderRadius:m,typography:n,spacing:o},style:j,onPress:k}=this.props;let p,q;return p=e&&!d?"center":"space-between",2===i?q=n.headline6:3===i?q=n.headline5:void 0,_react.default.createElement(_Card.default,{style:j,onPress:k,numColumns:i},_react.default.createElement(_Elevation.default,{style:{elevation:h,borderRadius:m.global}},_react.default.createElement(_reactNative.View,{style:{borderRadius:m.global,overflow:"hidden",backgroundColor:l.surface}},_react.default.createElement(_Image.default,{style:{aspectRatio:g},source:"string"==typeof a?{uri:a}:a,resizeMode:"cover"}),_react.default.createElement(_reactNative.View,{style:{padding:o.large}},b?_react.default.createElement(_reactNative.View,{style:{flexDirection:"row",alignItems:"center",justifyContent:p}},_react.default.createElement(_reactNative.Text,{numberOfLines:1,style:[q,{color:l.strong}]},b)):null,c?_react.default.createElement(_reactNative.View,{style:{flexDirection:"row",justifyContent:p,alignItems:"center",marginTop:3===i?o.text:o.text/2}},_react.default.createElement(_reactNative.Text,{numberOfLines:1,style:[n.body2,{color:l.medium}]},c),d?_react.default.createElement(_reactNative.Text,{numberOfLines:1,style:[n.subtitle2,{color:l.light}]},d):null):null),f?_react.default.createElement(_Elevation.default,{style:{elevation:_Config.default.cardIconElevation,position:"absolute",top:o.medium,right:o.medium,width:ICON_CONTAINER_SIZE,height:ICON_CONTAINER_SIZE,padding:ICON_CONTAINER_PADDING,borderRadius:ICON_CONTAINER_SIZE,backgroundColor:(0,_color.default)(l.strong).alpha(_Config.default.cardIconBackgroundOpacity).rgb().string()}},_react.default.createElement(_Icon.default,{name:f,size:_Config.default.cardIconSize,color:l.surface})):null)))}}CardContainer.defaultProps={image:_Config.default.cardImageUrl,aspectRatio:1.5,elevation:2,numColumns:3};var _default=(0,_theming.withTheme)(CardContainer);exports.default=_default;const SEED_DATA_PROPS={image:{label:"Image",description:"Image",type:_componentTypes.FORM_TYPES.remoteImage,value:null,editable:!0},title:{label:"Title",description:"Text to display",type:_componentTypes.FORM_TYPES.string,value:"Beautiful West Coast Villa",editable:!0},leftDescription:{label:"Left description",description:"Text to display on the left",type:_componentTypes.FORM_TYPES.string,value:"San Diego",editable:!0},rightDescription:{label:"Right description",description:"Text to display on the right",type:_componentTypes.FORM_TYPES.string,value:"$100",editable:!0},icon:{label:"Icon",description:"Icon to display on the top right",type:_componentTypes.FORM_TYPES.icon,value:"MaterialIcons/cloud",editable:!0},aspectRatio:{label:"Aspect ratio",description:"Aspect ratio of the image",type:_componentTypes.FORM_TYPES.aspectRatio,value:1.5,editable:!0},textCentered:{label:"Text centered",description:"Whether to center the text",type:_componentTypes.FORM_TYPES.boolean,value:!1,editable:!0},elevation:_componentTypes.ELEVATION_TYPE},SEED_DATA=[{name:"Medium Contained Card",tag:"CardContainer",description:"An elevated card with a title and description, that takes up half of its container.",category:_componentTypes.COMPONENT_TYPES.card,preview_image_url:"{CLOUDINARY_URL}/Card_Inline_2col.png",supports_list_render:!0,props:_objectSpread({},SEED_DATA_PROPS,{numColumns:{type:_componentTypes.FORM_TYPES.number,value:2,editable:!1}}),layout:{}},{name:"Large Contained Card",tag:"CardContainer",description:"An elevated card with a title and description, that takes up its full container.",category:_componentTypes.COMPONENT_TYPES.card,preview_image_url:"{CLOUDINARY_URL}/Card_Container_3col.png",supports_list_render:!0,props:_objectSpread({},SEED_DATA_PROPS,{numColumns:{type:_componentTypes.FORM_TYPES.number,value:3,editable:!1}}),layout:{}}];exports.SEED_DATA=SEED_DATA;