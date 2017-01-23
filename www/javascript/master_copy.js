// JavaScript Document
var request = null;

   try {
     request = new XMLHttpRequest();
   } catch (trymicrosoft) {
     try {
       request = new ActiveXObject("Msxml2.XMLHTTP");
     } catch (othermicrosoft) {
       try {
         request = new ActiveXObject("Microsoft.XMLHTTP");
       } catch (failed) {
         request = null;
       }
     }
   }

   if (request == null)
     alert("Error creating request object!");
	 
//variables
var f = '';

/*
this.id
functions
uploadPhoto() 740
capturePhoto()  	794  	
displayItem()		461	
getPage() 		39
getUrlVars() 		855
logIn()			545
loading(id)		356
displayItem()		479
checkConnection()	852
show()			408
getCar()	
extraPicture(id)	960
carEntry()
*/
		
//gets emlemeny by id
function $$(x){
	return document.getElementById(x);
	}
	setCurrentID();
function setCurrentID(){
		
		var currentID = $$("currentID");
			currentID.innerHTML = localStorage.getItem('userIdCar');
		
		}
function date() // will return the date for data entry
{
date = new Date();
y = date.getFullYear();
m = date.getMonth()+1;
	if(m<10){newm = '0'+m; }else{ newm = m;}
d = date.getDate();
	if(d<10){newdate = '0'+d; }else{ newdate = d;}

return y +'-'+ newm+'-'+newdate;
}
//alert(navigator.platform);
function getPage(page, target)
	{
		this.page 	= page;
		this.target = target;
		
		this.Page = this.page.substring(0,16);
		this.PageCarDealer = this.page.substring(0,14);
		this.model = this.page.substring(0,10);
		
		//$$("testA").innerHTML = page+'<br/>';
		if(this.page == 'dataEntryCar.php')
			{
		
		var makeId 	= $$('MAKE').value;
		var make   	= selectedText('MAKE');
		var modelId	= $$('MODEL').value;
		var model	= selectedText('MODEL');
		var year	= $$('YEAR').value;
		var price	= $$('PRICE').value;
		var miles	= $$('MILES').value;
		var notes = $$('DESCRIPTION').value;
		var citytosell = '619';//needs to fix this please
			
		if(navigator.platform != 'Win32'){
			url	="http://www.45graphics.net/camera/pages/dataEntryCar.php";
		}else{
				url	="dataEntryCar.php";
				}
			var a = getUrlVars()["car"];
			var citytosell = getUrlVars()["citytosell"];
			url	+= '?id_car='+a;
			url += '&notReady='+0;
			url += '&miles=none';
			url += '&model='+model;
			url += '&model_id='+modelId;
			url += '&Model_name='+model;
			url += '&make='+make;
			url += '&make_id='+makeId;
			url += '&price='+price;
			url += '&year='+year;
			url += '&miles='+miles;
			url += '&date_insert='+date();
			console.log('Fix line 89');
			//console.log(date());
			url += '&VarCarmod='+make+model+modelId;
			url += '&notes='+notes;
			url += '&City_To_Sell='+citytosell;
			//url += ''

			}
		if(this.model == 'models.php')
			{
				if(navigator.platform != 'Win32'){
				var url = 'http://45graphics.net/camera/ASSETS/extras/'+this.page;
				//alert('this is running');
				}else{
					//var url = '/camera/ASSETS/extras/'+this.page;
					var url = '/camera/ASSETS/extras/'+this.page;
				}
				}
		if(this.page == 'makesSelect.php')
			{
				if(navigator.platform != 'Win32'){
				var url = 'http://45graphics.net/camera/ASSETS/extras/'+this.page;
				//alert('this is running');
				}else{
					//var url = '/camera/ASSETS/extras/'+this.page;
					var url = '/camera/ASSETS/extras/'+this.page;
					
				}
					}
		if(this.PageCarDealer == 'car-dealer.php')
			{
				console.log(this.PageCarDealer);
				if(navigator.platform != 'Win32'){ 
		var url = 'http://www.45graphics.net/camera/pages/'+this.page;
			}else{
		//var url = "car_ajax/" + this.page;
		var url = this.page;
		console.log('Running this ' +this.page)
		}
				
				}
		if(this.Page == 'cars-by-make.php')
			{
				
				if(navigator.platform != 'Win32'){ 
				var url = "http://www.45graphics.net/camera/pages/" + this.page;
				//var url = this.page;
				//alert('running the droid code');
				//alert('debug mode');
				
				}else{
				console.log('running thw windows system:');
				var url =  this.page;
				
			}
				}
				/*
		if(page == 'makes.php')
			{
				
				if(navigator.platform != 'Win32'){
					console.log('make.php running debig mode:');
				var url = "http://www.45graphics.net/camera/pages/" + this.page;
				//var url = "/pages/" + this.page;
				}else{
				var url = 'pages/' + this.page;
				//var url = "http://www.45graphics.net/camera/pages/" + this.page;
				alert("fix line 171");
				}
				
			}
			*/
		if(page == 'app_car_dealer_list.php')
			{
			if(navigator.platform != 'Win32'){ 
		var url = "http://45graphics.net/camera/pages/" + this.page;
		//var url = this.page;
			}else{
		//var url = "car_ajax/" + this.page;
		var url = 'pages/'+this.page;
		}
		}
		if(page == 'my-car-inventory.php')
			{ 
				var userid =   localStorage.getItem('userIdCar'); //
				//alert('running'+this.PageMyCarInventory);
				if(userid != null && userid != ''){
				if(navigator.platform != 'Win32'){
					
					
					
					var url = 'http://45graphics.net/camera/pages/'+this.page+ "?userId=" + userid;
					 console.log('my-car-inventory.php ran: ');
					 console.log('userID = '+ userid);
					}else{
						 var url = this.page+ "?userId=" + userid;
						}
					}
				}
		if(page == 'more-info-on-app.html')
			{
			var url = "pages/" + this.page;
			}
		if(page == 'users.php')
			{
			if(navigator.platform != 'Win32'){
			LogIn();//line 493
			console.warn('Dont forget to fix line 63!');
			var url = "http://www.45graphics.net/camera/pages/" + this.page;
			
				url += '?email='+username;
				url += '&password='+password;
			//alert('testing from 1st line, with '+username+' and '+password);
			console.log('function getPage() executed:');
			console.log('#####'+username + password);
			}else{
				//function in line 493
				LogIn();
			
			//for debugging on web page
			//
			//////////////////////////////////////////////////////////////////////
			var url = "pages/" + this.page;
			//var url = "http://www.45graphics.net/camera/pages/" + this.page;
			//////////////////////////////////////////////////////////////////////
			//for actual app debugging
			console.warn('Dont forget to fix line 63!');
			//var url = "http://www.45graphics.net/camera/pages/" + this.page;
			
				url += '?email='+username;
				url += '&password='+password;
			
			console.log('function getPage() executed: from line 237 else');
			console.log('#####'+username + password);
			console.log(date());
				}
			}
		if(page != 'models.php'){
			loading(target);
		show(target);
		}
		
		//var url = "http://www.sandiegoirongates.com/m/categories.php?type=" + escape(make);
		
		request.open("GET", url, true);
		request.onreadystatechange = getPageUpdate; //line 92
		request.send(null);
	}
	
