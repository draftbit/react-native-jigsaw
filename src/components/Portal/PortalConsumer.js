/* eslint-disable react/no-unused-prop-types */

import * as React from "react"

export default class PortalConsumer extends React.Component {
  componentDidMount() {
    this._key = this.props.manager.mount(this.props.children)
  }

  componentDidUpdate() {
    this.props.manager.update(this._key, this.props.children)
  }

  componentWillUnmount() {
    this.props.manager.unmount(this._key)
  }

  render() {
    return null
  }
}
