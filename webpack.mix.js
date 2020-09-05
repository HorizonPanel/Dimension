const mix = require('laravel-mix');

const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

var webpackConfig = {
   plugins: [
      new VuetifyLoaderPlugin(),
      new CaseSensitivePathsPlugin(),
   ],
   resolve: {
      extensions: ['.js', '.vue'],
      alias: {
         'clientarea': __dirname + '/resources/clientarea'
      }
   }
};

mix.webpackConfig( webpackConfig );

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/clientarea/app.js', 'public/js/clientarea')
   .sass('resources/sass/app.scss', 'public/css');
