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
	
	$$: function(x){
		return xyc = document.getElementById(x);
		},
		
		
	getInv: function(){
		//alert("hello");
		
		var theul = carApp.$$("ulMakes");
			theul.innerHTML = "";
		
		var ajax = "";	
			ajax = new XMLHttpRequest();
		var formdata = new FormData();
			formdata.append("make_id", 16);
			formdata.append("what", "it works");
			//display it here
			carApp.display("carsByMake");
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
					carApp.createInventory("ulMakes", data[i].make, data[i].number, data[i].make_id);
				}}
			carApp.hide("loader2");
				}
			}
		
		ajax.send(formdata);
		//show('test');
		},
		
	createInventory: function(ul, make, number, makeId){
		//alert("sup");
			var ul = carApp.$$(ul);
			
			//ul.innerHTML = "";
			
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


carAPI = {
	
	
	byId: function(x){
		return document.getElementById(x);
		},
	
	displayIfLoggedIn: function(){
		
		
		var b = carAPI.byId("minA");
		//<a href="pages/my-account.html">Account settings</a>
		var a = document.createElement("a");
			a.setAttribute("href", "pages/my-account.html");
			a.innerHTML = "Account Settings";
			b.appendChild(a);
		
		
		},
	
	getUserData: function(){
		
		if(localStorage.getItem("userIdCar")){
			
			var ajax = "";
				ajax = new XMLHttpRequest();
		var formdata = new FormData();
			formdata.append("module", "companyData");
			formdata.append("user_id", localStorage.getItem("userIdCar"));
			
		ajax.open("POST", "http://www.salecarro.com/api/api1.php", true);
			//ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			ajax.send(formdata);
			
			ajax.onreadystatechange = function(){
			if(ajax.readyState == 4 && ajax.status == 200){
				var data ="";
				data = JSON.parse(ajax.responseText);
				//newdata = JSON.stringify(data);
				//var a = ("userid", "businessName", "website", "first", "last", "phoneNumber", "userName", "email", "password");
				for(var key in data){
				console.log(key+ " ------- " +data[key]+" ==============================");
				if(carAPI.byId(key)){
				carAPI.byId(key).value = data[key];
				
							}
						}
			
					}
				}
			
			}
		},
	
	updateUserData: function(){
		
		var inputs = formAsh.numberOfInputs();
		var formdata = new FormData();
		formdata.append("user_id", localStorage.getItem("userIdCar"));
		formdata.append("module", "updateCompanyData");
		for(var key in inputs ){
			
			if(inputs[key].id != "" && inputs[key].id != undefined){
			console.log(inputs[key].id+"'''''"+ inputs[key].value);
			formdata.append(inputs[key].id, inputs[key].value);
				}
			}
			
			
			ajax = new XMLHttpRequest();
				
		ajax.open("POST", "http://www.salecarro.com/api/api1.php", true);
			//ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			ajax.send(formdata);
			
			ajax.onreadystatechange = function(){
			if(ajax.readyState == 4 && ajax.status == 200){
				var data ="";
				//data = JSON.parse(ajax.responseText);
				//newdata = JSON.stringify(data);
				
				alert(ajax.responseText);
				window.history.back();
			
					}
				}
			
			
		},
	
	barOverlay: function(){
		
		
		
			window.addEventListener("touchstart", function(event){
				
				var overlay = carAPI.byId('barOverlay');
				var bar = carAPI.byId('bar');
					if(event.target.id == overlay.id){
						
						bar.style.width = "0%";
						bar.style.transition = "width .4s linear 0s";
						overlay.style.width = "0%";
						overlay.style.transition = "width .3s linear 0s";
						console.log(event.target.id);
						
						}
				
				});
		
		}
	
	
	
	}
	
	
if(localStorage.getItem("userIdCar")){
carAPI.displayIfLoggedIn();
}
//carAPI.barOverlay();


var pn = {
	
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        console.log('Received Device Ready Event');
        console.log('calling setup push');
        pn.setupPush();
    },
	
    setupPush: function() {
        console.log('calling push init');
        var push = PushNotification.init({
            "android": {
                //"senderID": "eElVSOVofa8"
				 "senderID": 291568499285
				//eElVSOVofa8
            },
            "browser": {},
            "ios": {
                "sound": true,
                "vibration": true,
                "badge": true
            },
            "windows": {}
        });
        console.log('after init');

        push.on('registration', function(data) {
            console.log('registration event: ' + data.registrationId);
			//localStorage.setItem('registrationId', data.registrationId);
			//alert(data.registrationId);
            var oldRegId = localStorage.getItem('registrationId');
			//localStorage.setItem('registrationId', data.registrationId);
			
			 //alert(data.registrationId);
            
			var appName = "salecarro";
 			var appCategory = "pushNotifications";
			var d = new Date();
			var appRegistration = d.getFullYear()+"-"+ d.getMonth() +"-"+ d.getDate();
			
 			//var appUserName = prompt("your name", "");
				
			//if (oldRegId) {
			//if(oldRegId) { //testing account     working one
			if(oldRegId !== data.registrationId) { //working one
                // Save new registration ID
                localStorage.setItem('registrationId', data.registrationId);
				// Post registrationId to your app server as the value has changed
				
				x = new XMLHttpRequest();
				//alert(device.model+ " " +device.uuid +" "+device.platform)
				var sendData  = "?regid="+data.registrationId;
					sendData += "&appName="+escape(appName);
					sendData += "&appCategory="+escape(appCategory);
					sendData += "&appRegistration="+escape(appRegistration);
					sendData += "&deviceModel="+escape(device.model);
					sendData += "&uuid="+escape(device.uuid);
					sendData += "&devicePlatform="+escape(device.platform);
					
					
				x.open("GET", "http://45graphics.net/curlTest/index.php"+sendData, true);
				x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				x.onreadystatechange = function(){
						if(x.readyState == 4 && x.status == 200){
							//alert(x.responseText);
						}
				}
		
			x.send();
				}

           // var parentElement = document.getElementById('registration');
           // var listeningElement = parentElement.querySelector('.waiting');
            //var receivedElement = parentElement.querySelector('.received');

            //listeningElement.setAttribute('style', 'display:none;');
            //receivedElement.setAttribute('style', 'display:block;');
        });

        push.on('error', function(e) {
            console.log("push error = " + e.message);
        });
	

        push.on('notification', function(data) {
            //console.log('notification event');
			//var ul = document.getElementById("targetbaby");
			//var li = document.createElement("li");
				//li.innerHTML =  data.title+" "+data.message;
				//ul.appendChild(li); 
            navigator.notification.alert(
                data.message,          // message
                null,                 // callback
               data.title,           // title
				'Ok'                // buttonName
            );
			
       });
    }
};
pn.initialize();