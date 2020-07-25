const path = require('path');

module.exports = {
    rootPath: path.join(__dirname, '../'),
    buildPath: path.join(__dirname, '../build'),
    htmlBuildPath: path.join(__dirname, '../build/assets'),
    srcPath: path.join(__dirname, '../src'),
    stylesPath: path.join(__dirname, '../styles'),
    mediaPath: path.join(__dirname, '../media'),
    webpackPath: path.join(__dirname),
    nodeModulePath: path.join(__dirname, '../node_modules'),
};
