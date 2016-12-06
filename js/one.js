$(function(){
	var imgs=getClass("draw-pic");
	var cir=getClass("cir");
	var width=parseInt(getStyle(drawing,"width"));
	var left=getClass("draw-left")[0];
	var right=getClass("draw-right")[0];
	var drawing=getClass("drawing");
	var n=0;
	var next=0;
	// console.log(imgs.length,cir.length,left.length,right.length);
	right.onclick=function(){
		for (var i = 0; i < imgs.length; i++) {
			next=n+1;
			if(next>=imgs.length){
				next=0;
			}
			imgs[next].style.left=width+'px';
			animate(imgs[n],{left:-width},600);
			animate(imgs[next],{left:0},600);
			list[n].style.background='#6E6E6E';//让当前图片所对应的小点变回默认色
			list[next].style.background='#E6175F';
			n=left;
		}
	}
	
})