"use strict";exports.__esModule=!0,exports.default=exports.PortalContext=void 0;var React=_interopRequireWildcard(require("react")),_reactNative=require("react-native"),_PortalManager=_interopRequireDefault(require("./PortalManager")),_createReactContext=_interopRequireDefault(require("create-react-context"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _interopRequireWildcard(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,c):{};d.get||d.set?Object.defineProperty(b,c,d):b[c]=a[c]}return b.default=a,b}const PortalContext=(0,_createReactContext.default)(null);/**
 * Portal host renders all of its children `Portal` elements.
 * For example, you can wrap a screen in `Portal.Host` to render items above the screen.
 * If you're using the `Provider` component, it already includes `Portal.Host`.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Text } from 'react-native';
 * import { Portal } from '@draftbit/ui';
 *
 * export default class MyComponent extends React.Component {
 *   render() {
 *     return (
 *       <Portal.Host>
 *         <Text>Content of the app</Text>
 *       </Portal.Host>
 *     );
 *   }
 * }
 * ```
 *
 * Here any `Portal` elements under `<App />` are rendered alongside `<App />` and will appear above `<App />` like a `Modal`.
 */exports.PortalContext=PortalContext;class PortalHost extends React.Component{constructor(){super(...arguments),this._setManager=a=>{this._manager=a},this._mount=a=>{const b=this._nextKey++;return this._manager?this._manager.mount(b,a):this._queue.push({type:"mount",key:b,children:a}),b},this._update=(a,b)=>{if(this._manager)this._manager.update(a,b);else{const c={type:"mount",key:a,children:b},d=this._queue.findIndex(b=>"mount"===b.type||"update"===b.type&&b.key===a);-1<d?this._queue[d]=c:this._queue.push(c)}},this._unmount=a=>{this._manager?this._manager.unmount(a):this._queue.push({type:"unmount",key:a})},this._nextKey=0,this._queue=[]}componentDidMount(){const a=this._manager,b=this._queue;for(;b.length&&a;){const c=b.pop();// eslint-disable-next-line default-case
switch(c.type){case"mount":a.mount(c.key,c.children);break;case"update":a.update(c.key,c.children);break;case"unmount":a.unmount(c.key);}}}render(){return React.createElement(PortalContext.Provider,{value:{mount:this._mount,update:this._update,unmount:this._unmount}},React.createElement(_reactNative.View,{style:styles.container,collapsable:!1},this.props.children),React.createElement(_PortalManager.default,{ref:this._setManager}))}}exports.default=PortalHost,PortalHost.displayName="Portal.Host";const styles=_reactNative.StyleSheet.create({container:{flex:1}});