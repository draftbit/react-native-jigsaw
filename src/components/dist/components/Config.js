"use strict";exports.__esModule=!0,exports.default=void 0;var _reactNative=require("react-native"),_expoConstants=_interopRequireDefault(require("expo-constants"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}const getWindowDimensions=()=>{if("web"===_reactNative.Platform.OS)return{windowWidth:375,windowHeight:812};const{width:a,height:b}=_reactNative.Dimensions.get("window");return{windowWidth:a,windowHeight:b}},{windowWidth,windowHeight}=getWindowDimensions(),getFilters=function(a){void 0===a&&(a={});const{width:b,height:c}=a,d=["c_scale","q_auto","dpr_auto"];return b&&d.push("w_"+b),c&&d.push("h_"+c),d.join(",")},buildImageUrl=(a,b)=>{const c=getFilters(a);return["https://res.cloudinary.com/altos/image/upload",c,b+".png"].join("/")};var _default={windowWidth,windowHeight,avatarImageUrl:buildImageUrl({width:60},"Avatar"),avatarImageSize:60,cardImageSize:200,cardImageUrl:"https://res.cloudinary.com/altos/image/upload/w_200,f_auto,c_scale/draftbit/components/Image.png",cardIconSize:16,cardIconBackgroundOpacity:.24,cardIconElevation:1,placeholderImageURL:"https://res.cloudinary.com/altos/image/upload/v1552677596/draftbit/Jigsaw/image-placeholder_1.png",squareImageUrl:buildImageUrl({width:100},"Avatar"),FABSize:40,FABBorderRadius:20,FABFixedHeight:64,cardContainerShortImageAspectRatio:1,rowSingleLineImageSize:24,rowMultiLineImageSize:48,rowSingleLineIconSize:24,rowMultiLineIconSize:16,ratingStarSize:16,headerIconSize:24,buttonIconSize:24,swiperInactiveDotSize:6,swiperActiveDotSize:10,fieldSearchBarFullIconSize:24,stepperButtonSize:40,radioButtonSize:24,topSafeAreaViewHeight:"android"===_reactNative.Platform.OS?_expoConstants.default.statusBarHeight:0};exports.default=_default;