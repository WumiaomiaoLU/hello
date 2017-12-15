var userId=window.localStorage.getItem('user');
		$.ajax({
			type:"get",
			url:"http://datainfo.duapp.com/shopdata/getCar.php",
			dataType:'jsonp',
			data:{userID:userId},
			success:function(data){
				//列表
				
				for(var i=0;i<data.length;i++){
					$('#info').html($('#info').html()+`<input type="checkbox" class="box">
					<label for="chose">
					<img class="checkpic" src="`+data[i].goodsListImg+`">
					<p class="checkp">`+data[i].goodsName+`</br>￥`+parseInt(data[i].price)+`</p>
					<img class="imgpos" src="images/trash (2).png"></label>`);
				}
				
				//合计
				var sum=0;
				var box=document.getElementsByClassName('box');
				//console.log(box.length);
				for(let i=0;i<box.length;i++){
					let count=0;
					
						box[i].onclick=function(){
						if(count%2==0){
								sum+=parseInt(data[i].price);

						}
						else{
							sum-=parseInt(data[i].price);
						}
						document.getElementById('heji').innerHTML=sum;
						count++;
					}
				}
				
				
				//全选合计
				var k=0;
				document.getElementById('radio-choice-1').onclick=function(){
					
					var sum1=0;
					
					if(k%2==0){
						for(let i=0;i<data.length;i++){
							sum1+=parseInt(parseInt(data[i].price));
						}
						document.getElementById('heji').innerHTML=sum1;
						checkAll('productId');
						
					}
					else{
						document.getElementById('heji').innerHTML=0;
						clearAll('productId')
					}
					k++;
				}
				
				//全选控制
				$(".box").bind({  
				    change:function(){ 
				        $(".box").each(function(){                  //遍历每个.box的checkbox  
				            if($(this).prop("checked")==false){     //如果box取消选中  
				                $(this).removeAttr("checked");      //先删除它的checked属性，便于统计被选中的box  
				                $("#radio-choice-1").removeAttr("checked");  
				            }  
				            else{  
				                $(this).prop("checked",true);		//如果box被选中，页面显示选中  
				                $(this).attr("checked","checked");	//ecked属性值设置为checked  
				                }  
				        });  
				
				        var checkedLength=$(".box[checked='checked']").length;//attr方法赋值checked都为计算出子checkbox的长度  
				        var subLength=$(".box").length;  
				        //如果所有的子checkbox个数不等于选中的checkbox的个数，就取消全选框的对号  
				        if(subLength!=checkedLength){  
				            $("#radio-choice-1").prop("checked",false);  
				            }  
				        else{								//如果所有的子checkbox被选中，全选框也全选中  
				            $("#radio-choice-1").attr("checked","checked");  
				            $("#radio-choice-1").prop("checked",true);  
				        }  		          
				    }  
				});  
				
				
				//删除商品
				var imgpos=document.getElementsByClassName("imgpos");
				
				for(let i=0;i<data.length;i++){
					$(imgpos[i]).on('click',function(){
						$.ajax({
							type:"get",
							url:"http://datainfo.duapp.com/shopdata/updatecar.php",
							data:{goodsID:data[i].goodsID,userID:userId,number:0},
							success:function(data){
								console.log('shanchucheng');
								location.reload();
							}
						});
					});
				}
				
				
			}
		});