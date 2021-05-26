import express from 'express'; 
import webpackMiddleware from "webpack-dev-middleware"
import webpack from 'webpack';
import webpackConfig from './webpack.config.js';
const app = express();
app.use(webpackMiddleware(webpack(webpackConfig)));

app.listen(3002, () => {
  console.log('Listening');
});