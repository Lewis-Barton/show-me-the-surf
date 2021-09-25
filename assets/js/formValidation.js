var form = document.getElementsByTagName('form')[0];

form.addEventListener('submit', function (event) {
  const date = new Date(form.date.value);

  checkDate(date);
});

function checkDate(inputDate) {
  var today = new Date();
  var week = new Date();
  week.setDate(today.getDate() + 7);
  var dateValid = false;

  if (
    (today.toDateString() < inputDate.toDateString() &&
      inputDate.toDateString() < week.toDateString()) ||
    (today.getFullYear() === inputDate.getFullYear() &&
      today.getMonth() === inputDate.getMonth() &&
      today.getDate() === inputDate.getDate())
  ) {
    dateValid = true;
    console.log(dateValid);
  } else if (
    today.toDateString() > inputDate.toDateString() ||
    inputDate.toDateString() > week.toDateString()
  ) {
    dateValid = false;
    console.log(dateValid);
  }
}
