const urlPrefix = process.env.URL_PREFIX ? '/'+process.env.URL_PREFIX : '/2022/tsakabe';

// const urlPrefix = '/out';

module.exports = {
  reactStrictMode: true,
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
}
