import React from "react";
import { View } from "react-native";
import { render, screen } from "@testing-library/react-native";
import MapView from "../components/MapView";
import MapMarker from "../components/MapMarker";
import MapCallout from "../components/MapCallout";
import { Callout as MapCalloutComponent } from "../components/react-native-maps";

jest.mock("../components/react-native-maps", () => {
  const React = require("react");

  class MapView extends React.Component {
    render(): React.ReactNode {
      return <>{this.props.children}</>;
    }
  }

  class Marker extends React.Component {
    render(): React.ReactNode {
      return <>{this.props.children}</>;
    }
  }

  const Callout = (props: any) => {
    return <>{props.children}</>;
  };

  return {
    __esModule: true,
    default: MapView,
    Marker,
    Callout,
  };
});

beforeEach(() => {
  jest.clearAllMocks();
});

describe("MapMarker tests", () => {
  test("should render default MapCallout when title and description provided", () => {
    const title = "Title";
    const description = "Some description";

    render(
      <MapView apiKey="">
        <MapMarker
          latitude={43.741895}
          longitude={-73.989308}
          title={title}
          description={description}
        />
      </MapView>
    );

    const callout = screen.UNSAFE_queryByType(MapCalloutComponent);
    const titleText = screen.queryByText(title);
    const descriptionText = screen.queryByText(description);

    expect(callout).toBeTruthy();
    expect(titleText).toBeTruthy();
    expect(descriptionText).toBeTruthy();
  });

  test("should render MapCallout children as a callout", () => {
    render(
      <MapView apiKey="">
        <MapMarker latitude={43.741895} longitude={-73.989308}>
          <MapCallout>
            <View testID="callout-view" />
          </MapCallout>
        </MapMarker>
      </MapView>
    );

    const callout = screen.UNSAFE_queryByType(MapCalloutComponent);
    const calloutView = screen.queryByTestId("callout-view");

    expect(callout).toBeTruthy();
    expect(calloutView).toBeTruthy();
  });

  test("should render non MapCallout children as a custom marker", () => {
    render(
      <MapView apiKey="">
        <MapMarker latitude={43.741895} longitude={-73.989308}>
          <View testID="custom-marker" />
        </MapMarker>
      </MapView>
    );

    const callout = screen.UNSAFE_queryByType(MapCalloutComponent);
    const customMarker = screen.queryByTestId("custom-marker");

    expect(callout).toBeFalsy();
    expect(customMarker).toBeTruthy();
  });

  test("should render Image as a custom marker when pinImage is provided", () => {
    render(
      <MapView apiKey="">
        <MapMarker
          latitude={43.741895}
          longitude={-73.989308}
          pinImage={"image"}
        />
      </MapView>
    );

    const markerPinImage = screen.queryByTestId("map-marker-pin-image");

    expect(markerPinImage).toBeTruthy();
  });

  test("should MapCallout render when wrapped in fragment", () => {
    render(
      <MapView apiKey="">
        <MapMarker latitude={43.741895} longitude={-73.989308}>
          <>
            <MapCallout>
              <View testID="callout-view" />
            </MapCallout>
          </>
        </MapMarker>
      </MapView>
    );

    const calloutView = screen.queryByTestId("callout-view");
    expect(calloutView).toBeTruthy();
  });
});
