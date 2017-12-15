		var id=document.getElementById('ID');//若在这儿加上.value则id的值是空的，因为此时还没有输入值
		var psw=document.getElementById('psw');
		var tt1=document.getElementById('tt1');
		var tt2=document.getElementById('tt2');
		
		$('#but').click(function(){
				$.ajax({
					type:'get',
					url:"http://datainfo.duapp.com/shopdata/userinfo.php",
					data:{status:'login',userID:id.value,
					password:psw.value
					},
					dataType:'json',
					success:function(data){
						console.log(data);
						if(data==0){
//							alert("用户名不存在，点击注册");	
							tt1.innerHTML='用户名不存在';
							tt1.style="color:red;"
//						    location.href='signup.html';
						}
						else if(data==2){
//							alert("用户名密码不符");
//							location.href="signin.html";
							tt2.innerHTML='密码不正确';
							tt2.style="color:red;"
						}
						else{
							window.localStorage.setItem('user',id.value);
							location.href='list.html';
						}
						
					},
					error:function(){						
						console.log('wrong!')
					}
				})	
			})