import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import {
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  ViewStyle,
  Dimensions,
  ActivityIndicator,
  Text,
} from "react-native";
import { WebView } from "react-native-webview";
import {
  WebViewMessageEvent,
  WebViewSourceHtml,
  WebViewSourceUri,
} from "react-native-webview/lib/WebViewTypes";
import { Camera, PermissionResponse } from "expo-camera";

// Auto-height fix (if this is not present, scrolling on Android does not work)
const injectFirst = `
  window.ReactNativeWebView.postMessage(
    Math.max(document.body.offsetHeight, document.body.scrollHeight)
  );
`;

interface WebViewProps {
  source: WebViewSourceUri | WebViewSourceHtml;
  optimizeVideoChat?: boolean;
  style?: ViewStyle;
}

const NativeWebView: React.FC<WebViewProps> = ({
  source,
  style,
  optimizeVideoChat,
}) => {
  const [height, setHeight] = useState(0);

  const { width } = Dimensions.get("window");

  const [cameraPermissions, setCameraPermissions] =
    useState<null | PermissionResponse>(null);

  const [microphonePermissions, setMicrophonePermissions] =
    useState<null | PermissionResponse>(null);

  const videoChatProps = optimizeVideoChat
    ? {
        allowsInlineMediaPlayback: true,
        domStorageEnabled: true,
        javaScriptEnabled: true,
        mediaCapturePermissionGrantType: "grant", // so iOS uses system settings
        mediaPlaybackRequiresUserAction: false,
        startInLoadingState: true,
      }
    : ({} as Record<string, boolean | string>);

  const onMessage = (event: WebViewMessageEvent) =>
    setHeight(Number(event.nativeEvent.data));

  const getAndSetPermissions = async (
    currentState: null | PermissionResponse,
    setCurrentState: Dispatch<SetStateAction<null | PermissionResponse>>,
    getPermission: () => Promise<PermissionResponse>,
    requestPermission: () => Promise<PermissionResponse>
  ) => {
    const currentPermission = currentState ?? (await getPermission());

    if (currentPermission.granted || !currentPermission.canAskAgain) {
      setCurrentState(currentPermission);
    } else {
      setCurrentState(await requestPermission());
    }
  };

  const getAndSetCameraAndMicrophonePermissions = async () => {
    await getAndSetPermissions(
      cameraPermissions,
      setCameraPermissions,
      Camera.getCameraPermissionsAsync,
      Camera.requestCameraPermissionsAsync
    );

    await getAndSetPermissions(
      microphonePermissions,
      setMicrophonePermissions,
      Camera.getMicrophonePermissionsAsync,
      Camera.requestMicrophonePermissionsAsync
    );
  };

  const selectComponent = () => {
    if (
      !optimizeVideoChat ||
      (cameraPermissions?.granted && microphonePermissions?.granted)
    ) {
      return (
        <WebView
          source={source}
          style={[{ width: optimizeVideoChat ? width : undefined }, style]}
          injectedJavaScript={injectFirst}
          onMessage={onMessage}
          {...videoChatProps}
        />
      );
    }

    if (
      (!cameraPermissions?.granted && cameraPermissions?.canAskAgain) ||
      (!microphonePermissions?.granted && microphonePermissions?.canAskAgain)
    ) {
      return (
        <Button
          title={"Press to enable Audio and/or Video permissions"}
          onPress={getAndSetCameraAndMicrophonePermissions}
        />
      );
    }

    if (
      (cameraPermissions?.status === "denied" &&
        cameraPermissions?.canAskAgain === false) ||
      (microphonePermissions?.status === "denied" &&
        microphonePermissions?.canAskAgain === false)
    ) {
      return (
        <Text>
          {"Set the missing Audio and/or Video permissions in System Settings"}
        </Text>
      );
    }

    return <ActivityIndicator />;
  };

  useEffect(() => {
    if (optimizeVideoChat) getAndSetCameraAndMicrophonePermissions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optimizeVideoChat]);

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        {
          height: style?.height || height,
        },
      ]}
    >
      {selectComponent()}
    </ScrollView>
  );
};

const BrowserWebView: React.FC<WebViewProps> = ({
  source,
  style,
  optimizeVideoChat,
}) => {
  const videoChatProps = optimizeVideoChat
    ? {
        frameBorder: "0",
        allow: "camera; microphone; fullscreen; speaker; display-capture",
      }
    : {};

  const videoChatStyles = optimizeVideoChat
    ? { width: "100%", height: "100%" }
    : {};

  const flatStyles = StyleSheet.flatten([videoChatStyles, style]);
  return React.createElement("iframe", {
    style: flatStyles,
    height: flatStyles?.height,
    width: flatStyles?.width,
    src: (source as WebViewSourceUri)?.uri,
    srcDoc: (source as WebViewSourceHtml)?.html,
    allowFullScreen: true,
    seamless: true,
    ...videoChatProps,
  });
};

export default Platform.select({
  native: NativeWebView,
  default: BrowserWebView,
});

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
