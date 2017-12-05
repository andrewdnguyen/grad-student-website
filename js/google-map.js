function initMap() {
  var location = {lat: 32.879320, lng: -117.242150};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}
