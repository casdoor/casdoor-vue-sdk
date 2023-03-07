module.exports = {
  presets: ["@babel/preset-env"],
  "plugins": [
    ["@babel/plugin-transform-runtime"],
    [
      "module-resolver",
      {
        "alias": {
          "^@/(.+)": "./src/\\1"
        }
      }
    ]
  ]
}
