const getFilters = (options = {}) => {
  const { width, height } = options;
  const filters = ["c_scale", "q_auto", "dpr_auto"];

  if (width) filters.push(`w_${width}`);
  if (height) filters.push(`h_${height}`);

  return filters.join(",");
};

const buildImageUrl = (options, name) => {
  const filters = getFilters(options);
  return [
    "https://res.cloudinary.com/altos/image/upload",
    filters,
    `${name}.png`
  ].join("/");
};

export default {
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
  squareImageUrl: buildImageUrl({ width: 100 }, "Avatar"),
  FABSize: 40,
  FABBorderRadius: 20,
  FABFixedHeight: 64,
  cardOneThirdWidth: "33.3%",
  cardTwoThirdsWidth: "66.6%",
  cardFullWidth: "100%",
  rowSingleLineImageSize: 24,
  rowMultiLineImageSize: 48,
  rowSingleLineIconSize: 24,
  rowMultiLineIconSize: 16,
  headerIconSize: 24,
  buttonIconSize: 24
};
