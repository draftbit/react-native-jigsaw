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
  squareImageUrl: buildImageUrl({ width: 100 }, "Avatar"),
  cardOneThirdWidth: "33.3%",
  cardTwoThirdsWidth: "66.6%",
  cardFullWidth: "100%",
  rowImageSize: 24,
  rowIconSize: 24
};
