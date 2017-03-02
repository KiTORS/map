var kea_lygten = {lat: 55.706480, lng: 12.539119};
var kea_guldberg = {lat: 55.691629, lng: 12.554989};

var map;
      function initMap() {
        map = new
		google.maps.Map(document.getElementById('map'), {
          center: kea_lygten,
          zoom: 18
        });

          /* MARKERS */
          var marker = new google.maps.Marker({
          position: kea_lygten,
          map: map,
          title: 'KEA LYGTEN ER HER!!'
        });
          var marker = new google.maps.Marker({
          position: kea_guldberg,
          map: map,
          title: 'KEA GULDBERGSGADE ER HER!!'
        });
      }
