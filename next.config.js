const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")

module.exports = withStoreConfig({
  features: store.features,
  reactStrictMode: true,
  images: {
    domains: [
      "medusa-public-images.s3.eu-west-1.amazonaws.com",
      "localhost",
      "medusa-b2b.s3.ap-southeast-1.amazonaws.com",
    ],
  },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))
