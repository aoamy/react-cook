/**
 * Created by AoSnow on 2017/6/19.
 */

// 字体、图标文件使用 file-loader 来直接复制转移
module.exports = {
	test: /\.(woff|woff2|eot|ttf|ico)$/i,
	use: [ {
		loader: "file-loader",
		options: { name: "assets/[name].[ext]" }
	} ]
};