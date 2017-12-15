		if(window.localStorage.getItem("used")){
			location.href="list.html";
		}
		$('#btnpos').on('click',function(){
			location.href="list.html";
			window.localStorage.setItem("used","true");
		})