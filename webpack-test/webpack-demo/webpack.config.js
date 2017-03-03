var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
	//entry:'./src/script/main.js' ,//打包入口 单个
	//entry:['./src/script/main.js','./src/script/a.js'], 
	entry:{
		main:'./src/script/main.js',		
		a:'./src/script/a.js',
		b:'./src/script/b.js',
		c:'./src/script/c.js'
	},

	output:{ //指明打包后的文件放在什么地方
      path:'./dist', //本地地址
      //filename:'js/[name]-[hash].js',
      filename:'js/[name].js',
      publicPath:'http://www.com'  //相当于一个占位符，上线时使用
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
	  }),
      
      //多页面打包，
	  new htmlWebpackPlugin({
	  	filename:'a.html', 
	  	template:'index.html', 
	  	inject:'head',
	  	title:'a',
	  	chunks:['a','main']	 //指定此页面需要的js
	  	//excludeChunks:['b'] 	//引入除此之外的js
	  }),
	  new htmlWebpackPlugin({
	  	filename:'b.html', 
	  	template:'index.html', 
	  	inject:'head',
	  	title:'b',
	  	chunks:['a','main','b']	  	
	  }),
      new htmlWebpackPlugin({
	  	filename:'c.html', 
	  	template:'index.html', 
	  	inject:'head',
	  	title:'c',
	  	chunks:['a','main','c'] 	
	  }),
      
	 ]   
}