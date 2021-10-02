var form = document.getElementsByTagName('form')[0];
const dayData = {
  locationOne: {},
  locationTwo: {},
  locationThree: {},
  locationFour: {},
};

form.addEventListener('submit', function (event) {
  const date = userDate();

  if (!checkDate(date)) {
    dateError(date);
    event.preventDefault();
  }
});

function userDate() {
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

function inputFromToday() {
  const input = userDate();
  const today = new Date();
  const inputNum = input.getDate();
  const todayNum = today.getDate();
  var daysToDate = '';

  if (checkDate(input)) {
    daysToDate = inputNum - todayNum;
    return daysToDate;
  }
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
      getWeather(longitude, latitude, currentLocation, placeName);
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
      'Ocp-Apim-Subscription-Key': 'b91e97479a2b466eabc281d3497b8883',
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

function getWeather(lng, lat, inputId, placeName) {
  const key = 'bbc573251f7231d889f8506528105528';
  const exclusions = 'current,minutely,hourly,alerts';
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=${exclusions}&appid=${key}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then(function (returnedData) {
      // Data to be passed to update day data
      updateWeather(returnedData, inputId, lng, lat, placeName);
    })
    .catch((error) => console.log(error));
}

function updateWeather(weather, locationId, lng, lat, placeName) {
  const dayIndex = inputFromToday();
  weather = weather.daily[dayIndex];

  for (let i = 0; i < 4; i++) {
    dayData[locationId].thisLocation = placeName;
    dayData[locationId].lng = lng;
    dayData[locationId].lat = lat;
    dayData[locationId].temp = weather.temp.day;
    dayData[locationId].feelsLike = weather.feels_like;
    dayData[locationId].wind = weather.wind_speed;
    dayData[locationId].cloud = weather.clouds;
    dayData[locationId].chanceOfRain = weather.pop;
    dayData[locationId].rain = weather.rain;
    dayData[locationId].snow = weather.snow;
  }
}

window.onload = function () {
  getLocations();
};
