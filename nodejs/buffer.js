var buf=new Buffer(256);
var length=buf.write('sdsd');
console.log('写入字节数为：'+length);

//读取数据
var buf=new Buffer(26);
for(var i=0;i<26;i++){
	buf[i]=i+97;
}
console.log( buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // 输出: abcde
console.log( buf.toString('utf8',0,5));    // 输出: abcde
console.log( buf.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde

//将buffer转换为json
var buf = new Buffer('abc');
var json = buf.toJSON(buf);
console.log(buf.toString());

console.log(json);

//缓冲区合并
var buffer1 = new Buffer('abc ');
var buffer2 = new Buffer('def');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 内容: " + buffer3.toString());