"use strict";exports.__esModule=!0,exports.default=void 0;var React=_interopRequireWildcard(require("react")),_PortalConsumer=_interopRequireDefault(require("./PortalConsumer")),_PortalHost=_interopRequireWildcard(require("./PortalHost")),_theming=require("../../core/theming");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _interopRequireWildcard(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,c):{};d.get||d.set?Object.defineProperty(b,c,d):b[c]=a[c]}return b.default=a,b}/* eslint-disable react/no-unused-prop-types */ /**
 * Portal allows to render a component at a different place in the parent tree.
 * You can use it to render content which should appear above other elements, similar to `Modal`.
 * It requires a [`Portal.Host`](portal-host.html) component to be rendered somewhere in the parent tree.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Portal, Text } from '@draftbit/ui';
 *
 * export default class MyComponent extends React.Component {
 *   render() {
 *     const { visible } = this.state;
 *     return (
 *       <Portal>
 *         <Text>This is rendered at a different place</Text>
 *       </Portal>
 *     );
 *   }
 * }
 * ```
 */class Portal extends React.Component{// @component ./PortalHost.js
render(){const{children:a,theme:b}=this.props;return React.createElement(_PortalHost.PortalContext.Consumer,null,c=>React.createElement(_PortalConsumer.default,{manager:c},React.createElement(_theming.ThemeProvider,{theme:b},a)))}}Portal.Host=_PortalHost.default;var _default=(0,_theming.withTheme)(Portal);exports.default=_default;