//needs work!!!
function getCar()
	{
	loading('west');
	
  	var make = document.getElementById("make").value;
  	var url = "car_search.php?make=" + escape(make);
 			request.open("GET", url, true);
			//function that updates the page when info is ready
  			request.onreadystatechange = updatePage;
  			request.send(null);
}

function getPageUpdate()
{
	//$$("testA").innerHTML = "getPageUpdate() is running";
	if (request.readyState == 4)
	{
		//alert(4 + "the target is "+target);
    	if (request.status == 200)
		{
			//alert(200);
   			var newdiv = document.getElementById(target);
			var userIcon = document.getElementById('c');
			var myText = '';
				myText = request.responseText;
			//this.myText = myText;  
			if(page != 'users.php')
				{
			 newdiv.innerHTML = request.responseText;
				//var p = document.createElement('p');
				console.log('Page is not users.php so it runs line 100-103');
				//console.log(request.responseText);
				
				}
				
			
			if(page == 'users.php')
				{//starts users.php
							//var c = document.getElementById('c');
							
							var a = myText.indexOf('blue');
							if(a>0)
								{
								
								var start = myText.indexOf('<div>');
								var end = myText.indexOf('</div>')+6;
								var newH = myText.substring(start,end);
								newdiv.innerHTML = newH; 
								console.log(newH);
								
								}
							var b = myText.indexOf('span');
							if(b>0)
								{
								var startB = myText.indexOf('<span>');
								var endB = myText.indexOf('</span>')+7;
								var newB = myText.substring(startB, endB);
								userIcon.innerHTML = newB; 
								console.log(newB);
								}else{
								var c = myText.indexOf('Try Again!');
							if(c>0)
								{
								var startC = myText.indexOf('<div>');
								var endC = myText.indexOf('</div>')+6;
								var newC = myText.substring(startC,endC);
								newdiv.innerHTML = newC; 
								console.log(newC);
								console.log('ran code RED line 126');
								HIDELOG();
								}
							}
							
							var D = myText.indexOf('userId');
							//alert(D);
						if(D>0)
							{
							var startD = myText.indexOf('<p')+18;
							var endD = myText.indexOf('</p>');
							var newD = myText.substring(startD,endD);
							//newdiv.innerHTML = newD;
							//setCookie('userId', newD, 30);
							
							this.id = localStorage.setItem('userIdCar',newD);
							//alert('this is now working '+ localStorage.getItem('userIdCar'));
							
							console.log('This is the userID: ' + newD);
							//alert('The number is: ' + parseInt(newD));
							//function setCookie(c_name,value,exdays)
							//var userOne = getCookie("userId");
							//if(userOne != null && userOne == ''){
							
							
							setTimeout('document.location.reload(true)',2500);
							//}
							
							}
					
				}//ends users.php
		}
	}
}

