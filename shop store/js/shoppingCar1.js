//ȫѡ
		function checkAll(name) { 
					var el = document.getElementsByClassName('box'); 
					var len = el.length; 
					for(var i=0; i<len; i++){ 
							el[i].checked = true; 
					} 
				} 
				function clearAll(name) { 
					var el = document.getElementsByClassName('box');
					var len = el.length; 
					for(var i=0; i<len; i++){ 
						el[i].checked = false;
					} 
				} 