//阻塞代码实例，在文件读取完成后才执行接下来的程序
var fs=require('fs');
var data=fs.readFileSync('input.txt');
console.log(data.toString())
;
console.log('程序执行结束1');

//非阻塞代码实例
fs.readFile('input.txt', function (err, data){
  if (err) return console.error(err);
  console.log(data.toString());
});
console.log('程序执行结束2');
