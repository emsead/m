function togglePicture() {
	var sourceOfPicture = "Resume.jpg";
	var img = document.getElementById('resume');
  

	if (img.style.display === "block") {
	
	  img.style.display = "none";
	} else {

	  img.src = sourceOfPicture.replace('900x900', '1920x1920');
	  img.style.width = "100%";
	  img.style.height = "auto";
	  img.style.display = "block";
	}
  }
