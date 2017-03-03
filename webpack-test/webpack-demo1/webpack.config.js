var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
	entry:'./src/app.js' ,//打包入口 单个

	output:{ //指明打包后的文件放在什么地方
      path:'./dist', //本地地址      
      filename:'js/[name].js'      
	},

	plugins:[//指明自动生成HTML
	  new htmlWebpackPlugin({
	  	filename:'index.html', //生成后的文件名称
	  	template:'index.html', //制定根据谁生成
	  	//inject:,false//生成后的文件存放在<head>标签里
	  	inject:'body',
	  	title:'webpack is good',
	  	chunks:['main','a'],
	  	date:new Date(),
	  	minify:{
	  		removeComments:true, //删除注释
	  		collapseWhitespace:true //删除空格
	  	}
	  })
	 ]   
}