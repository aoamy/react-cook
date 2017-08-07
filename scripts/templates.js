/**
 * Created by AoSnow on 2017/6/19.
 */

// 模板配置
// 页面配置
// 配置中的路径都是相对于模板 tpl 路径来设置（tpl 路径由外部传入）
// 详细配置请参考：https://github.com/jantimon/html-webpack-plugin#configuration
module.exports = [ {
	title:"跟我一起来烹饪美食！", //"喵学院 - 跟我们学前端开发，会上瘾！",// 页面标题
	template: "index.html",// 只需要填写模板名称
	chunks: [ "vendor", "app" ]// 要引用 entry 里面的哪几个入口（即该页面所包含的 js）
} ];