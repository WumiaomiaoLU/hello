$('#username').html(window.localStorage.getItem("user"));
document.getElementById('out').onclick=function(){
			window.localStorage.removeItem('user');
			window.localStorage.removeItem('used');
			location.href='list.html';
		}