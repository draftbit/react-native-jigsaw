import { ViewProps, StyleProp, ImageStyle } from "react-native";

interface Props extends ViewProps {
  name: string | number | { uri: string };
  color?: string;
  size: number;
  style?: StyleProp<ImageStyle>;
}

// !!! This file doesn't do anything !!!
// It gets overwritten by the builder's version of Icon
const Icon: React.FC<Props> = ({ _name, _color, _size, _style }) => {
  return null;
};

export default Icon;
