var id=document.getElementById('ID');
		var psw=document.getElementById('psw');
		var repsw=document.getElementById('repsw');
		var tt1=document.getElementById('tt1');
		var tt2=document.getElementById('tt2');
		
		$('#but').click(function(){
				$.ajax({
					type:'get',
					url:"http://datainfo.duapp.com/shopdata/userinfo.php",
					data:{status:'register',userID:id.value,
					password:psw.value
					},
					dataType:'json',
					success:function(data){
						if(data==0){
//							alert('用户重命名,点击“确定”重新注册');

							tt1.innerHTML="用户名重复";
							tt1.style="color:red";
//							location.href='signup.html';
						}
						else if(data==2){
							alert('数据库报错,点击“确定”重新注册');
							location.href='signup.html';
						}
						else if(psw.value==repsw.value){
							console.log('注册成功');
							location.href='signin.html';
						}
						else{
//							alert('请确认两次输入的密码一致！');
//							location.href='signup.html';
							tt2.innerHTML="两次密码不一致";
							tt2.style="color:red;";
						}
					},
					error:function(){
						alert('something wrong!');
					}
				})	
			})