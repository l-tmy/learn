var htmlWebpackPlugin = require('html-webpack-plugin');
var path=require('path'); //使用绝对路径
module.exports={
	entry:'./src/app.js' ,//打包入口 单个

	output:{ //指明打包后的文件放在什么地方
      path:'./dist', //本地地址      
      filename:'js/[name].bundle.js'      
	},

	module:{
    	loaders:[
    	 {    	    
          test:/\.js$/, //检测以js结尾的文件
          loader:'babel-loader',
          //exclude:'./node_modules/', //不处理此文件，优化打包速度
          exclude:path.resolve(__dirname,'node_modules'),
          //include:'./src/',//指定需要打包的源文件
          include:path.resolve(__dirname,'src'),
          query:{ //插件
          	presets:['latest']
          }	
    	 }
    	]
    },

	plugins:[//指明自动生成HTML
	  new htmlWebpackPlugin({
	  	filename:'index.html', //生成后的文件名称
	  	template:'index.html', //制定根据谁生成
	  	//inject:,false//生成后的文件存放在<head>标签里
	  	inject:'body'
	  })
	 ]   
}