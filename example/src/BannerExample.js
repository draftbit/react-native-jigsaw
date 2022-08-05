import * as React from "react";
import { Banner } from "@draftbit/ui";

export default function BannerExample() {
  return (
    <Banner
      content="Your device has lost connection to the internet. This app may not function as expected until you reconnect."
      dismissable={true}
      initiallyVisible={true}
      icon="MaterialCommunityIcons/cloud-off-outline"
    />
  );
}
