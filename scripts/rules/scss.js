/**
 * Created by AoSnow on 2017/6/19.
 */

// .scss 文件使用 style-loader，css-loader 和 sass-loader 来处理
module.exports = function( extract )
{
	extract = extract || require( 'extract-text-webpack-plugin' );

	let cssLoader = process.env.NODE_ENV === 'production'
		? { loader: "css-loader", options: { minimize: true } }
		: 'css-loader';

	return {
		test: /\.scss$/i,
		use: extract.extract( {
			fallback: "style-loader",
			use: [ cssLoader, "sass-loader" ],
			publicPath: "../"
		} )
	};
};