const webpack = require('webpack');
const dotenv = require('dotenv');
const fileSystem = require('fs'); 
const { rootPath } = require('./path');

module.exports = () => {
    const envPath = rootPath + '/.env';
    const fileEnv = dotenv.config({ path: envPath }).parsed;

    const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
        return prev;
    }, {});
    return new webpack.DefinePlugin(envKeys);
};