# Web Project Boilerplate

Boilerplate for static websites using Webpack and Babel.

## 1. Characteristics

#### 1.1 Config files
Webpack config files are divided into common, dev and prod mode and merged using webpack-merge. So that is easy to add new loaders, plugins etc for a specific mode or for both

#### 1.1. Hashes in filenames
Uses html-webpack-plugin to insert filenames with hashes into the html templates

#### 1.2. Hot reloading
In development mode, webpack-dev-server is used to reload every time a file changes

#### 1.3. Extract CSS files in production mode
In production mode the CSS files are extracted using mini-css-extract-plugin to avoid initial unstyled pages when loading on slow networks

#### 1.4. Minify and Uglify JS and style bundles
Uses optimize-css-assets-webpack-plugin to minimize CSS and terser-webpack-plugin to minimize and uglify JS in production mode

#### 1.5 Support for ECMAScript 9 (2018)
Uses babel transpiler to support ECMAScript 9 syntax in 99.75% of market browsers (Using browserslist)

#### 1.6. Automatically add JS polyfills for old browsers
Uses babel transpiler to add polyfills automatically for old browsers when there is not supported code

## 2. Directories structure
#### 2.1. config
Contains webpack config files:
* **webpack.common.js:** Common configuration for production and development
* **webpack.dev.js:** Configurations for development mode
* **webpacp.prod.js:** Configuration for production mode

#### 2.2. dist
Production compiled files (Note that development is set using webpack-dev-server).  Webpack includes clean-webpack-plugin which automatically delete former files every time that build is run

#### 2.3. docs
To include documentation related to the project, requirements, manuals, changelog, UML diagrams, wireframes...

#### 2.4. src
To include the project source code

## 3. Sources

* [Learn Webpack course (youtube)](https://www.youtube.com/playlist?list=PLblA84xge2_zwxh3XJqy6UVxS60YdusY8)

* [Webpack Docs](https://webpack.js.org/concepts)
