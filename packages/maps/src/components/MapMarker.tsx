import * as React from "react";
import {
  Image,
  ImageSourcePropType,
  View,
  StyleSheet,
  Text,
} from "react-native";
import { Marker as MapMarkerComponent } from "./react-native-maps";
import type {
  MapMarkerProps as MapMarkerComponentProps,
  MapMarker as MapMarkerRefType,
} from "react-native-maps";
import MapCallout, { renderCallout } from "./MapCallout";
import { flattenReactFragments } from "@draftbit/ui";

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
 * See: https://github.com/teovillanueva/react-native-web-maps/blob/5f3d0ec7c24f789c3df30c1d6d7223e638ff5868/packages/react-native-web-maps/src/components/marker-clusterer/marker-clusterer.tsx#L18
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
  key?: React.Key,
  ref?: React.Ref<MapMarkerRefType>,
  onMarkerPress?: () => void
) {
  const childrenArray = flattenReactFragments(
    React.Children.toArray(children) as React.ReactElement[]
  );

  const calloutChildren = childrenArray.filter(
    (child) => child.type === MapCallout
  );

  const nonCalloutChildren = childrenArray.filter(
    (child) => child.type !== MapCallout
  );

  // Add default callout for title/description
  if (calloutChildren.length === 0 && (title || description)) {
    calloutChildren.push(
      <MapCallout showTooltip>
        <View style={styles.defaultCalloutContainer}>
          {title && <Text style={styles.defaultCalloutTitle}>{title}</Text>}
          {description && (
            <Text style={styles.defaultCalloutDescription}>{description}</Text>
          )}
        </View>
      </MapCallout>
    );
  }

  return (
    <MapMarkerComponent
      ref={ref}
      key={key}
      coordinate={{
        latitude,
        longitude,
      }}
      onPress={(event) => {
        onMarkerPress?.();
        const coordinate = event.nativeEvent.coordinate;
        onPress?.(coordinate.latitude, coordinate.longitude);
      }}
      {...rest}
    >
      {nonCalloutChildren}

      {pinImage && (
        <Image
          testID="map-marker-pin-image"
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

const styles = StyleSheet.create({
  defaultCalloutContainer: {
    flex: 1,
  },
  defaultCalloutTitle: {
    fontWeight: "600",
    textAlign: "center",
    maxWidth: 250,
  },
  defaultCalloutDescription: {
    maxWidth: 250,
  },
});

export default MapMarker;
