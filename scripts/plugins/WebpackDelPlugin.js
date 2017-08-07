/**
 * Created by AoSnow on 2017/6/20.
 */
const Path = require( "path" );

// 详情 https://github.com/SMHFandA/webpack-del-plugin
const WebpackDelPlugin = require( 'webpack-del-plugin' );

module.exports = function( DIST_DIR )
{
	return new WebpackDelPlugin( {
		match: [
			Path.join( DIST_DIR, '*' ),
			Path.join( '!', DIST_DIR, '.htaccess' )
		]
	} );
};
