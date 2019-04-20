var config = require('./');
var assets = [
  'js/**/*.js',
];

module.exports = {
  src : assets.map(function(asset) {
    return config.sourceAssets + '/' + asset;
  }),
  dest: config.publicAssets + '/javascripts'
};
