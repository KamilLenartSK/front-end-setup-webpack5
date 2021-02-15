function loadImages() {
  return {
    test: /.(jpg|jpeg|png|gif|webp|svg)$/,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "[path][name]-[hash:8].[ext]",
          publicPath: "/assets/images/",
          outputPath: "/dist/assets/images",
        },
      },
    ],
  };
}
module.exports = loadImages;
