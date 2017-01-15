/**
 * Created by bianca on 1/13/17.
 */

/**
 * Created by bianca on 1/10/17.
 */


const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser');

const webpack = require('webpack'),
      webpackConfig = require('../config/webpack.config'),
      webpackMiddleware = require('webpack-dev-middleware'),
      webpackHotMiddleware = require('webpack-hot-middleware');

const config = {
  root: path.normalize(__dirname + '/..'),
  port: process.env.PORT || 4444
};

const app = express();

let isProduction = process.env.NODE_ENV === 'production';

// Set view path
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// If it's in dev, run the webpack middleware
if (!isProduction) {
  const compiler = webpack(webpackConfig);

  const middleware = webpackMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);

  app.use(webpackHotMiddleware(compiler));

  app.get('*', (req, res) => {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'build/index.html')));
    res.end();
  });
} else {
  app.use(express.static(path.join(config.root, 'build')));
  app.get('/', (req, res) => {
    res.sendFile(path.join(config.root, '/build/index.html'));
  });

  // @TODO: 404 fallback
}

app.listen(config.port, () => {
  console.log('Server running on port ' + config.port);
});