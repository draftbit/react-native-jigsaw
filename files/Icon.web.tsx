// @ts-nocheck
import { ViewProps, StyleProp, ImageStyle } from "react-native";

type Props = {
  name: string | number | { uri: string };
  color?: string;
  size: number;
  style?: StyleProp<ImageStyle>;
} & ViewProps;

const Icon: React.FC<Props> = ({ _name, _color, _size, _style }) => {
  return null;
};

export default Icon;
