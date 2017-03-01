module.exports={
	//entry:'./src/script/main.js' ,//打包入口 单个
	//entry:['./src/script/main.js','./src/script/a.js'], 
	entry:{
		main:'./src/script/main.js',
		a:'./src/script/a.js'
	},
	output:{ //指明打包后的文件放在什么地方
      path:'./dist/js',
      filename:'[name]-[hash].js'
	}
}