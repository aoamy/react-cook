//------------------------------------------------------------------------------
//
// webpack.config.js
// version: 1.0.0
// author: 喵大斯( h5devs.com/h5devs.net )
// created: 2017/6/19
// copyright (c) 2017 喵大斯( aosnow@yeah.net )
//
//------------------------------------------------------------------------------

module.exports = require(
	process.env.NODE_ENV === 'production'
		? './scripts/production.js' : './scripts/development.js'
);