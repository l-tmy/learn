import './css/common.css'; //引入css文件
import Layer from './components/layer/layer.js';

const App=function(){  //ES6写法
  // const num=1;
  // alert(num);
  //console.log(layer);

  var dom=document.getElementById('app');
  var layer=new Layer();
  dom.innerHTML=layer.tpl;
}
new App();