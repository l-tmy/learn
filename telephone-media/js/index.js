window.onload=function(){
	var oGotop=document.getElementById('goback');

	oGotop.onclick=function(){
      returnTop();
	}
	function returnTop() {
      window.scrollBy(0,-50);//Only for y vertical-axis
      if(document.body.scrollTop||document.documentElement.scrollTop>0) { 
        setTimeout(returnTop,10);
       }
    }   
    
    
}
window.addEventListener('scroll',scrolld);

//动态加载各个div
function scrolld(){
	var oscrollfn=getClass('container','scrollfn');	
	var clientHeight=document.documentElement.clientHeight;//可视区高度	
	var scrollHeight=document.documentElement.scrollTop||document.body.scrollTop;//滚动的距离
    var oGotop=document.getElementById('goback');
    for(var i=0;i<oscrollfn.length;i++){
        
    	if(oscrollfn[i].offsetTop<(scrollHeight+clientHeight*1.1)){
          oscrollfn[i].style.display='block';
        }else{
          oscrollfn[i].style.display='none';
        }
    } 

    if(scrollHeight>clientHeight){
       oGotop.style.display='block';
    } else{
    	oGotop.style.display='none';
    }
  
}



//通过类名获取元素
//parent是父级id
//classname是要获取的类名

function getClass(parent,classname){

	if(document.getElementByClassName){
		return document.getElementByClassName(classname);
	}else{

	   var oParent=document.getElementById(parent);
	   var aResult=oParent.getElementsByTagName('*');
	   var result=[];

	   for(var i=0;i<aResult.length;i++){
          if(aResult[i].className==classname){
          	result.push(aResult[i]);
          }
	   }
	   return result;
    }
}