function GetPage(page) {
	//loading('west');
	hideHome();
  			var url = page;
 			request.open("GET", url, true);
			//function that updates the page when info is ready
  			request.onreadystatechange = updatePage;
  			request.send(null);
}

function josue(car_id, user_id)//constructor
	{
		this.carid = car_id;
		this.userid = user_id;
		this.showMore = showMore;
		this.updatePageMore = updatePageMore;
		this.newdiv;

		//this.hideLoader = hideLoader;
		this.displayItem = displayItem;
		this.showLoader = showLoader;
		
		}
		
function showLoader()
	{
		//code here
		var k = document.getElementById(d);
			k.style.display = 'block';
	}	
	
function showMore()
	{
		//work on  this function
		//displayItem();// this displays the notes
		
  		var url = "m_user_info.php?user=" + escape(this.userid);
 		request.open("GET", url, true);
		//function that updates the page when info is ready
  		request.onreadystatechange = this.updatePageMore;
  		request.send(null);
		showLoader();
		//alert(this.user_id);
	}
	
function loading(id)//loading status
	{
		
		var w = document.getElementById(id);
		var p = document.createElement("div");
		var br = document.createElement("br");
		p.setAttribute("id", "loader");
		p.setAttribute('class', 'loader');
		var txt = document.createTextNode('Loading...');
		//var txt = '<img src="assets/loader/ajax-loader.gif" width="32" height="32" />';
		var img = document.createElement("img");
		img.setAttribute('src', 'http://45graphics.net/camera/ASSETS/loader/ajax-loader.gif');
		img.setAttribute('width', '32');
		img.setAttribute('height', '32');
		
		
		w.appendChild(p);
		p.appendChild(img);
		p.appendChild(br);
		p.appendChild(txt);
		}	
