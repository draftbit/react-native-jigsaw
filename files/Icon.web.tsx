import { ViewProps, StyleProp, ImageStyle } from "react-native";

interface Props extends ViewProps {
  name: string | number | { uri: string };
  color?: string;
  size: number;
  style?: StyleProp<ImageStyle>;
}

// !!! This file doesn't do anything !!!
// It gets overwritten by the builder's version of Icon
const Icon: React.FC<Props> = ({ name, color, size, style }) => {
  console.log({ name, color, size, style });
  return null;
};

export default Icon;
