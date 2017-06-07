var initMap = function() {
        var myLatLng = {lat: -25.363, lng: 131.044};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: myLatLng
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Hello World!'
        });
      }

/*function myMap() {
  var myCenter = new google.maps.LatLng(39.039481,125.762180);
  var mapCanvas = document.getElementById("#map");
  var mapOptions = {center: myCenter, zoom: 5};
if(mapCanvas.length > 0){
    var map = new google.maps.Map(mapCanvas, mapOptions);
}
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);
}
//google.maps.event.addDomListener(window, 'load', myMap());*/
