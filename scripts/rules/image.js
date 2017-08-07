/**
 * Created by AoSnow on 2017/6/19.
 */

// 图片、svg文件使用 url-loader 来处理，小于 10kb 的直接转为 base64
module.exports = {
	test: /\.(png|jpe?g|gif|svg)$/i,
	use: [ {
		loader: "url-loader",
		options: { limit: 10240, name: "assets/[name].[ext]" }
	} ]
};