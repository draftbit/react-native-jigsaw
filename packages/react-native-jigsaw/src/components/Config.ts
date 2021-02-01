import { Dimensions, Platform } from "react-native";

const getWindowDimensions = () => {
  const { width, height } = Dimensions.get("window");
  return {
    windowWidth: width,
    windowHeight: height,
  };
};

const { windowWidth, windowHeight } = getWindowDimensions();

const getFilters = (options: { width: number; height: number }) => {
  const { width, height } = options;
  const filters = ["c_scale", "q_auto", "dpr_auto"];

  if (width) filters.push(`w_${width}`);
  if (height) filters.push(`h_${height}`);

  return filters.join(",");
};

const buildImageUrl = (
  options: { width: number; height: number },
  name: string
) => {
  const filters = getFilters(options);
  return [
    "https://res.cloudinary.com/altos/image/upload",
    filters,
    `${name}.png`,
  ].join("/");
};

const getExtension = () => {
  return Platform.OS === "web" ? ".svg" : ".png";
};

export default {
  windowWidth,
  windowHeight,
  avatarImageUrl: buildImageUrl(
    {
      width: 60,
      height: 60,
    },
    "Avatar"
  ),
  avatarImageSize: 60,
  cardImageSize: 200,
  cardImageUrl:
    "https://static.draftbit.com/images/placeholder-image" + getExtension(),
  cardIconSize: 16,
  cardIconBackgroundOpacity: 0.24,
  cardIconElevation: 1,
  placeholderImageURL:
    "https://static.draftbit.com/images/placeholder-image" + getExtension(),
  getPlaceholderImageUrl: (size: { width: number; height: number }) =>
    buildImageUrl(
      { width: size.width, height: size.height },
      "image-placeholder_1"
    ),
  squareImageUrl: buildImageUrl({ width: 100, height: 100 }, "Avatar"),
  FABSize: 40,
  FABBorderRadius: 20,
  FABFixedHeight: 64,
  cardContainerShortImageAspectRatio: 1,
  rowSingleLineImageSize: 24,
  rowMultiLineImageSize: 48,
  rowSingleLineIconSize: 24,
  rowMultiLineIconSize: 16,
  headerIconSize: 24,
  buttonIconSize: 24,
  swiperInactiveDotSize: 6,
  swiperActiveDotSize: 10,
  fieldSearchBarFullIconSize: 24,
  stepperButtonSize: 40,
  radioButtonSize: 24,
  topSafeAreaViewHeight: 0,
  // topSafeAreaViewHeight: Platform.OS === "android" ? Constants.statusBarHeight : 0
};
