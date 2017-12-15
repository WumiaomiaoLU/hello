//购物车跳转
    	if(!window.localStorage.getItem("user")){
    		$('#shoppingCar').on('click',function(){
    			location.href="signin.html";
    		})
    	}
    	else{
    		$('#shoppingCar').on('click',function(){
    			location.href="shoppingCar.html";
    		})
    	}
    	
    	//用户跳转
    	if(!window.localStorage.getItem("user")){
    		$('#user').on('click',function(){
    			location.href="signin.html";
    		})
    	}
    	else{
    		$('#user').on('click',function(){
    			location.href="user.html";
    		})
    	}
    	
    	$(function(){
			$('.wrapper').navbarscroll();
		})
		
    	
    	$.ajax({
    		type:"get",
    		url:"http://datainfo.duapp.com/shopdata/getGoods.php",
    		
    		dataType:'jsonp',
    		success:function(data){
    			console.log(data);
   
    			for(var i=0;i<data.length;i+=2){
    				$('#goodList').html($('#goodList').html()
    				//左侧栏
    				+`<div class="ui-block-a"  goodId=`+data[i].goodsID+`>
    				<img class="ps" src="`+data[i].goodsListImg+`" alt="">
    				<p  class="fs">`+data[i].goodsName.slice(0,20)+`...`+`</p>
    				<p class="fs2">￥`+data[i].price+`</p>
    				</div>`+
    				//右侧栏
    				`<div class="ui-block-b"  goodId=`+data[i+1].goodsID+`>
    				<img  class="ps" src="`+data[i+1].goodsListImg+`" alt="">
    				<p  class="fs">`+data[i+1].goodsName.slice(0,20)+`...`+`</p>
    				<p class="fs2">￥`+data[i].price+`</p>
    				</div>`)
    			}
    			$('#goodList>div').on('click',function(){
    				window.location.href="goodsInf.html#"+this.getAttribute('goodID');
    			})
    		}
    	});
    	
    	
    	// 搜索
    	
		$('#ser').click(function(){
          	var ser=document.getElementById('ser');
          	var goods=document.getElementById('psearch');
          	console.log(goods.value);
          	
          	if(!goods.value)
          	{
          		alert('不能为空!');
          	}
          	else{
          		$.ajax({
          		type:'get',
          		url:'http://datainfo.duapp.com/shopdata/selectGoodes.php',
          	    dataType:'jsonp',
          	    data:{selectText:goods.value,linenumber:15},
          	    success:function(data){
          	    	console.log(data);
          	    	$('#goodList').empty(); //请空原列表美容
          	    	
	          	    for(var i=0;i<data.length;i+=2){
	    				$('#goodList').html($('#goodList').html()
	    				//左侧栏
	    				+`<div class="ui-block-a"  goodId=`+data[i].goodsID+`>
	    				<img class="ps" src="`+data[i].goodsListImg+`" alt="">
	    				<p  class="fs">`+data[i].goodsName.slice(0,20)+`...`+`</p>
	    				<p class="fs2">￥`+data[i].price+`</p>
	    				</div>`+
	    				//右侧栏
	    				`<div class="ui-block-b"  goodId=`+data[i+1].goodsID+`>
	    				<img  class="ps" src="`+data[i+1].goodsListImg+`" alt="">
	    				<p  class="fs">`+data[i+1].goodsName.slice(0,20)+`...`+`</p>
	    				<p class="fs2">￥`+data[i].price+`</p>
	    				</div>`)
    			}
    			$('#goodList>div').on('click',function(){
    				window.location.href="goodsInf.html#"+this.getAttribute('goodID');
    			})
          	    	
          	    }//success函数结束
             })
          	}
          	
          })
    	
    	//衬衫
    	$('#class1').on('click',function(){
    		
    		$('#goodList').empty();
    		$.ajax({
    		type:"get",
    		url:"http://datainfo.duapp.com/shopdata/getGoods.php",
    		data:{classID:1},
    		dataType:'jsonp',
    		success:function(data){
    			console.log(data);
   
    			for(var i=0;i<data.length;i+=2){
    				$('#goodList').html($('#goodList').html()
    				//左侧栏
    				+`<div class="ui-block-a"  goodId=`+data[i].goodsID+`>
    				<img class="ps" src="`+data[i].goodsListImg+`" alt="">
    				<p  class="fs">`+data[i].goodsName.slice(0,20)+`...`+`</p>
    				<p class="fs2">￥`+data[i].price+`</p>
    				</div>`+
    				//右侧栏
    				`<div class="ui-block-b"  goodId=`+data[i+1].goodsID+`>
    				<img  class="ps" src="`+data[i+1].goodsListImg+`" alt="">
    				<p  class="fs">`+data[i+1].goodsName.slice(0,20)+`...`+`</p>
    				<p class="fs2">￥`+data[i].price+`</p>
    				</div>`)
    			}
    			$('#goodList>div').on('click',function(){
    				window.location.href="goodsInf.html#"+this.getAttribute('goodID');
    			})
    		}
    	});
    	})
    	
    	//礼服
    	$('#class2').on('click',function(){
    		
    		$('#goodList').empty();
    		$.ajax({
    		type:"get",
    		url:"http://datainfo.duapp.com/shopdata/getGoods.php",
    		data:{classID:2},
    		dataType:'jsonp',
    		success:function(data){
    			console.log(data);
   
    			for(var i=0;i<data.length;i+=2){
    				$('#goodList').html($('#goodList').html()
    				//左侧栏
    				+`<div class="ui-block-a"  goodId=`+data[i].goodsID+`>
    				<img class="ps" src="`+data[i].goodsListImg+`" alt="">
    				<p  class="fs">`+data[i].goodsName.slice(0,20)+`...`+`</p>
    				<p class="fs2">￥`+data[i].price+`</p>
    				</div>`+
    				//右侧栏
    				`<div class="ui-block-b"  goodId=`+data[i+1].goodsID+`>
    				<img  class="ps" src="`+data[i+1].goodsListImg+`" alt="">
    				<p  class="fs">`+data[i+1].goodsName.slice(0,20)+`...`+`</p>
    				<p class="fs2">￥`+data[i].price+`</p>
    				</div>`)
    			}
    			$('#goodList>div').on('click',function(){
    				window.location.href="goodsInf.html#"+this.getAttribute('goodID');
    			})
    		}
    	});
    	})
    	
    	//短外套
    	$('#class3').on('click',function(){
    		
    		$('#goodList').empty();
    		$.ajax({
    		type:"get",
    		url:"http://datainfo.duapp.com/shopdata/getGoods.php",
    		data:{classID:4},
    		dataType:'jsonp',
    		success:function(data){
    			console.log(data);
   
    			for(var i=0;i<data.length;i+=2){
    				$('#goodList').html($('#goodList').html()
    				//左侧栏
    				+`<div class="ui-block-a"  goodId=`+data[i].goodsID+`>
    				<img class="ps" src="`+data[i].goodsListImg+`" alt="">
    				<p  class="fs">`+data[i].goodsName.slice(0,20)+`...`+`</p>
    				<p class="fs2">￥`+data[i].price+`</p>
    				</div>`+
    				//右侧栏
    				`<div class="ui-block-b"  goodId=`+data[i+1].goodsID+`>
    				<img  class="ps" src="`+data[i+1].goodsListImg+`" alt="">
    				<p  class="fs">`+data[i+1].goodsName.slice(0,20)+`...`+`</p>
    				<p class="fs2">￥`+data[i].price+`</p>
    				</div>`)
    			}
    			$('#goodList>div').on('click',function(){
    				window.location.href="goodsInf.html#"+this.getAttribute('goodID');
    			})
    		}
    	});
    	})
    	
    	//棉服
    	$('#class4').on('click',function(){
    		
    		$('#goodList').empty();
    		$.ajax({
    		type:"get",
    		url:"http://datainfo.duapp.com/shopdata/getGoods.php",
    		data:{classID:3},
    		dataType:'jsonp',
    		success:function(data){
    			console.log(data);
   
    			for(var i=0;i<data.length;i+=2){
    				$('#goodList').html($('#goodList').html()
    				//左侧栏
    				+`<div class="ui-block-a"  goodId=`+data[i].goodsID+`>
    				<img class="ps" src="`+data[i].goodsListImg+`" alt="">
    				<p  class="fs">`+data[i].goodsName.slice(0,20)+`...`+`</p>
    				<p class="fs2">￥`+data[i].price+`</p>
    				</div>`+
    				//右侧栏
    				`<div class="ui-block-b"  goodId=`+data[i+1].goodsID+`>
    				<img  class="ps" src="`+data[i+1].goodsListImg+`" alt="">
    				<p  class="fs">`+data[i+1].goodsName.slice(0,20)+`...`+`</p>
    				<p class="fs2">￥`+data[i].price+`</p>
    				</div>`)
    			}
    			$('#goodList>div').on('click',function(){
    				window.location.href="goodsInf.html#"+this.getAttribute('goodID');
    			})
    		}
    	});
    	})
    	
    	//卫衣
    	$('#class5').on('click',function(){
    		
    		$('#goodList').empty();
    		$.ajax({
    		type:"get",
    		url:"http://datainfo.duapp.com/shopdata/getGoods.php",
    		data:{classID:5},
    		dataType:'jsonp',
    		success:function(data){
    			console.log(data);
   
    			for(var i=0;i<data.length;i+=2){
    				$('#goodList').html($('#goodList').html()
    				//左侧栏
    				+`<div class="ui-block-a"  goodId=`+data[i].goodsID+`>
    				<img class="ps" src="`+data[i].goodsListImg+`" alt="">
    				<p  class="fs">`+data[i].goodsName.slice(0,20)+`...`+`</p>
    				<p class="fs2">￥`+data[i].price+`</p>
    				</div>`+
    				//右侧栏
    				`<div class="ui-block-b"  goodId=`+data[i+1].goodsID+`>
    				<img  class="ps" src="`+data[i+1].goodsListImg+`" alt="">
    				<p  class="fs">`+data[i+1].goodsName.slice(0,20)+`...`+`</p>
    				<p class="fs2">￥`+data[i].price+`</p>
    				</div>`)
    			}
    			$('#goodList>div').on('click',function(){
    				window.location.href="goodsInf.html#"+this.getAttribute('goodID');
    			})
    		}
    	});
    	})