//needs work!!!
function removeList()
	{
			//alert('it works');
		var x = document.getElementById('xx');
		var list = x.getElementsByTagName('li');
		var i;
		if(x.id != '')
		 {
		for(i=0; i<list.length; i++)
			{
				
				while(list.length > 0){
					x.removeChild(list[i]);
					//alert(list[i]);
					}
						}
		 }
		}
//needs work!!!
function moveIcons(id)
	{
		var sd = document.getElementById('D');
		sd.style.top = "-200px";
		show(id);
		
		}
//show() shows a specific div
function show(id)
	{
			//hideHome();
			var x = document.getElementById(id);
			x.style.display = 'block';
			x.style.height = 'auto';
			
		}
//displays the my inventory link if cookie is available	
function displayItem() //nothing here
	{
		var userA = localStorage.getItem('userIdCar');
		if(userA){
		var ho = document.getElementById('ho');
		console.log('There is a cookie available with value of: '+ userA);
		var div = document.createElement('div');
			div.setAttribute('id', 'h');
		var a = document.createElement('a');
		var img = document.createElement('img');
			img.setAttribute('src','http://45graphics.net/camera/ASSETS/icons/Android_notepad-download-letter_33.png');
			img.setAttribute('width', '80');
			img.setAttribute('height', '89');
		//var br = document.createElement('br');
		var br2 = document.createElement('br');
		
		var text = document.createTextNode('MY INVENTORY');
		
			a.setAttribute('href', 'pages/my-car-inventory.html?userId='+ escape(userA));
			div.appendChild(a);
			a.appendChild(img);
			//div.appendChild(br);
			div.appendChild(br2);
			div.appendChild(text);
			ho.appendChild(div);
		var place = document.getElementById('c');
			ho.insertBefore(div,place);
			hide('c');
			show('g');
		}else{
			hide('g')
			console.warn('Line 488: There is no cookie available!');
			}
}
		
		
function hideHome()
	{
			var homeV = document.getElementById('homeV');
				homeV.style.display = 'none';
			}
			
function GoBack(id)
	{
			var x = document.getElementById('homeV');
				x.style.display = 'block';
				hide(id);
				hide(target); hide('uploadCar');
				hide('carDealers');
				
				
		}
		
function takeMeBack(old, current)
	{
		var x = document.getElementById(old);
		var y = document.getElementById(current);
		
		x.style.display = 'block';
		y.style.display = 'none';
		}
		
function hide(id)
	{
			var x = document.getElementById(id);
				x.style.display = 'none';
				x.style.height = 'auto';
				x.innerHTML = '';
				console.log('hide function() ran.');
				//clearAll();
		}
		
function clearAll()
	{
		var x = document.getElementById('test');
			//x.innerHTML = '';
			
			x.style.height = 'auto';
			x.style.cssFloat = 'left';
			x.style.width = '100%';
		}
		
function LogIn()// log in user
{
	var username = false;
	var password = false;
		
	username = prompt('Your Email Address:', "");
	password = prompt('Your Password:', '');
			
		//if(username && password){
		if(username.length == ''  && password.length == ''){
				loginErrors();//line
				
				}else{
					console.log('function LogIn() executed:');
					this.username = username;
					this.password = password;
					validate();
					console.log(username + password);
					
	}		
}

function validate()// valiadates email and password
	{
		loginStatus();
		}

function loginStatus()
	{
		show("test");
		var x = $$('test');
			x.innerHTML = "<div class='blue'>Please Wait....</div>";
		}

function clearSession()//this function will remove the session html 5 baby
	{
		var con;
		con = confirm('Log out of app?');
		if(con){
		localStorage.clear();
		document.location.reload(true);
		
	}else{
		//nothig happens
	}
}

