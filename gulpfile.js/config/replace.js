var config = require('./');

module.exports = {
  src: 'index.html',
  // Change to the correct sharepoint folder
  // e.g. imagesCss: ['../../assets/images/', ''],
  imagesCss: ['../../assets/images/', ''],
  imagesCss: ['../images/', ''],
  imagesHtml: {
    string: 'assets/images/',
    replacement: '', // replacement: ''
  },
};
