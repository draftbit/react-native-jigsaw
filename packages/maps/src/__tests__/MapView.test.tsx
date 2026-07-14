import React from "react";
import { act, render, screen } from "@testing-library/react-native";
import MapView from "../components/MapView";
import MapMarker from "../components/MapMarker";
import { MapMarkerCluster } from "../components/marker-cluster";

const mockAnimateCamera = jest.fn();

// The mocks below render host `View`s carrying their props, so that the
// rendered markers/clusters can be queried by testID.
jest.mock("../components/react-native-maps", () => {
  const React = require("react");
  const { View } = require("react-native");

  class MapView extends React.Component {
    render(): React.ReactNode {
      return <>{this.props.children}</>;
    }

    animateCamera = mockAnimateCamera;
  }

  class Marker extends React.Component {
    render(): React.ReactNode {
      return <View {...this.props} testID="map-marker" />;
    }
  }

  return {
    __esModule: true,
    default: MapView,
    Marker,
  };
});

jest.mock("@teovilla/react-native-web-maps", () => {
  const React = require("react");
  const { View } = require("react-native");

  const MarkerClusterer = (props: any) => {
    return <View {...props} testID="marker-clusterer" />;
  };

  return {
    MarkerClusterer,
  };
});

beforeEach(() => {
  jest.clearAllMocks();
});

describe("MapView tests", () => {
  test("should animateToLocation update map location", async () => {
    const ref = React.createRef<MapView<any>>();

    await render(<MapView ref={ref} apiKey="" />);

    await act(() => {
      ref.current?.animateToLocation({
        latitude: 40.741895,
        longitude: -73.989308,
        zoom: 10,
      });
    });

    expect(mockAnimateCamera.mock.lastCall).toMatchSnapshot();
  });

  test("should render markers provided as children", async () => {
    await render(
      <MapView apiKey="">
        <MapMarker key={1} latitude={41.741895} longitude={-73.989308} />
        <MapMarker key={2} latitude={42.741895} longitude={-73.989308} />
        <MapMarker key={3} latitude={43.741895} longitude={-73.989308} />
        <MapMarker key={4} latitude={44.741895} longitude={-73.989308} />
      </MapView>
    );

    const renderedMarkers = screen
      .queryAllByTestId("map-marker")
      .map((marker) => marker.props.coordinate);

    expect(renderedMarkers).toMatchSnapshot();
  });

  test("should render markers provided as data using renderItem", async () => {
    const markers = [
      { latitude: 41.741895, longitude: -73.989308 },
      { latitude: 42.741895, longitude: -73.989308 },
      { latitude: 43.741895, longitude: -73.989308 },
      { latitude: 44.741895, longitude: -73.989308 },
    ];

    await render(
      <MapView
        markersData={markers}
        renderItem={({ item }) => (
          <MapMarker latitude={item.latitude} longitude={item.longitude} />
        )}
        apiKey=""
      />
    );

    const renderedMarkers = screen
      .queryAllByTestId("map-marker")
      .map((marker) => marker.props.coordinate);

    expect(renderedMarkers).toMatchSnapshot();
  });

  test("should render manually created marker clusters", async () => {
    await render(
      <MapView apiKey="">
        <MapMarkerCluster>
          <MapMarker latitude={41.741895} longitude={-73.989308} />
          <MapMarker latitude={42.741895} longitude={-73.989308} />
        </MapMarkerCluster>

        <MapMarkerCluster>
          <MapMarker latitude={43.741895} longitude={-73.989308} />
          <MapMarker latitude={44.741895} longitude={-73.989308} />
        </MapMarkerCluster>
      </MapView>
    );

    const renderedClusters = screen.queryAllByTestId("marker-clusterer");

    expect(renderedClusters.length).toMatchSnapshot();
  });

  test("should automatically create clusters from markers when autoClusterMarkers is true", async () => {
    await render(
      <MapView apiKey="" autoClusterMarkers>
        <MapMarker latitude={40.741895} longitude={-73.989308} />
        <MapMarker latitude={40.741895} longitude={-73.979308} />

        <MapMarker latitude={43.741895} longitude={-73.989308} />
        <MapMarker latitude={43.741895} longitude={-73.979308} />
      </MapView>
    );

    const renderedClusters = screen.queryAllByTestId("marker-clusterer");

    expect(renderedClusters.length).toMatchSnapshot();
  });

  test("should MapMarker render when wrapped in fragment", async () => {
    await render(
      <MapView apiKey="">
        <>
          <MapMarker latitude={40.741895} longitude={-73.989308} />
        </>
      </MapView>
    );

    const renderedMarkers = screen
      .queryAllByTestId("map-marker")
      .map((marker) => marker.props.coordinate);

    expect(renderedMarkers.length).toMatchSnapshot();
  });

  test("should MapMarkerCluster render when wrapped in fragment", async () => {
    await render(
      <MapView apiKey="">
        <>
          <MapMarkerCluster>
            <MapMarker latitude={41.741895} longitude={-73.989308} />
            <MapMarker latitude={42.741895} longitude={-73.989308} />
          </MapMarkerCluster>
        </>
      </MapView>
    );

    const renderedClusters = screen.queryAllByTestId("marker-clusterer");

    expect(renderedClusters.length).toMatchSnapshot();
  });
});
