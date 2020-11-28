module.exports = {
  devServer: {
    open: true,
    port: 3001,
    disableHostCheck: true,
  },
  pwa: {
    workboxOptions: {
      exclude: [/\.map$/, /_redirects/],
    },
  },
};
