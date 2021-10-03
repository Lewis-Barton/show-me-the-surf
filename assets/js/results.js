let map;

function sortResults() {
  const dayDataReturned = JSON.parse(localStorage.getItem('dayData'));
  let results = [];
  let locations = [];

  for (let location in dayDataReturned) {
    let score = dayDataReturned[location].score;
    if (dayDataReturned.hasOwnProperty(location)) {
      results.push(score);
      locations.push(location);
    }
  }

  for (let count = 0; count < results.length; count++) {
    for (let a = 0; a < results.length; a++) {
      if (results[count] > results[a]) {
        let tempResults = results[count];
        let tempLocation = locations[count];
        results[count] = results[a];
        locations[count] = locations[a];
        results[a] = tempResults;
        locations[a] = tempLocation;
      }
    }
  }
  const lat = dayDataReturned[locations[0]].lat;
  const lng = dayDataReturned[locations[0]].lng;
  initMap(lat, lng);
}

function initMap(latitude, longitude) {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: latitude, lng: longitude },
    zoom: 13,
  });

  new google.maps.Marker({
    position: { lat: latitude, lng: longitude },
    map,
  });
}

window.onload = function () {
  sortResults();
};
