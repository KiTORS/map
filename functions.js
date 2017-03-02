var kea_lygten01 = {lat: 55.706480, lng: 12.539119};
var kea_guldberg = {lat: 55.691629, lng: 12.554989};
var kea_bispevej = {lat: 55.707891, lng: 12.529954};
var kea_lygten02 = {lat: 55.705038, lng: 12.537851};
var kea_prinsesse = {lat: 55.694431, lng: 12.550899};
var kea_landskronagade = {lat: 55.714660, lng: 12.569993};

var map;
      function initMap() {
        map = new
		google.maps.Map(document.getElementById('map'), {
          center: kea_lygten01,
          zoom: 13
        });

          /* MARKERS */
          var marker = new google.maps.Marker({
          position: kea_lygten01,
          map: map,
          title: 'KEA LYGTEN ER HER!!'
        });
          var marker = new google.maps.Marker({
          position: kea_guldberg,
          map: map,
          title: 'KEA GULDBERGSGADE ER HER!!'
        });
           var marker = new google.maps.Marker({
          position: kea_bispevej,
          map: map,
          title: 'KEA BISPEVEJ ER HER!!'
        });
          var marker = new google.maps.Marker({
          position: kea_lygten02,
          map: map,
          title: 'KEA LYGTEN ER HER!!'
        });
          var marker = new google.maps.Marker({
          position: kea_prinsesse,
          map: map,
          title: 'KEA PRINSESSE CHARLOTTES GADE ER HER!!'
        });
          var marker = new google.maps.Marker({
          position: kea_landskronagade,
          map: map,
          title: 'KEA LANDSKRONAGADE ER HER!!'
        });
      }
