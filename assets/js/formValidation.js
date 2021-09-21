function checkForm(formSubmitted) {
  var today = new Date();
  var inputDate = new Date(formSubmitted.date.value);
  var dateValid = true;

  console.log(inputDate);

  if (today.toDateString() > inputDate.toDateString()) {
    dateValid = false;
    console.log(dateValid);
  } else if (
    today.toDateString() < inputDate.toDateString() ||
    (today.getFullYear() === inputDate.getFullYear() &&
      today.getMonth() === inputDate.getMonth() &&
      today.getDate() === inputDate.getDate())
  ) {
    console.log(dateValid);
  }
}
