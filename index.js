//* - Crea un mapa en HTML

//* - Pon chinchetas en tus 3 lugares favoritos del planeta tierra


let markers, map;

function initMap() {
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });

  markers.push(
    new google.maps.Marker({
      position: {
        lat: -18.925911,
        lng: -43.991621,
      },
      map,
      title: "Santana de Pirapama, Minas Gerais, 35785-000, Brasil",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {

        lat: 34.68543480759129, 
        lng: 135.5256013635349
      },
      map,
      title: "Osaka 大阪",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {

        lat: 37.551031054814175, 
        lng: 126.99091234541038
      },
      map,
      title: "Namsan Mountain Park",
    })
  );
}