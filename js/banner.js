$(function(){
	var banner=$("#banner");
	var pic=$(".banner-Pic");//背景图
	var imgs=$(".banner-pic");//banner图
	var bannerBox=$(".banner-box")[0];
	var list=$(".list");
	var bannerLeft=$(".bannerleft")[0];
	var bannerRight=$(".bannerright")[0];
	var n=0;
	var t=setInterval(move,2000);
	function move(){
		n++;
		if(n>=imgs.length){
			n=0;
		}
		for(var i=0;i<imgs.length;i++){
			animate(imgs[i],{opacity:0},2000)
			animate(pic[i],{opacity:0},2000)
			list[i].style.background='#3E3E3E'
		}
		animate(imgs[n],{opacity:1},2000)
		animate(pic[n],{opacity:1},2000)
		list[n].style.background='#B61B1F'
	}
	bannerBox.onmouseover=function(){
		clearInterval(t);
		bannerRight.style.display='block';
		bannerLeft.style.display='block';
	}
	bannerBox.onmouseout=function(){
		t=setInterval(move,2000);
		bannerRight.style.display='none';
		bannerLeft.style.display='none';
	}
	bannerRight.onclick=function(){
		move();
	}
	bannerLeft.onclick=function(){
		n--;
		if(n<=0){
			n=imgs.length-1;
		}
		for(var i=0;i<imgs.length;i++){
			animate(imgs[i],{opacity:0},2000)
			animate(pic[i],{opacity:0},2000)
			list[i].style.background='#3E3E3E'
		}
		animate(imgs[n],{opacity:1},2000)
		animate(pic[n],{opacity:1},2000)
		list[n].style.background='#3E3E3E'
	}
	for(var i=0;i<list.length;i++){
		list[i].index=i;
		list[i].onmouseover=function(){
			if(this.index>n){
				n++;
				if(n>=imgs.length){
					n=0;
				}
				for(var i=0;i<imgs.length;i++){
					animate(imgs[i],{opacity:0},2000);
					animate(pic[i],{opacity:0},2000);
					list[i].style.background='#3E3E3E';
				}
				animate(imgs[this.index],{opacity:1},2000);
				animate(pic[this.index],{opacity:1},2000);
				list[this.index].style.background='#B61B1F';
				n=this.index;
			}else if(this.index<n){
				n--;
				if(n<=0){
					n=imgs.length-1;
				}
				for(var i=0;i<imgs.length;i++){
					animate(imgs[i],{opacity:0},2000);
					list[i].style.background='#3E3E3E';
				}
				animate(imgs[this.index],{opacity:1},2000);
				list[this.index].style.background='#B61B1F';
				n=this.index;
			}
			
		}
	}

	//banner下拉框
	var menu=$(".menu");	
	for(var i=0;i<menu.length;i++){
		hover(menu[i],function(){
			var bannerhidden=$(".banner-hidden",this)[0];
			this.style.background="#E5004F";
			bannerhidden.style.display="block";
		},function(){
			var that=this;
			var bannerhidden=$(".banner-hidden",this)[0];
			that.style.background="#333333";
			bannerhidden.style.display="none";
		})
	}



	function dalunbo(now,n){
		   var now=now;
		   var zuo=$('.draw-left')[now];
		   var you=$('.draw-right')[now];
		   var smallcircle=$('.circle')[now];
		   var firstcircle=getClass('cir',smallcircle);
		   var bigbox=$('.drawing')[n];
		   var picture=getClass('draw-pic',bigbox);
		   // console.log(picture);
		   var nub=0;
		   var nub1=0;
		   you.onclick=function(){
		       nub1=nub+1;
		       if(nub1>=picture.length){
		         nub1=0;
		       }
		      picture[nub1].style.left=388+"px";
		      animate(picture[nub],{left:-388},500)
		      animate(picture[nub1],{left:0},500)
		      firstcircle[nub].style.background="#ccc";
		      firstcircle[nub1].style.background="#E4145A";
		      nub=nub1;
		   }
		   zuo.onclick=function(){
		       nub1=nub-1;
		       if(nub1<0){
		         nub1=picture.length-1;
		       }
		      picture[nub1].style.left=-388+"px";
		      animate(picture[nub],{left:388},500)
		      animate(picture[nub1],{left:0},500)
		      firstcircle[nub].style.background="#ccc";
		      firstcircle[nub1].style.background="#E4145A";
		      nub=nub1;
		   }
		   bigbox.onmouseover=function(){
		      zuo.style.display="block"
		      you.style.display="block"
		   }
		   bigbox.onmouseout=function(){
		      zuo.style.display="none"
		      you.style.display="none"
		   }
		   zuo.onmouseover=function(){
		      zuo.style.background="#E4145A"
		   }
		   zuo.onmouseout=function(){
		      zuo.style.background="rgba(0,0,0,0.5)"
		   }
		   you.onmouseover=function(){
		      you.style.background="#E4145A"
		   }
		   you.onmouseout=function(){
		      you.style.background="rgba(0,0,0,0.5)"
		   }
		}
		   dalunbo(0,0);
		   dalunbo(1,3);
		   dalunbo(2,4);
		   dalunbo(3,5);
		   dalunbo(4,6);




	//top下拉
	var sy=$(".sy wx")[0];
	hover(sy,function(){
		var down=$(".down",this)[0];
		down.style.display='block';
		this.style.width="124px";
		this.style.background="#fff";
	},function(){
		var that=this;
		var down=$(".down",this)[0];
		down.style.display='none';
		that.style.width="77px";
		that.style.background="";
	})

	var indent=$(".indent YT")[0];
	hover(indent,function(){
		var select=$(".select",this)[0];
		select.style.display="block";
		this.style.background="#fff";
	},function(){
		var select=$(".select")[0];
		select.style.display="none";
		this.style.background="";
	})

	//wx下拉
	var sy1=$(".sy sjyt")[0];
	hover(sy1,function(){
		var down1=$(".down1",this)[0];
		down1.style.display='block';
		this.style.width="148px";
		this.style.background="#fff";
	},function(){
		var that=this;
		var down1=$(".down1",this)[0];
		down1.style.display='none';
		that.style.width="100px";
		that.style.background="";
	})


	//选项卡
	var hot=$(".HOT");
	var remen=$(".remen");
	var sanjiao4=$(".sanjiao4");
	for(var a=0;a<hot.length;a++){
		hot[a].index=a;
		hot[a].onmouseover=function(){
			for(var b=0;b<remen.length;b++){
				hot[b].style.borderBottom="3px solid #000";
				remen[b].style.display="none";
				sanjiao4[b].style.display="none";
			}
			hot[this.index].style.borderBottom="3px solid #E70050";
			remen[this.index].style.display='block';
			sanjiao4[this.index].style.display="block";
		}
	}




	//超值特卖选项卡
	function select(){
		var obj=obj;
		var cz=$(".CZ",obj);
		var cztm=$(".CZTM",obj); 
		var sanjiao=$(".sanjiao",obj);
		for(var d=0;d<cz.length;d++){
			cz[d].index=d;
			cz[d].onmouseover=function(){
					// alert(1)
				for(var e=0;e<cztm.length;e++){
					cz[e].style.borderBottom='5px solid #333333';
					cztm[e].style.display="none";
					sanjiao[e].style.display="none";

				}
				cz[this.index].style.borderBottom='5px solid #E5004F';
				cztm[this.index].style.display="block";
				sanjiao[this.index].style.display="block";
			}
		}

	}
	select($("#merchandise"))

	//小轮播
	function xiaolunbo(obj){
		var categorybot=$(".category-bot",obj)[0]
		var scroller=$(".scroller",obj);
		var boultleft=$(".boult",obj)[0];
		var boultright=$(".boult-right",obj)[0];
		var bot_box=$(".xiaolunbo",obj)[0];
		var width=parseInt(getStyle(bot_box,"width"));
		var N=0;
		var NEXT=0;
		boultright.onclick=function(){
			NEXT=N+1;
			if(NEXT>scroller.length-1){
				NEXT=0
			}
			scroller[NEXT].style.left=width+"px";
			animate(scroller[N],{left:-width},1000);
			animate(scroller[NEXT],{left:0},1000);
			N=NEXT;
		}
		 boultleft.onclick=function(){
			NEXT=N-1;
			if(NEXT<0){
				NEXT=scroller.length-1
			}
			scroller[NEXT].style.left=-width+"px";
			animate(scroller[N],{left:width},1000);
			animate(scroller[NEXT],{left:0},1000);
			N=NEXT;
		}
	}
	
	xiaolunbo($(".fashion-box-bot")[0])
	xiaolunbo($(".fashion-box-bot")[1])
	xiaolunbo($(".fashion-box-bot")[2])
	xiaolunbo($(".fashion-box-bot")[3])
	xiaolunbo($(".fashion-box-bot")[4])
	xiaolunbo($(".fashion-box-bot")[5])
	xiaolunbo($(".fashion-box-bot")[6])
	xiaolunbo($(".fashion-box-bot")[7])
	xiaolunbo($(".fashion-box-bot")[8])
	xiaolunbo($(".fashion-box-bot")[9])


	// 超值特卖的边框
	function border(bb){
		var bb=bb;
		var nav=$(".nav",bb);
		var top=$(".border-top",bb);
		var bottom=$(".border-bottom",bb);
		var left=$(".border-left",bb);
		var right=$(".border-right",bb);
		for(var i=0;i<nav.length;i++){
			nav[i].index=i;
			nav[i].onmouseover=function(){
				animate(top[this.index],{width:218},500);
				animate(left[this.index],{height:258},500);
				animate(right[this.index],{height:258},500);
				animate(bottom[this.index],{width:218},500);
			}
			nav[i].onmouseout=function(){
				animate(top[this.index],{width:0},500);
				animate(left[this.index],{height:0},500);
				animate(right[this.index],{height:0},500);
				animate(bottom[this.index],{width:0},500);
			}
		}
	}
	border($(".CZTM")[0]);
	border($(".CZTM")[1]);


	// 本周推荐的边框
	function BORDER(){
		var aa=aa;
		var tj=$(".tj",aa);
		var Top=$(".borderTop",aa);
		var Left=$(".borderLeft",aa);
		var Right=$(".borderRight",aa);
		var Bottom=$(".borderBottom",aa);
		for(var i=0;i<tj.length;i++){
			tj[i].index=i;
			tj[i].onmouseover=function(){
				animate(Top[this.index],{width:196},500);
				animate(Left[this.index],{height:248},500);
				animate(Bottom[this.index],{width:196},500);
				animate(Right[this.index],{height:248},500);
			}
			tj[i].onmouseout=function(){
				animate(Top[this.index],{width:0},500);
				animate(Left[this.index],{height:0},500);
				animate(Bottom[this.index],{width:0},500);
				animate(Right[this.index],{height:0},500);
			}
		}
	}
	BORDER($(".remen-box")[0])


	var floor_nav=$('.floorNav')[0];
	var floor=$('.floor');
	var floor_lis=$('.floor_lis');//返回属性
	var back=$('.back')[0];		//获取属性‘返回’
	var Cheight=document.documentElement.clientHeight;
	var Cwidth=document.documentElement.clientWidth;	
	var nownode;
	var floor_flag=true;	
	var floor_flag1=true;
	for(var i=0;i<floor.length;i++){		//获取每一楼层距离浏览器的高度
		floor[i].h=floor[i].offsetTop;
	}
	window.onscroll=function(){
	var obj=document.body.scrollTop?document.body:document.documentElement;
	var top=obj.scrollTop;				//取滚动条的高度
	if(top>=floor[0].h-500){
		floor_nav.style.display='block';
		back.style.display='block';
		// animate(top_hidden,{height:60},100);
		var nHeight=floor_nav.offsetHeight;
		floor_nav.style.top=(Cheight-nHeight)/2+'px';	//
    if(floor_flag){
      floor_flag=false;
    }floor_flag=true;
	}
  if(top<floor[0].h-500){
    floor_nav.style.display='none';
    back.style.display='none';
      if(floor_flag1){
        floor_flag1=false;  
      }floor_flag1=true;
  }
		for(var i=0;i<floor.length;i++){
			if(top>=floor[i].h-200){
				for(var j=0;j<floor_lis.length;j++){
					floor_lis[j].style.background='';
          floor_lis[j].style.lineHeight=999+'px';
				}
				floor_lis[i].style.background='#F6004F'
        floor_lis[i].style.lineHeight=20+"px";
				nownode=i;
			}
		}
	}
	for(var i=0;i<floor_lis.length;i++){
		floor_lis[i].index=i;
		floor_lis[i].onclick=function(){
			animate(document.body,{scrollTop:floor[this.index].h});
			animate(document.documentElement,{scrollTop:floor[this.index].h});
		}
		floor_lis[i].onmouseover=function(){
			this.style.background='#F6004F';
      this.style.lineHeight=20+'px';
		}	
		floor_lis[i].onmouseout=function(){
			if(nownode==this.index){
				return;
			}
			this.style.background='';
      this.style.lineHeight=999+'px';
			}
		}
	back.onclick=function(){
		animate(document.body,{scrollTop:0})
	}
	animate(document.documentElement,{scrollTop:0})



	


  function Border(obj){
		var jy=obj;
		hover(jy,function(){       
			var ah=jy.offsetHeight-2;
			var aw=jy.offsetWidth-2;
			var bl=$('.border-left1',this)[0]
			var br=$('.border-right1',this)[0]
			var bt=$('.border-top1',this)[0]
			var bb=$('.border-bottom1',this)[0]
			animate(bt,{width:aw},500,function(){
				this.style.width=aw;
			})
			animate(bb,{width:aw},500,function(){
				this.style.width=aw;
			})
			animate(bl,{height:ah},500,function(){
				this.style.height=ah;
			})
			animate(br,{height:ah},500,function(){
				this.style.height=ah;
			})
			//边框出现  
		},function(){
			var bl=$('.border-left1',this)[0]
			var br=$('.border-right1',this)[0]
			var bt=$('.border-top1',this)[0]
			var bb=$('.border-bottom1',this)[0]
			that=this;
			animate(bt,{width:0},500,function(){
				this.style.width=0;
			})
			animate(bb,{width:0},500,function(){
				this.style.width=0;
			})
			animate(bl,{height:0},500,function(){
				this.style.height=0;
			})
			animate(br,{height:0},500,function(){
				this.style.height=0;
			})
			//边框消失
		})
	}      
	for(var g=0;g<36;g++){
		Border($('.jy')[g]);
	}
	




   //鼠标悬停效果
 //   function weChat(){
	// 	var wechat=$('.sy wx')[0]
	// 	var a=$('a',wechat)[0]
	// 	var div=$('.down',a)[0]
	// 	var img=$('img',div)[0]	
	// 	// var span=$('span',a)[0]	
	// 	var bot=$('.bot',a)[0]
	// 	hover(wechat,function(){
	// 		a.style.width=89+'px'
	// 		div.style.display='block'
	// 		span.style.display='block'
	// 		bot.style.transform='rotate(360deg)'
	// 	},function(){
	// 		a.style.width=52+'px'
	// 		div.style.display='none'
	// 		span.style.display='none'
	// 		bot.style.transform='rotate(0deg)'
	// 	})
	// }
	// weChat()




})