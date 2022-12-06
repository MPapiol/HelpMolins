//BANNER//
//Array of images
imagesBanner = new Array(5)
imagesBanner[0] = "imagenes/banner5.jpg"
imagesBanner[1] = "imagenes/banner1.jpg"
imagesBanner[2] = "imagenes/banner2.jpg"
imagesBanner[3] = "imagenes/banner3.jpg"
imagesBanner[4] = "imagenes/banner4.jpg"

//Counter-related variables
let measureArray = imagesBanner.length
let counter = 0

//Random number
counter = Math.floor((Math.random() * measureArray))

//Change image every 5 seconds 
let time = 10
let timer = time * 1000

//Function banner
function banner() {
	counter++
	counter = counter % measureArray
	document.banner.src = imagesBanner[counter]
	setTimeout("banner()", timer)
}


//UBICATION MAP//
function iniciarMap() {
	var coord = {
	  lat: 41.415519,
	  lng: 2.016071
	};
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 10,
	  center: coord
	});
	var marker = new google.maps.Marker({
	  position: coord,
	  map: map
	});
  }