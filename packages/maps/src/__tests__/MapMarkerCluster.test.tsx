import React from "react";
import { Text } from "react-native";
import { render, screen } from "@testing-library/react-native";
import MapMarker from "../components/MapMarker";
import {
  MapMarkerCluster,
  MapMarkerClusterView,
} from "../components/marker-cluster";
import { Marker as MapMarkerComponent } from "../components/react-native-maps";

jest.mock("../components/react-native-maps", () => {
  const React = require("react");

  class MapView extends React.Component {
    render(): React.ReactNode {
      return <>{this.props.children}</>;
    }
  }

  const Marker = (props: any) => {
    return <>{props.children}</>;
  };

  return {
    __esModule: true,
    default: MapView,
    Marker,
  };
});

jest.mock("@teovilla/react-native-web-maps", () => {
  const React = require("react");

  class MarkerClusterer extends React.Component {
    render(): React.ReactNode {
      return (
        <>
          {this.props.renderCluster?.({
            pointCount: React.Children.toArray(this.props.children).length,
            coordinate: { latitude: 0, longitude: 0 },
            expansionZoom: 4,
          })}
          {this.props.children}
        </>
      );
    }
  }

  return {
    MarkerClusterer,
  };
});

beforeEach(() => {
  jest.clearAllMocks();
});

describe("MapMarkerCluster tests", () => {
  test("should render markers provided as children", () => {
    render(
      <MapMarkerCluster>
        <MapMarker latitude={41.741895} longitude={-73.989308} />
        <MapMarker latitude={42.741895} longitude={-73.989308} />
        <MapMarker latitude={43.741895} longitude={-73.989308} />
        <MapMarker latitude={44.741895} longitude={-73.989308} />
      </MapMarkerCluster>
    );

    const renderedMarkers = screen.UNSAFE_queryAllByType(MapMarkerComponent);

    expect(renderedMarkers.length).toBe(4 + 1); //4 clustered markers, cluster itself is also rendered as it's own marker (reasoning behind the +1)
  });

  test("should render default cluster view when none provided", () => {
    render(
      <MapMarkerCluster>
        <MapMarker latitude={41.741895} longitude={-73.989308} />
      </MapMarkerCluster>
    );

    const defaultClusterView = screen.queryByTestId(
      "default-map-marker-cluster-view"
    );

    expect(defaultClusterView).toBeTruthy();
  });

  test("should render custom cluster view when provided", () => {
    render(
      <MapMarkerCluster>
        <MapMarkerClusterView
          renderItem={({ markerCount }) => (
            <Text testID="custom-cluster-view">{markerCount}</Text>
          )}
        />
        <MapMarker latitude={41.741895} longitude={-73.989308} />
        <MapMarker latitude={42.741895} longitude={-73.989308} />
        <MapMarker latitude={43.741895} longitude={-73.989308} />
      </MapMarkerCluster>
    );

    const customClusterView = screen.queryByTestId("custom-cluster-view");

    expect(customClusterView).toBeTruthy();
    expect(customClusterView?.props).toMatchSnapshot();
  });
});
