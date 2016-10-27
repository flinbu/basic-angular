# basic-angular
Basic Angular project files, start point

A set of files to start a project with angular and angular-material. Free to use.

Just clone and `npm install`, then change the data in `package.json` and modify the `gulpfile.js`, there is a basic tasks to process sass and angular js files with a browser sync.

## Install
Just using `npm install` a serie of package will be installed:
  - dependencies
    - angular
    - angular-animate
    - angular-aria
    - angular-material
    - angular-messages
    - angular-mocks
    - angular-route
    - angular-scroll
  - devDependencies
    - browser-sync
    - gulp
    - gulp-clean-css
    - gulp-concat
    - gulp-rename
    - gulp-sass
    - gulp-uglify
    - gulp-watch
    
## Gulp
The project includes a `gulpfile.js` file with basic tasks.

#### SASS
`gulp sass` task will process the `app.scss` sass file located on `sass` directory. Ouput files `app.css app.min.css` will be placed on `assets/css`.

#### Angular
`gulp angular` will concatenate in a single file and uglify then in another file `angular.js angular.min.js`, all the anglar files and modules dependencies including `angular-material`; then the files will be placed on `assets/js` directory. The files to concatenate are:

  - 'node_modules/angular/angular.js'
  - 'node_modules/angular-route/angular-route.js'
  - 'node_modules/angular-animate/angular-animate.js'
  - 'node_modules/angular-aria/angular-aria.js'
  - 'node_modules/angular-messages/angular-messages.js'
  - 'node_modules/angular-material/angular-material.js'
  - 'node_modules/angular-scroll/angular-scroll.js'
  
#### APP
`gulp app` task concatenate in a single file with it uglify version `app.js app.min.js`, all the app files and will put in `assets/js`.

#### Scripts
`gulp scripts` take all JS files on `scripts` directory and concatenate it and create single files `scripts.js scripts.min.js` in `assets/js`.

#### Watch
`gulp watch` will watch, dah... All the files to trigger the gulp tasks when files change, or, will reload the browser when some js and html files change.

#### Browser Sync
`gulp serve` is the main task, this will call all the others tasks and create a local server to show your dev ambience. In this task you have to decide an uncomment the proxy option if it is needed.

## SASS Directory
In `sass` directory are some initial scss files to start:
  - `bourbon` are some amazing mixins collections to use with sass, see the [documentation here](http://bourbon.io/docs/).
  - `helpers` here are some variables with brand colors `_brandcolors.scss`, helpers mixins `_mixins.scss` and the [Font Awesome](http://fontawesome.io/) SASS files.
  - `app.scss` is the main SASS file where mixins and dependencies are called and is this file that the `gulp sass` task will process.

## General Directory Structure (Ideal)
  - app
    - controllers
    - services
    - factory
    - filters
    - directives
    - components
    - theme (Used in `angular-material`)
  - assets
    - fonts
  - sass
    - bourbon
    - helpers
      - fontawesome
  - scripts
  - templates
