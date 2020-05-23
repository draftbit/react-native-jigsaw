import React from "react";
import { KEY, ICON_FAMILIES } from "../core/icons";

function withIcons(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);

      const iconSets = window.sessionStorage.getItem(KEY);

      this.state = {
        loading: !iconSets,
        iconSets: iconSets ? JSON.parse(iconSets) : {},
        error: null,
      };
    }

    componentDidMount() {
      if (Object.keys(this.state.iconSets).length) return;
      this.loadIconSet();
    }

    loadIconSet = async () => {
      const iconSets = {};
      await Promise.all(
        ICON_FAMILIES.map(async (iconFamily) => {
          const icons = await fetch(iconFamily.url)
            .then((res) => res.json())
            .catch((error) => {
              this.setState({ error, loading: false });
            });
          iconSets[iconFamily.name] = {
            icons,
            label: iconFamily.label,
            count: Object.keys(icons).length,
          };
        })
      );
      this.setState({ iconSets, loading: false });
      window.sessionStorage.setItem(KEY, JSON.stringify(iconSets));
    };

    render() {
      return <WrappedComponent {...this.props} {...this.state} />;
    }
  };
}

export default withIcons(Icon);

function Icon({ loading, iconSets, name: path, color, size }) {
  if (!path || !iconSets || loading) {
    return null;
  }

  // Originally, only MaterialIcons were supported, so not all legacy
  // apps in draftbit define icons with fully-qualified icon names.
  let set = "MaterialIcons";
  let name = path;

  if (path.includes("/")) {
    [set, name] = path.split("/");
  }

  const icons = iconSets[set] && iconSets[set].icons;

  if (!icons) {
    return null;
  }

  return (
    <span
      style={{
        fontFamily: set,
        fontSize: size,
        lineHeight: size + "px",
        color,
      }}
    >
      {String.fromCharCode(icons[name])}
    </span>
  );
}
