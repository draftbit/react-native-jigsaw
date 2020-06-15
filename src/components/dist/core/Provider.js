"use strict";exports.__esModule=!0,exports.default=void 0;var React=_interopRequireWildcard(require("react")),_theming=require("./theming"),_Portal=_interopRequireDefault(require("../components/Portal/Portal"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _interopRequireWildcard(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,c):{};d.get||d.set?Object.defineProperty(b,c,d):b[c]=a[c]}return b.default=a,b}/* eslint-disable react/no-unused-prop-types */class Provider extends React.Component{render(){return React.createElement(_Portal.default.Host,null,React.createElement(_theming.ThemeProvider,{theme:this.props.theme},this.props.children))}}exports.default=Provider;