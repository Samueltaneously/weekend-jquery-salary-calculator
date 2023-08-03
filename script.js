$(document).ready(onReady);

// let salaryTotal = 1;
// let monthly = salaryTotal;

function onReady() {

  $('.submitButton').on('click', handleSubmit);
  // $('.submitButton').on('click', updateData);

  $("#employees").on("click", '.deleteButton', deleteEmployee);
}


// <table id="employees">
// <tr class="newEmployee">
/* <input id="fName">
<input id="lName">
<input id="id">
<input id="title">
<input id="salary">
<button class="submitButton">Submit</button> */
/* <span id="monthlyCosts"></span> */
let salaryTotal = 0;

function handleSubmit(event) {
  event.preventDefault();
  const fName = $("#fName").val();
  const lName = $("#lName").val();
  const id = $("#id").val();
  const title = $("#title").val();
  const salary = $("#salary").val();
  $("#employees").append(`<tr><td>${fName}</td> <td>${lName}</td><td>${id}</td><td>${title}</td><td>$${salary}</td>
    <td><button class="deleteButton">Delete</button></td></tr>`);

  salaryTotal += Number($("#salary").val());
  let monthly = salaryTotal / 12;
  $('#monthlyCosts').text(monthly);
  if (monthly >= 20000) {
    $('#monthlyCosts').addClass('isOver');
  }

  $("#fName").val('');
  $("#lName").val('');
  $("#id").val('');
  $("#title").val('');
  $("#salary").val('');

  console.log(salaryTotal);
}

//   function updateData() {
//     salaryTotal = 12;
//     console.log("in update function");
//   }

function deleteEmployee() {
  $(this).parent().parent().remove()
}
