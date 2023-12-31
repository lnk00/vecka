/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  appDirectory: 'app',
  ignoredRouteFiles: ['**/.*'],
  assetsBuildDirectory: 'public/build',
  serverDependenciesToBundle: [
    'lucia',
    'lucia/middleware',
    'lucia/polyfill/node',
  ],
};
