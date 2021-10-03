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
  displayResult(dayDataReturned[locations[0]]);
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

function displayResult(locationObject) {
  const place = locationObject.thisLocation;
  const temp = Math.floor(locationObject.temp);
  const wind = locationObject.wind;
  const clouds = Math.floor(locationObject.cloud);
  const rain = Math.floor(locationObject.rain);

  document.getElementById('place').innerHTML = `${place}`;
  document.getElementById(
    'temp'
  ).innerHTML = `The temperature for the day will be ${temp}`;
  document.getElementById(
    'wind'
  ).innerHTML = `Wind speeds of ${wind} m/s are expected on the day`;
  document.getElementById('cloud').innerHTML = `${clouds}% chance of clouds`;
  document.getElementById('rain').innerHTML = `${rain}% chance of rain`;
}

window.onload = function () {
  sortResults();
};
