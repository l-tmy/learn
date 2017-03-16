window.onload=function(){
	var oGotop=document.getElementById('goback');

    document.title=document.documentElement.scrollTop||document.body.scrollTop;
    
	oGotop.onclick=function(){
      returnTop();
	}
	function returnTop() {
      window.scrollBy(0,-100);//Only for y vertical-axis
      if(document.body.scrollTop||document.documentElement.scrollTop>0) { 
        setTimeout(returnTop,50);
       }
    }
}