// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/haroonrashid/Documents/new/crispy-enigma/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/haroonrashid/Documents/new/crispy-enigma/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/haroonrashid/Documents/new/crispy-enigma/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/haroonrashid/Documents/new/crispy-enigma/.cache/json/layout-index.json"),
  "404.json": require("/Users/haroonrashid/Documents/new/crispy-enigma/.cache/json/404.json"),
  "layout-index.json": require("/Users/haroonrashid/Documents/new/crispy-enigma/.cache/json/layout-index.json"),
  "index.json": require("/Users/haroonrashid/Documents/new/crispy-enigma/.cache/json/index.json"),
  "layout-index.json": require("/Users/haroonrashid/Documents/new/crispy-enigma/.cache/json/layout-index.json"),
  "404-html.json": require("/Users/haroonrashid/Documents/new/crispy-enigma/.cache/json/404-html.json")
}