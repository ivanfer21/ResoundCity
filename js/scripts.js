$(document).ready(function() {
	
	var randomImages = ['bg1','bg2','bg3']; 
	var rndNum = Math.floor(Math.random() * randomImages.length); 

	$("div#header").css({ background: "url(img/" + randomImages[rndNum] + ".jpg) no-repeat" }); 
});
