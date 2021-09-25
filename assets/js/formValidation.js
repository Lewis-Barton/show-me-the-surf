var form = document.getElementsByTagName('form')[0];

form.addEventListener('submit', function (event) {
  const date = new Date(form.date.value);

  checkDate(date);
});

function checkDate(inputDate) {
  var today = new Date();
  var week = new Date();
  week.setDate(today.getDate() + 7);

  if (
    (today.toDateString() < inputDate.toDateString() &&
      inputDate.toDateString() < week.toDateString()) ||
    (today.getFullYear() === inputDate.getFullYear() &&
      today.getMonth() === inputDate.getMonth() &&
      today.getDate() === inputDate.getDate())
  ) {
    return true;
  } else if (
    today.toDateString() > inputDate.toDateString() ||
    inputDate.toDateString() > week.toDateString()
  ) {
    return false;
  }
}

function checkLocations() {
  const locationIds = [
    'locationOne',
    'locationTwo',
    'locationThree',
    'locationFour',
  ];

  locationIds.forEach(function (location) {
    const input = document.getElementById(location);
    const searchBox = new google.maps.places.SearchBox(input);

    searchBox.addListener('places_changed', () => {
      const places = searchBox.getPlaces();

      if (places.length == 0) {
        return;
      }
    });
  });
}
