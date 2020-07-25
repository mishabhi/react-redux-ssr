const path = require('path');

// Transpile all code following this line with babel and use '@babel/preset-env' (aka ES6) preset.
require.extensions['.css'] = () => { return; }
require.extensions['.scss'] = () => { return; }
require.extensions['.svg'] = () => { return; }
require.extensions['.png'] = () => { return; }
require.extensions['.jpeg'] = () => { return; }
require.extensions['.jpg'] = () => { return; }

require('dotenv').config({path: path.join(__dirname, '../../.env')});
require("@babel/register")
require('./server')