function setItems()
	{
	console.log('function setItems() is running.');
		var y = document.getElementById('test');
		var div = y.getElementsByTagName('div');
			for(var i=0; i<=div.length; i++)
				{
					console.log(div[i]);
				}  
	}
		
function loginErrors()
	{
		show("test");
		var x = $$('test');
			x.innerHTML = "<div class='red'>Your email and password are invalid!</div>";
			HIDELOG();
		}
		
function HIDELOG()
	{
		
		//setTimeout("hide('test')", 3000);
		setTimeout("animateThis()",4000);
		console.log('hidding item');
		console.log("HIDELOG function() ran.");
	}

function animateThis()//animateThis call animate() and animates up	
	{
	var x = $$('test');
		console.log(x.offsetHeight);
		console.log(x.offsetWidth);
		this.a = setInterval('animate()',5);
		}

function animate()//animate needs work
	{
		
	x = document.getElementById('test');
	var d=x.offsetHeight;

		if(x.offsetHeight <= 500){
		d--;
		}
		
		if(x.offsetHeight <= 3){
			clearInterval(this.a);
			hide('test');
			}
		
		x.style.height = Math.round(d)-2 +'px';
		
		console.log('running animate function' + x.offsetHeight);	
		}
	
function dayOrNight()//needs work!!	
	{
		//d = new Date();
		//console.log('Its this time now: '+ d.getHours() + ' hours');
		}
		
function Year()
	{
		var y = document.getElementById('footer');
		f = new Date();
		}
		

	// JavaScript Document
/*camera************************************************************************************/

function win(r) {
            console.log("Code = " + r.responseCode);
            console.log("Response = " + r.response);
            console.log("Sent = " + r.bytesSent);
        }

        function fail(error) {
            console.log("An error has occurred: Code = " + error.code);
            console.log("upload error source " + error.source);
            console.log("upload error target " + error.target);
			/*
			this.imageURI = imageURI;
										this.imageData = imageData;
										this.FILE_URI = FILE_URI;
										this.DATA_URL = DATA_URL;
        */
		
		}
// Wait for Cordova to connect with the device
document.addEventListener("deviceready",onDeviceReady,false);

    var pictureSource;   // picture source
    var destinationType; // sets the format of returned value 
	
function onDeviceReady() {
	
console.log(navigator.camera);	
       pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
		//alert('its ready');
		
    }

function onPhotoDataSuccess(FILE_URI) { // Called when a photo is successfully retrieved
    // Uncomment to view the base64 encoded image data
      // console.log(imageData);
	  //this.imageURI = imageURI;
		//this.imageData = imageData;
		//this.FILE_URI = FILE_URI;
	
	 
	   console.log("Picture created succefully.");
	//var E = document.getElementById('error');
		
      // Get image handle
      //
	  show('test')
      var smallImage = document.getElementById('smallImage');

      // Unhide image elements
      //
      smallImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      smallImage.src = FILE_URI;
	  //smallImage.src = DATA_URL;
	 // uploadPhoto();
	  //E.innerHTML = imageURI;
	  //alert("Image uploaded");
	  imageLoaded();								
	//console.log(this.imageURI +"**" + this.imageData+"**"+this.FILE_URI+"**"+this.DATA_URL);
	}

function imageLoaded()//image loaded will display after image loaded
	{
		var x = document.getElementById('test');
		var text = document.createTextNode('Image Uploaded :)');
		var green = document.createElement('div');
			
			x.appendChild(green);
			green.appendChild(text);
			green.setAttribute('class', 'green');
			show('test')
			clearAll();//line 500
			setTimeout("animateThis()",5000);
		}
		

