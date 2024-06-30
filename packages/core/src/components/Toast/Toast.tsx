import React from "react";
import { View, Text } from "react-native";
import theme from "../../styles/DefaultTheme";

type Props = {
  theme: typeof theme;
};

const Toast: React.FC<React.PropsWithChildren<Props>> = ({}) => {
  return (
    <View>
      <Text>Test</Text>
    </View>
  );
};

export default Toast;
