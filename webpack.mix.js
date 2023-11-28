let mix = require('laravel-mix');

const path = require('path');
let directory = path.basename(path.resolve(__dirname));

const source = 'platform/packages/' + directory;
const dist = 'public/vendor/core/packages/' + directory;

mix
    .js(source + '/resources/assets/js/seo-helper.js', dist + '/js')
  //  .sass(source + '/resources/assets/sass/seo-helper.scss', dist + '/css')

    .copyDirectory(dist + '/js', source + '/public/js')
    .copyDirectory(dist + '/css', source + '/public/css');
