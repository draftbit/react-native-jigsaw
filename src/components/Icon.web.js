import React from "react"
import { KEY, ICON_FAMILIES } from "../core/icons"

function withIcons(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props)

      const iconSets = sessionStorage.getItem(KEY)

      this.state = {
        loading: !iconSets,
        iconSets: iconSets ? JSON.parse(iconSets) : {},
        error: null
      }
    }

    async componentDidMount() {
      if (Object.keys(this.state.iconSets).length) return

      const iconSets = {}
      await Promise.all(
        ICON_FAMILIES.map(async iconFamily => {
          const icons = await fetch(iconFamily.url)
            .then(res => res.json())
            .catch(error => {
              this.setState({ error, loading: false })
            })
          iconSets[iconFamily.name] = {
            icons,
            label: iconFamily.label,
            count: Object.keys(icons).length
          }
        })
      )
      this.setState({ iconSets, loading: false })
      sessionStorage.setItem(KEY, JSON.stringify(iconSets))
    }

    render() {
      return <WrappedComponent {...this.props} {...this.state} />
    }
  }
}

export default withIcons(Icon)

function Icon({ loading, iconSets, name: path, color, size }) {
  if (!path || !iconSets || loading) {
    return null
  }

  const [set, name] = path.split("/")

  const icons = iconSets[set].icons

  return (
    <span
      style={{
        fontFamily: set,
        fontSize: size,
        lineHeight: size + "px",
        color
      }}>
      {String.fromCharCode(icons[name])}
    </span>
  )
}
