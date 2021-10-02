var form = document.getElementsByTagName('form')[0];
// Declare object to be filled with data used to calculate results
const dayData = {
  locationOne: {},
  locationTwo: {},
  locationThree: {},
  locationFour: {},
};

// Event listener for submission to validate correct information has been entered
form.addEventListener('submit', function (event) {
  const date = userDate();

  if (!checkDate(date)) {
    dateError(date);
    event.preventDefault();
  }
});

// Gets input date, to save repeating code each time or passing variables through multiple function calls
function userDate() {
  const form = document.getElementsByTagName('form')[0];
  const date = new Date(form.date.value);

  return date;
}

// Checks if a valid date has been entered
function checkDate(inputDate) {
  var today = new Date();
  var week = new Date();
  week.setDate(today.getDate() + 6);
  var validDates = [today];
  var currentYear = today.getFullYear();
  var currentMonth = today.getMonth();
  var currentDay = today.getDate();
  var dateValid = false;

  // Fills validDates array with all possible correct dates to be checked against
  while (validDates[validDates.length - 1] < week) {
    validDates.push(new Date(currentYear, currentMonth, ++currentDay));
  }

  // Loop to check each date in array
  for (let i = 0; i < validDates.length; i++) {
    // if Input matches a valid date returns true - form is submitted
    // Else date is invalid and will display error message
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

// Displays error message if date is before today or after 7 days away
function dateError(invalidDate) {
  const errorDisplay = document.getElementById('error');

  errorDisplay.textContent =
    'The date ' +
    invalidDate.toDateString() +
    ' is invalid. Please ensure that the date is within 7 days of today';
}

// Determines how far away the input date is from today, to locate correct weather and tidal data
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

// Returns Google Places information for each location that has been entered
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

    // This will run everytime a place has been chosen/changed on a specific input box
    searchBox.addListener('places_changed', () => {
      const places = searchBox.getPlaces()[0];

      if (places.length == 0) {
        return;
      }

      // Declares variables to be passed to other functions
      const placeName = places.name;
      const latitude = places.geometry.location.lat();
      const longitude = places.geometry.location.lng();

      // Get information needed to calculate best location
      getTidal(placeName);
      getWeather(longitude, latitude, currentLocation, placeName);
    });
  });
}

async function getTidal(tidalTown) {
  // Function intended to retrive tidal information fro Admirality API
  // - Currently getting a 401 response despite key being correct ticket opened with support to resolve issue
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

// Fetches weather data from Open Weather One Call API
function getWeather(lng, lat, inputId, placeName) {
  const key = 'bbc573251f7231d889f8506528105528';
  const exclusions = 'current,minutely,hourly,alerts';
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=${exclusions}&appid=${key}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then(function (returnedData) {
      // Input results into dayData to be stored for each location
      updateWeather(returnedData, inputId, lng, lat, placeName);
      // Calculate results after dayData objects have been updated
      calculateResults();
    })
    .catch((error) => console.log(error));
}

function updateWeather(weather, locationId, lng, lat, placeName) {
  const dayIndex = inputFromToday();
  weather = weather.daily[dayIndex];

  //Updates dayData objects with weather information
  for (let i = 0; i < 4; i++) {
    dayData[locationId].thisLocation = placeName;
    dayData[locationId].lng = lng;
    dayData[locationId].lat = lat;
    dayData[locationId].temp = weather.temp.day;
    dayData[locationId].wind = weather.wind_speed;
    dayData[locationId].cloud = weather.clouds;
    dayData[locationId].rain = weather.rain;
    dayData[locationId].snow = weather.snow;
  }
}

function calculateResults() {
  const locations = [
    'locationOne',
    'locationTwo',
    'locationThree',
    'locationFour',
  ];

  // Calculate location ratings for each input
  for (let loc of locations) {
    let rating = 0;
    rating += calculateTemp(loc);
  }
}

function calculateTemp(loc) {
  let rating = 0;
  let temp = dayData[loc].temp;
}

window.onload = function () {
  getLocations();
};
