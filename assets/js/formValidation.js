var form = document.getElementsByTagName('form')[0];

form.addEventListener('submit', function (event) {
  const date = new Date(form.date.value);

  if (!checkDate(date)) {
    dateError(date);
    event.preventDefault();
  }
});

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
      const places = searchBox.getPlaces();
      // Used to restrict the location sections that are needed
      const typeRestrictions = {
        country: 'country',
        locality: 'locality',
        region: 'administrative_area_level_1',
      };

      if (places.length == 0) {
        return;
      }

      // Loops to check location types wanted
      for (var a = 0; a < places.length; a++) {
        // Gets the type of place for the inputted location to be looped through
        const types = places[a].types;
        // Loops through types array
        for (var b = 0; b < types.length; b++) {
          var hasType = types[b];

          // Checks if type is in location array
          if (typeRestrictions.hasOwnProperty(hasType)) {
            console.log(places[a]['long_name']);
          }
        }
      }
    });
  });
}

window.onload = function () {
  getLocations();
};
