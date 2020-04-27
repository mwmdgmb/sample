const withCSS = require("@zeit/next-css");
const withSCSS = require("@zeit/next-sass");
const withIMAGE = require("next-images");

module.exports = withIMAGE(withCSS(withSCSS()));
