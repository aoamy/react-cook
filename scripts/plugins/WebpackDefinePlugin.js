/**
 * Created by AoSnow on 2017/7/21.
 */
const Webpack = require( "webpack" );
const ENV = process.env.NODE_ENV === 'production' ? 'production' : 'development';

// 路径别名（用于WAMP等虚拟目录，若未使用虚拟目录将 ALIAS设置为空字符串）
const ALIAS = process.env.NODE_ENV === 'production' ? 'cook' : '';

module.exports = new Webpack.DefinePlugin( {
	'process.env.NODE_ENV': JSON.stringify( ENV ),
	'process.env.ALIAS': JSON.stringify( ALIAS )
} );