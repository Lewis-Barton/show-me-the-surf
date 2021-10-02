var form = document.getElementsByTagName('form')[0];
const dayData = {
  locationOne: {},
  locationTwo: {},
  locationThree: {},
  locationFour: {},
};

form.addEventListener('submit', function (event) {
  const date = getDate();

  if (!checkDate(date)) {
    dateError(date);
    event.preventDefault();
  }
});

function getDate() {
  const form = document.getElementsByTagName('form')[0];
  const date = new Date(form.date.value);

  return date;
}

function checkDate(inputDate) {
  var today = new Date();
  var week = new Date();
  week.setDate(today.getDate() + 6);
  var validDates = [today];
  var currentYear = today.getFullYear();
  var currentMonth = today.getMonth();
  var currentDay = today.getDate();
  var dateValid = false;

  while (validDates[validDates.length - 1] < week) {
    validDates.push(new Date(currentYear, currentMonth, ++currentDay));
  }

  for (let i = 0; i < validDates.length; i++) {
    if (
      validDates[i].getFullYear === inputDate.getFullYear &&
      validDates[i].getMonth === inputDate.getMonth &&
      validDates[i].getDate() === inputDate.getDate()
    ) {
      dateValid = true;
    }
  }

  return dateValid;
}

function dateError(invalidDate) {
  const errorDisplay = document.getElementById('error');

  errorDisplay.textContent =
    'The date ' +
    invalidDate.toDateString() +
    ' is invalid. Please ensure that the date is within 7 days of today';
}

function getLocations() {
  const locationIds = [
    'locationOne',
    'locationTwo',
    'locationThree',
    'locationFour',
  ];

  locationIds.forEach(function (location) {
    // SEARCHBOX CODE TAKEN FROM PLACES DOCUMENTATION
    const input = document.getElementById(location);
    // Stores which input has had data entered
    const currentLocation = input.id;
    const searchBox = new google.maps.places.SearchBox(input);

    searchBox.addListener('places_changed', () => {
      const places = searchBox.getPlaces()[0];

      if (places.length == 0) {
        return;
      }

      const placeName = places.name;
      const latitude = places.geometry.location.lat();
      const longitude = places.geometry.location.lng();

      getTidal(placeName);
      getWeather(longitude, latitude, currentLocation);
    });
  });
}

async function getTidal(tidalTown) {
  const url = `https://admiraltyapi.azure-api.net/uktidalapi/api/V1/Stations?name=${tidalTown}`;
  fetch(url, {
    method: 'GET',
    mode: 'no-cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': 'a1550ee5d52542f0a2b82bada9e975a7',
    },
    redirect: 'follow',
    referrerPolicy: 'no-refferer',
    credentials: 'include',
    redirect: 'follow',
    referrerPolicy: 'origin-when-cross-origin',
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

function getWeather(lng, lat, inputId) {
  const key = 'bbc573251f7231d889f8506528105528';
  const exclusions = 'current,minutely,hourly,alerts';
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=${exclusions}&appid=${key}`;

  fetch(url)
    .then(function (response) {
      // Returns API call in json format to be manipulated
      return response.json();
    })
    .then(function (data) {
      // Data to be passed to update day data
      updateWeather(data, inputId);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function updateWeather(weather, locationId) {
  const date = getDate();
}

window.onload = function () {
  getLocations();
};
