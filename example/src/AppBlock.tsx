import React, { ReactNode } from "react";
import { View, ViewStyle } from "react-native";

type Props = {
  row?: boolean;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  children: ReactNode;
};

export default function (props: Props) {
  const {
    row,
    mt = 0,
    mb = 0,
    ml = 0,
    mr = 0,
    pt = 0,
    pb = 0,
    pl = 0,
    pr = 0,
  } = props;

  const style: ViewStyle = {
    flexDirection: row ? "row" : "column",
    marginLeft: ml,
    marginRight: mr,
    marginTop: mt,
    marginBottom: mb,
    paddingLeft: pl,
    paddingRight: pr,
    paddingTop: pt,
    paddingBottom: pb,
  };

  return <View style={style}>{props.children}</View>;
}