function capturePhoto() {
    // Take picture using device camera and retrieve image as base64-encoded string
	//alert("testing click"+ " "+ localStorage.getItem('userIdCar'));
	//alert(navigator.platform);
	//setTimeout(
      navigator.camera.getPicture(uploadPhoto, onFail, {
		  	quality: 90,
			targetWidth: 700,
			targetHeight:600,
			sourceType: Camera.PictureSourceType.CAMERA,
			destinationType: Camera.DestinationType.FILE_URI,
			encondingType: Camera.EncodingType.JPEG,
			correctOrientation: true
			});//, 500);
			
			
      		//
	}
	
	//
//function uploadPhoto(NATIVE_URI){
	function uploadPhoto(imageData){
		
	//alert(imageData);
	var options = new FileUploadOptions();
				options.fileKey="file";
				options.fileName=imageData.substr(imageData.lastIndexOf('/')+1)+'.jpg';
				options.mimeType="image/jpeg";
				options.chunkedMode = false;
				var ft = new FileTransfer();
				var c = localStorage.getItem('userIdCar');
				ft.upload(imageData, "http://www.salecarro.com/uploadTest/test_upload.php?user="+c, win, fail, options, true);
				onPhotoDataSuccess(imageData);				
        
		}
		
function onPhotoURISuccess(imageURI){
    	var largeImage = $$('test');
     	largeImage.style.display = 'block';
    }

/*
function capturePhotoEdit()
	{
		// Take picture using device camera, allow edit, and retrieve image as base64-encoded string  
		navigator.camera.getPicture(uploadPhoto, onFail, { quality: 100, targetWidth: 700,
		targetHeight:600, allowEdit: true,
		destinationType: destinationType.DATA_URL });
    }


function getPhoto(source)
	{
     // Retrieve image file location from specified source
      navigator.camera.getPicture(uploadPhoto, onFail, { quality: 90, 
      destinationType: destinationType.FILE_URI,
      sourceType: source });
    }
 */
function onFail(message)
	{
     alert('Failed because: ' + message);
    }
	
		
		
		/*camera ends***************************************************************/

function whatURLhas(){
	var a = getUrlVars()["makeId"];
	var bb = document.getElementById('B');
	bb.setAttribute("onload", "getPage('cars-by-make.php?makeId="+a+"','inventory')");
}

function carDealerLink(){
	var a = getUrlVars()["user_id"];
	var bb = document.getElementById('B');
	bb.setAttribute("onload", "getPage('car-dealer.php?user_id="+a+"','inventory')");
}

function getUrlVars(){
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
   });
    return vars;
}

function getUrl(start, end, spaceA, spaceB, html, myFunctionA, yell){
	var x = window.location.href.toString();
	if(yell){alert(x)};
	var START = x.indexOf(start)+spaceA;
	var END = x.indexOf(end)+spaceB;
	this.newUrl = x.substring(START,END);
	//alert(NEW);
	if(this.newUrl == 'car-dealer.html'){
		carDealerLink();
		}
	if(this.newUrl == 'cars-by-make.html'){
		whatURLhas();
		}
}
//the last variable if set to yes will alert url
getUrl('pages/', '?', 6,0, 'cars-by-make.html', 'whatURLhas','');
getUrl('pages/', '?', 6,0, 'car-dealer.html',   'carDealerLink','');
//check connection type

function populateList()
	{	
		$$('MODEL').innerHTML =  '<option>LOADING......</option>';
		
		//$('MODEL').style.color = 'green';
		
		var s = document.getElementById('MAKE');
		var v =  s.value;
		console.log('Running populateList();')
		var x = document.getElementById("MODEL").id;
			if(x == 'MODEL'){
				
				getPage('models.php?make_id='+v, x);
				//$('MODEL').style.color = 'black';
				
			}
			
		}
		
