import { Dimensions, Platform } from "react-native"
import { Constants } from "expo"

const getWindowDimensions = () => {
  if (Platform.OS === "web") {
    return {
      windowWidth: 375,
      windowHeight: 812
    }
  }

  const { width: windowWidth, height: windowHeight } = Dimensions.get("window")
  return {
    windowWidth,
    windowHeight
  }
}

const { windowWidth, windowHeight } = getWindowDimensions()

const getFilters = (options = {}) => {
  const { width, height } = options
  const filters = ["c_scale", "q_auto", "dpr_auto"]

  if (width) filters.push(`w_${width}`)
  if (height) filters.push(`h_${height}`)

  return filters.join(",")
}

const buildImageUrl = (options, name) => {
  const filters = getFilters(options)
  return ["https://res.cloudinary.com/altos/image/upload", filters, `${name}.png`].join("/")
}

export default {
  windowWidth,
  windowHeight,
  avatarImageUrl: buildImageUrl(
    {
      width: 60
    },
    "Avatar"
  ),
  avatarImageSize: 60,
  cardImageSize: 200,
  cardImageUrl:
    "https://res.cloudinary.com/altos/image/upload/w_200,f_auto,c_scale/draftbit/components/Image.png",
  cardIconSize: 16,
  cardIconBackgroundOpacity: 0.24,
  cardIconElevation: 1,
  placeholderImageURL:
    "https://res.cloudinary.com/altos/image/upload/v1552677596/draftbit/Jigsaw/image-placeholder_1.png",
  squareImageUrl: buildImageUrl({ width: 100 }, "Avatar"),
  FABSize: 40,
  FABBorderRadius: 20,
  FABFixedHeight: 64,
  cardContainerShortImageAspectRatio: 1,
  rowSingleLineImageSize: 24,
  rowMultiLineImageSize: 48,
  rowSingleLineIconSize: 24,
  rowMultiLineIconSize: 16,
  ratingStarSize: 16,
  headerIconSize: 24,
  buttonIconSize: 24,
  swiperInactiveDotSize: 6,
  swiperActiveDotSize: 10,
  fieldSearchBarFullIconSize: 24,
  stepperButtonSize: 40,
  radioButtonSize: 24,
  topSafeAreaViewHeight: Platform.OS === "android" ? Constants.statusBarHeight : 0
}
