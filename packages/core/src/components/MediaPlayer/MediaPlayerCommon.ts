import { AVPlaybackSource, AVPlaybackStatus } from "expo-av";
import * as FileSystem from "expo-file-system";
import { v4 as uuid } from "uuid";
import { Platform } from "react-native";
import React from "react";

export interface MediaPlayerStatus {
  isPlaying: boolean;
  isLoading: boolean;
  isBuffering: boolean;
  currentPositionMillis: number;
  durationMillis: number;
  bufferedDurationMillis: number;
  isError: boolean;
  error?: string;
}

export interface MediaPlayerRef {
  seekToPosition: (positionMillis: number) => void;
  togglePlayback: () => void;
  pause: () => void;
  play: () => void;
}

export interface MediaPlayerProps {
  onPlaybackStatusUpdate?: (status: MediaPlayerStatus) => void;
  onPlaybackFinish?: () => void;
  source: AVPlaybackSource;
}

export function mapToMediaPlayerStatus(
  status: AVPlaybackStatus
): MediaPlayerStatus {
  if (status.isLoaded) {
    return {
      isPlaying: status.isPlaying,
      isLoading: false,
      isBuffering: status.isBuffering,
      currentPositionMillis: status.positionMillis || 0,
      durationMillis: status.durationMillis || 0,
      bufferedDurationMillis: status.playableDurationMillis || 0,
      isError: false,
    };
  }

  return {
    isPlaying: false,
    isLoading: false,
    isBuffering: false,
    currentPositionMillis: 0,
    durationMillis: 0,
    bufferedDurationMillis: 0,
    isError: true,
    error: status.error,
  };
}

const URL_REGEX =
  /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

/**
 * Base64 strings are not playable on iOS and needs to be saved to a file before playing
 */
export async function normalizeBase64Source(
  source: AVPlaybackSource,
  type: "audio" | "video"
): Promise<AVPlaybackSource> {
  const uri: string | undefined = (source as any)?.uri;

  if (Platform.OS === "ios" && uri && !uri.match(URL_REGEX)) {
    const defaultMimeType = type === "audio" ? "wav" : "mp4";
    const mimeType = uri.startsWith(`data:${type}/`)
      ? uri.substring(`data:${type}/`.length, uri.indexOf(";")) //Ex: extract 'mp4' from 'data:video/mp4;base64,....'
      : defaultMimeType;

    const fileName = `${
      FileSystem.cacheDirectory
    }${uuid()}.${mimeType.toLowerCase()}`;

    await FileSystem.writeAsStringAsync(
      fileName,
      uri.includes("base64,")
        ? uri.substring(uri.indexOf("base64,") + "base64,".length) // skip header portion of base64 string
        : uri,
      {
        encoding: "base64",
      }
    );
    return { uri: fileName };
  }

  return source;
}

// The source provided into the AudioPlayer can be of type {uri: "some uri"}
// In the case that this object is created inline, each rerender provides a new source object because a new object is initialized everytime
// This creates an issue with being a useEffect dependency
//
// This creates variants of useEffect that checks deep equality of 'uri' to determine if dependency changed or not
// Follows: https://stackoverflow.com/a/54096391
function sourceDeepCompareEquals(a: any, b: any) {
  if (a?.uri && b?.uri) {
    return a.uri === b.uri;
  }
  return a === b;
}

function useSourceDeepCompareMemoize(value: any) {
  const ref = React.useRef();
  if (!sourceDeepCompareEquals(value, ref.current)) {
    ref.current = value;
  }
  return ref.current;
}

export function useSourceDeepCompareEffect(
  callback: React.EffectCallback,
  dependencies: React.DependencyList
) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(callback, dependencies.map(useSourceDeepCompareMemoize));
}
