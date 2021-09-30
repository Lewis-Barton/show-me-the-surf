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
      const places = searchBox.getPlaces()[0];

      if (places.length == 0) {
        return;
      }

      const placeName = places.name;
      const latitude = places.geometry.location.lat();
      const longitude = places.geometry.location.lng();

      getTidal(placeName);
    });
  });
}

function getTidal(tidalTown) {
  var params = {
    name: tidalTown,
  };

  $.ajax({
    url:
      'https://admiraltyapi.azure-api.net/uktidalapi/api/V1/Stations?' +
      $.param(params),
    befordSend: function (xhrObj) {
      xhrObj.setRequestHeader(
        'Ocp-Apim-Subscription-Key',
        '31828e9a573b40c3a3829e4f3900c8d5'
      );
    },
    type: 'GET',
    data: '{body}',
  })
    .done(function (data) {
      alert('success');
    })
    .fail(function () {
      alert('error');
    });
}

window.onload = function () {
  getLocations();
};
