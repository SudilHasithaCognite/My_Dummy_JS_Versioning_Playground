/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: "node-cjs",
  ignoredRouteFiles: ["**/.*"],
  serverDependenciesToBundle: [
    "@my-dummy-js-versioning-playground/header",
    "@my-dummy-js-versioning-playground/footer"
  ],
  future: {
    v2_errorBoundary: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true
  }
};