import React from "react";
import { useJsApiLoader } from "./ReactGoogleMaps";

interface MapScriptLoaderProps {
  apiKey: string;
}

//Simple wrapper to loader Maps script using hook
const MapScriptLoader: React.FC<
  React.PropsWithChildren<MapScriptLoaderProps>
> = ({ children, apiKey }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });

  return <>{isLoaded ? children : null}</>;
};

export default MapScriptLoader;
