// eslint-disable-next-line
const blacklist = require('metro-config/src/defaults/blacklist');

module.exports = {
  resolver: {
    blacklistRE: blacklist([
      /node_modules\/.*\/node_modules\/react-native\/.*/, // Avoid duplicate version react-native
    ]),
  },
};
