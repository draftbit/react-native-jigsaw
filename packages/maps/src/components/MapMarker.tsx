import * as React from "react";
import {
  Image,
  ImageSourcePropType,
  View,
  StyleSheet,
  Text,
} from "react-native";
import { Marker as MapMarkerComponent } from "./react-native-maps";
import type { MapMarkerProps as MapMarkerComponentProps } from "react-native-maps";
import MapCallout, { renderCallout } from "./MapCallout";

export interface MapMarkerProps
  extends Omit<MapMarkerComponentProps, "onPress" | "coordinate"> {
  latitude: number;
  longitude: number;
  pinImage?: string | ImageSourcePropType;
  pinImageSize?: number;
  onPress?: (latitude: number, longitude: number) => void;
}

/**
 * Renders nothing, serves as placeholder for props
 * Rendering exposed as function to avoid having an intermediary component that changes the type
 *
 * This is done because the underlying package has logic dependant on the type of child
 */
const MapMarker: React.FC<React.PropsWithChildren<MapMarkerProps>> = () => {
  return null;
};

export function renderMarker(
  {
    latitude,
    longitude,
    pinImage,
    pinImageSize = 50,
    onPress,
    children,
    title,
    description,
    ...rest
  }: MapMarkerProps,
  key: React.Key
) {
  const childrenArray = React.Children.toArray(children);

  const calloutChildren = childrenArray.filter(
    (child) => (child as React.ReactElement).type === MapCallout
  );

  const nonCalloutChildren = childrenArray.filter(
    (child) => (child as React.ReactElement).type !== MapCallout
  );

  // Add default callout for title/description
  if (calloutChildren.length === 0 && (title || description)) {
    calloutChildren.push(
      <MapCallout showTooltip>
        <View>
          {title && <Text style={style.title}>{title}</Text>}
          {description && <Text style={style.description}>{description}</Text>}
        </View>
      </MapCallout>
    );
  }

  return (
    <MapMarkerComponent
      key={key}
      coordinate={{
        latitude,
        longitude,
      }}
      onPress={(event) => {
        const coordinate = event.nativeEvent.coordinate;
        onPress?.(coordinate.latitude, coordinate.longitude);
      }}
      {...rest}
    >
      {nonCalloutChildren}

      {pinImage && (
        <Image
          source={typeof pinImage === "string" ? { uri: pinImage } : pinImage}
          style={{
            height: pinImageSize,
            width: pinImageSize,
            resizeMode: "contain",
          }}
        />
      )}

      {calloutChildren.map((callout, index) =>
        renderCallout((callout as React.ReactElement).props, index)
      )}
    </MapMarkerComponent>
  );
}

const style = StyleSheet.create({
  title: {
    fontWeight: "600",
    textAlign: "center",
  },
  description: {
    textAlign: "center",
  },
});

export default MapMarker;
