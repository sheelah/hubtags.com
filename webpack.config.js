require('babel/register');
var React = require('react');
var getConfig = require('hjs-webpack')
var PublicPage = require('./src/pages/public');
var Layout = require('./src/layout');

module.exports = getConfig({
  in: 'src/app.js',
  out: 'public',
  clearBeforeBuild: true,
  html: function(context) {
    const publicPage = React.renderToString(React.createElement(PublicPage));
    const layoutPage = React.renderToString(React.createElement(Layout, {me: {}}));

    // Set up 200.html file to serve as default page
    return {
      'index.html': context.defaultTemplate({html: publicPage}),
      '200.html': context.defaultTemplate({html: layoutPage})
    }
  }
})
