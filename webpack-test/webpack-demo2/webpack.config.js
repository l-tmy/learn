var htmlWebpackPlugin = require('html-webpack-plugin');
var path=require('path'); //使用绝对路径
module.exports={
	context:__dirname,
	entry:'./src/app.js' ,//打包入口 单个

	output:{ //指明打包后的文件放在什么地方
      path:'./dist', //本地地址      
      filename:'js/[name].bundle.js'      
	},

	module:{
    	loaders:[
    	//解析es6文件,匹配规则
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
    	 },
          
    	 //配置css-loader
    	 {
    	   test:/\.css$/,//匹配css文件
           //loader:'style-loader!css-loader'
           loader:'style-loader!css-loader?importLoaders=1!postcss-loader'	
    	 },

    	 //配置less
    	 {
    	   test:/\.less$/,
           loader:'style-loader!css-loader!postcss-loader!less-loader'	
    	 },

    	 //配置sass
    	 {
    	 	test:/\.sass$/,
    	 	loader:'style!css!postcss!less'	
    	 },

    	 //配置HTML
    	 {
    	 	test:/\.html$/,
    	 	loader:'html-loader'
    	 },

    	 //图片规则
    	 {
    	 	test:/\.png|.jpg$/i,
    	    //loader:'file-loader',
    	    //loader:'url-loader', //为了设置limit
    	    loaders:[
               'url-loader?limit=10000&name=assets/[name]-[hash:5].[ext]',
               'image-webpack'  //压缩图片
    	    ]
    	    /*
    	 	query:{
    	 		limit:20000, //设定为20k的值
    	 		name:'assets/[name]-[hash:5].[ext]',//打包后的名字
    	 	}*/
    	 }
         
    	]
    },

    //定义一个插件 ,写在了根目录里，写在这里会报错
   /* postcss:[
       require('autoprefixer')({
       	broswers:['last 5 versions'] //对最近的五个浏览器版本处理
       })
    ],
*/
	plugins:[//指明自动生成HTML
	  new htmlWebpackPlugin({
	  	filename:'index.html', //生成后的文件名称
	  	template:'index.html', //制定根据谁生成
	  	//inject:,false//生成后的文件存放在<head>标签里
	  	inject:'body'
	  })
	 ]   
}