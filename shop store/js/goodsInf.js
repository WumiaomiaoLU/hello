var goodsId=window.location.hash.slice(1);
		$.ajax({
			type:"get",
			url:"http://datainfo.duapp.com/shopdata/getGoods.php",
			dataType:'jsonp',
			data:{goodsID:goodsId},
			success:function(data){
				$('#image').html($('#image').html()+`<img class="ps" src="`+data[0].goodsListImg+`">`);
				$('#info').html(data[0].goodsName);
				$('#price').html($('#price').html()+`<p style="font-size:0.4rem; color:red;">￥`+data[0].price+`</p>`);
			}
		});
		//跳转到购物车页面

//		$('#shoppingCar').on('click',function(){
//			setTimeout(function(){
//				window.location.href="shoppingCar.html#"+goodsId;
//			},2000);
//		})
		
		var layer=document.createElement("div");
		layer.id="layer";
//		$('#shoppingCar').on('click',function(){
//			if(!window.localStorage.getItem("user")){
//				location.href="signin.html";
//				return;
//			}
//		    
//		})
		
		
		//更新购物车
		//用户id获取
		var userId=window.localStorage.getItem('user');
		$('#shoppingCar').on('click',function(){
			if(!window.localStorage.getItem("user")){
				location.href="signin.html";
			}else{
				$.ajax({
					type:"get",
					url:"http://datainfo.duapp.com/shopdata/updatecar.php",
					data:{goodsID:goodsId,userID:userId,number:1},
					success:function(data){
						console.log(data);
						var style={
					        background:"#F8F8F8",
					        position:"absolute",
			//		        zIndex:10,
					        width:"6rem",
					        height:"0.8rem",
					        left:"0.7rem",
					        top:"2.5rem",
					        borderRadius:"0.5rem"
					    }
					    layer.innerHTML="<p style='color: black; font-size: 0.4rem;text-align: center;margin-top: 0.2rem;'>添加成功！</p>";
					    for(var i in style)
					        layer.style[i]=style[i];   
					    if(document.getElementById("layer")==null)
					    {
					        document.body.appendChild(layer);
					        setTimeout(function(){
					        	document.body.removeChild(layer);
					        	window.location.href="shoppingCar.html";
					        },1000)
					        
					    }
					}
				});
			}
//			console.log(222);
			
		})