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
        locations[count] = location[a];
        results[a] = tempResults;
        locations[a] = tempLocation;
      }
    }
  }
  console.log(results);
  console.log(locations);
}

window.onload = function () {
  sortResults();
};
