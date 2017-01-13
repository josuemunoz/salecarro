
		

	// JavaScript Document

document.addEventListener("deviceready",onDeviceReady,false);

    var pictureSource;   // picture source
    var destinationType; // sets the format of returned value 



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
    //


    // Cordova is ready to be used!

    //
	
function onDeviceReady() {
	
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
			alert('its ready');
		
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
			//show('test')
			//clearAll();//line 500
			//setTimeout("animateThis()",5000);
		}
		//imageLoaded();
		
function onPhotoURISuccess(imageURI) {
     // Uncomment to view the image file URI 
      // console.log(imageURI);

      // Get image handle
      //
      var largeImage = document.getElementById('test');

      // Unhide image elements
      //
      largeImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      //largeImage.src = imageURI;
	  //this.x = largeImage;
    }

function capturePhoto() {
    // Take picture using device camera and retrieve image as base64-encoded string
      navigator.camera.getPicture(uploadPhoto, onFail, { quality: 100,targetWidth: 700,
  		  	targetHeight:600,
        
			destinationType: navigator.camera.DestinationType.FILE_URI,
			sourceType: navigator.camera.PictureSourceType.DATA_URL
			});
										
		//this.x = imageURI;
			//alert(x);
        								
    }

function capturePhotoEdit() {
    // Take picture using device camera, allow edit, and retrieve image as base64-encoded string  
      navigator.camera.getPicture(uploadPhoto, onFail, { quality: 100, targetWidth: 700,
  		  	targetHeight:600, allowEdit: true,
        destinationType: destinationType.DATA_URL });
    }

function getPhoto(source) {
     // Retrieve image file location from specified source
      navigator.camera.getPicture(uploadPhoto, onFail, { quality: 90, 
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    }
 
function onFail(message){
     alert('Failed because: ' + message);
    }
	
function uploadPhoto(imageURI){
	var options = new FileUploadOptions();
				options.fileKey="file";
				options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1)+'.jpg';
				options.mimeType="image/jpeg";
				options.chunkedMode = false;
				var ft = new FileTransfer();
				var c = localStorage.getItem('userId');
				ft.upload(imageURI, "http://www.salecarro.com/uploadTest/test_upload.php?user="+c, win, fail, options, true);
				onPhotoDataSuccess(imageURI);				
        }		




	
