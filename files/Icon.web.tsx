import { ViewProps, StyleProp, ImageStyle } from "react-native";

interface Props extends ViewProps {
  name: string | number | { uri: string };
  color?: string;
  size: number;
  style?: StyleProp<ImageStyle>;
}

const Icon: React.FC<Props> = ({ name, color, size, style, ...rest }) => {
  console.log({ name, color, size, style, rest });
  return null;
};

export default Icon;
