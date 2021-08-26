module.exports = {
  devServer: {
    proxy: {
      "/exam-pass-server": {
        target: "http://192.168.0.142:9000",
      }
    }
  },
};