/*
	//creates a database locally
//databaseOne();
function databaseOne()
	{
		//var db = window.openDatabase('vtknlks_bikes', '5.5.23', 'bikes',10000);
		var db = window.openDatabase('vtknlks_bikes', '', 'products', 10000);
			db.transaction(populateDB, errorCB, successCB);
			
			
		}
function populateDB(tx) {
     tx.executeSql('DROP TABLE IF EXISTS DEMO');
     tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
     tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
     //tx.executeSql('INSERT INTO products (name, year) VALUES ("josue munoz rules", "2013")');
}

function errorCB(err) {
    alert("Error processing SQL: "+err.code);
}

function successCB() {
    alert("success!");
}
*/

function carEntry()
	{
		getPage('dataEntryCar.php','test');
	}
		
function selectedText(x)
	{	
		var terminal = $$(x);
		var s = terminal.options[terminal.selectedIndex].text;
		return s;
		}
	

function addOption(selectbox, value, text)
	{
		
		var optn = document.createElement("option");
			optn.text = text;
			optn.value = value;
			selectbox.options.add(optn);
		}

function populateCarEdit(id_car)
	{
		r = '';
		url = '';
		r = new XMLHttpRequest();
		
		if(navigator.platform != 'Win32'){
				var url = 'http://45graphics.net/camera/pages/';
					url += 'car-edit-info.php';
					url += '?id_car='+escape(id_car);	
				}else{
					//var url = '/camera/ASSETS/extras/'+this.page;
					url = 'car-edit-info.php';
					url += '?id_car='+escape(id_car);
					
				}
		
		
		
		
		r.open("GET", url, true);
		r.setRequestHeader("Content-type", "application/json");
		r.onreadystatechange = function(){
			
		if (r.readyState == 4 && r.status == 200)
		{
		
		var v = ['YEAR', 'MILES', 'PRICE', 'DESCRIPTION'];
		var y = ['year', 'miles', 'price', 'notes'];
		var	car = JSON.parse(r.responseText);
		//console.log(car.price);
			for(var i=0; i<v.length; i++){
				//console.log(v[i]+'='+car.item(i).firstChild.nodeValue);
				$$(v[i]).value = car[y[i]];
				}
			
		var make = '';
			make = $$("MAKE");
			make.setAttribute('value', car.make_id);
			make.value = car.make_id;
			//console.log(make.getAttribute('value'));
		var model = '';
			model = $$("MODEL");
			addOption(model,car.model_id,car.model_name);
			//console.log(model.getAttribute('value'));
		
		
	}
			
			}
		r.send(null);	
		
		//console.log(getUrlVars()["car"]);
	}
	
function setFooter(){
	var str=document.URL;
	var n=str.indexOf("pages");
	if(n<0){

	var 	x = $$("footer");
	var 	year = new Date();
	year = 	year.getFullYear();
	var c = localStorage.getItem('userIdCar');
	
	if(c){
		console.log(c+' ran setFooter() function'); 
		return	x.innerHTML = '<h3>SaleCarro '+ year +' | <span id=\"logOut\"><a href=\"#\" onClick=\"clearSession();">log-Out</a></span></h3>';
		//return	x.innerHTML = '<h3>SaleCarro '+ year +' | <span id=\"logOut\"><a href=\"#\" onClick=\"clearCookie(\'userId\')\">log-Out</a></span></h3>';
	}else{
		return	x.innerHTML = '<h3>SaleCarro '+ year +'</h3>';
		}
	}
	
}

function extraPicture(id)
	{
		var r = '';
		url = '';
		r = new XMLHttpRequest();
		
				var url = 'http://www.salecarro.com/class/';
					url += 'car_app_functions.php';
					url += '?id='+escape(id);
					url += '&createFolder=true';	
					
				
		r.open("GET", url, true);
		r.onreadystatechange = function(){
			//alert('not working');
		if(r.readyState == 4 && r.status == 200)
		{
		
		var g = r.responseText;
			console.log(g);
			//alert('hello');
			}
		}	
		r.send(null);
	
	}

//set setFooter function sets the footer.
dayOrNight();
setTimeout("setFooter()", 500);






