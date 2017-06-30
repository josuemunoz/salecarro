// JavaScript Document

var formAsh = {
	
	byId_: function(x){
			return document.getElementById(x);
		},
	byTagName: function(x){
			return document.getElementsByTagName(x);
		},
	clearInputs: function(){
		
		var x = formAsh.numberOfInputs();
		for(var i=0; i<x.length-1; i++){
			 formAsh.byId_(x[i].name).value = "";
			
			}
		
		},
	
	saveData: function(){
		//email, text, save for a type testimonial, ect------------------------------------
		var f = formAsh.numberOfInputs();
		var t = formAsh.numberOfTextAreas();
		//alert(t.length);
		console.log("Number of formAsh fields: "+ f.length);
		
		var sendData = "";
		var hasValue = "";
			//sendData = "?email="+this.email+"&password="+this.password;
			//sendData = "?number="+f.length;
			//var i = "";
			
			
			sendData = "?number="+escape(f.length)+"&module=createAccount";
			if(t.length > 0){
				for(var j=0; j<t.length; j++){
				sendData += "&"+escape(t[j].name)+"="+escape(t[j].value);
					
					}
					
				}
			
			for(var i=0; i<f.length-1; i++)
				{
					console.log("&"+f[i].name+"="+f[i].value);
			  		sendData += "&"+escape(f[i].name)+"="+escape(f[i].value);
					d = f[i].value;
					x = formAsh.byId_(f[i].id);
					if(d.length > 0){
					++hasValue;
							x.style.border = "";
							x.style.backgroundColor = "";
						}else{
							 
							x.style.border = "1px solid red";
							x.style.backgroundColor = "white";
							}
					}
					
			if(hasValue == 4){
	   		//alert(sendData);
			
			
				x = new XMLHttpRequest();
				x.open("GET", "http://www.salecarro.com/api/api1.php"+sendData, true);
//				x.setRequestHeader("Content-type", "application/x-www-formAsh-urlencoded");
				x.onreadystatechange = function(){
					if(x.readyState == 4 && x.status == 200){
						var r = JSON.parse(x.responseText);
						if(r.status == 1){
							formAsh.clearInputs();
							alert(r.result);
						}
					if(r.status == 0){
							alert(r.result);
							}
					}
				}
				
				x.send();
				}else{
				alert("Fields cannot be empty!");
				}
		
		},
	
	numberOfInputs: function(){
		
			return formAsh.byTagName("input");
			
		},
	numberOfTextAreas: function(){
		
			return formAsh.byTagName("textarea");
		
		}
	
	}

var carApp = {
	
	viewCar: function(){
		var x = "";
			x = location.search.substr(0).split("=");
			//x[1];
			
			var ajax = "";	
			ajax = new XMLHttpRequest();
		var formdata = new FormData();
			formdata.append("carid", x[1]);
			formdata.append("what", "it works");
			formdata.append("module", "carView");
			
		ajax.open("POST", "http://www.salecarro.com/api/api1.php", true);
		//ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		ajax.onreadystatechange = function(){
			if(ajax.readyState == 4 && ajax.status == 200){
				
				var data = JSON.parse(ajax.responseText);
					//alert("the price is " + data['price']);
					var target = document.getElementById("inventory");
						//clear the view
						target.innerHTML = "";
					var img = document.createElement("img");
						img.setAttribute("class", "borderwhite");
						img.setAttribute("width", "100%");
						img.setAttribute("src", data['image']);
						
						
						var ul = document.createElement("ul");
							ul.setAttribute("id", "left");
							
						var d = ["price", "miles", "make", "model", "vinnumber", "notes", "color", "interiorcolor"];
						var D = ["Price", "Miles", "Make", "Model", "Vin Number", "Notes", "Exterior Color", "Iterior Color"]
						target.appendChild(img);
						
						var call = carApp.$$("call");
						var a = document.createElement("a");
							a.setAttribute("href", "tel:"+data['business']['business']);
							call.innerHTML = data['business']['phone'];
							call.appendChild(a);
							//call.onclick = function(){
								
								//alert("will call");
								//}
							
						
						for(var i=0; i<d.length; i++)
						{
							if(data[d[i]] != null){
							var li = document.createElement("li");
								li.setAttribute("value", d[i].toUpperCase());
								li.innerHTML = D[i]+": "+ data[d[i]];
								li.setAttribute("id", "left");
								ul.appendChild(li);
				
							}
						}
							
							  if(data['business']['business'] != null){
								li.innerHTML = data['business']['business'];
								ul.appendChild(li);
							  }
							target.appendChild(ul);
						
							
				}
				
			}
		
		ajax.send(formdata);
			
			
			
		},
		
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
		var ajax = "";	
			ajax = new XMLHttpRequest();
		var formdata = new FormData();
			formdata.append("make_id", 16);
			formdata.append("what", "it works");
			carApp.display("test");
		ajax.open("POST", "http://www.45graphics.net/api/salecarro.php", true);
		//ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
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

