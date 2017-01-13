// JavaScript Document

var carApp = {
	
	display: function(id)
		{
				var x = carApp.$$(id);
				x.style.display = 'block'; x.style.height = 'auto';
				
			},
	hide: function(id)
		{
				var x = carApp.$$(id);
				x.style.display = 'none'; x.style.height = 'auto';
				
			},
	
	$$: 	function(x){
		return xyc = document.getElementById(x);
		},
	getInv: function(){
		//alert("hello");
		var ajax = new XMLHttpRequest();
		var formdata = new FormData();
			formdata.append("make_id", 13);
			formdata.append("what", "it works");
			carApp.display("test");
		ajax.open("POST", "http://www.45graphics.net/api/salecarro.php", true);
		ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		ajax.onreadystatechange = function(){
			if(ajax.readyState == 4 && ajax.status == 200){
				//var data = JSON.parse(event.target.responseText);
				var data = JSON.parse(ajax.responseText);
			//	alert("working with data "+ data);
				for(var i=0; i<data.length; i++){
				console.log(data[i].make +" "+data[i].number);
				if(data[i].make != ""){
					carApp.createInventory("ul", data[i].make, data[i].number, data[i].make_id);
				}}
			carApp.hide("loader");
				}
			}
		
		ajax.send(formdata);
		//show('test');
		},
		
	createInventory: function(ul, make, number, makeId){
		//alert("sup");
			var ul = carApp.$$(ul);
			var li = document.createElement("li");
			var span = document.createElement("span");
			var a = document.createElement("a");
				a.setAttribute("href", "pages/cars-by-make.html?makeId="+makeId);
				a.innerHTML = make;
				console.log("create inventory");
			var number = document.createTextNode(number);
				
				li.appendChild(a);
				span.appendChild(number);
				a.appendChild(span);
				ul.appendChild(li);
				
		}
		
}

