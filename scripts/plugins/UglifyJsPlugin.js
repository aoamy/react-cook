/**
 * Created by AoSnow on 2017/6/20.
 */
const Webpack = require( "webpack" );
module.exports = new Webpack.optimize.UglifyJsPlugin( {
	compress: true,
	beautify: false,
	mangle: {
		// 跳过这些
		except: [ '$super', '$', 'exports', 'require' ]
	}
} );