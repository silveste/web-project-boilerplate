module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        debug: false,
        useBuiltIns: "usage",
        corejs: 3,
      }
    ]
  ]
}
