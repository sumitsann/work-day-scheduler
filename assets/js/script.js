//display the date
var dateNow = moment().format("dddd, MMM Do YYYY");

$("#currentDay").html(dateNow);

// save user input in localstorage

function saveUserInput() {
  var time = $(this).parent().attr("id");
  var task = $(this).siblings(".task-description").val();

  localStorage.setItem(time, task);
}

//save the task in save button click

$(".save-button").on("click", saveUserInput);

// separate the time of the day into 3 categories
// past, present, future

function classifyTimeClass() {
  var timeNow = moment().hour();

  $(".time-block").each(function () {
    var timeDuration = this.id;

    if (timeDuration > timeNow) {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    } else if (timeDuration == timeNow) {
      $(this).removeClass("future");
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    }
    console.log(timeNow);
    console.log(timeDuration);
  });
}
classifyTimeClass();

//Getting the task from local storage

$("#8 .task-description").val(localStorage.getItem("8"));
$("#9 .task-description").val(localStorage.getItem("9"));
$("#10 .task-description").val(localStorage.getItem("10"));
$("#11 .task-description").val(localStorage.getItem("11"));
$("#12 .task-description").val(localStorage.getItem("12"));
$("#13 .task-description").val(localStorage.getItem("13"));
$("#14 .task-description").val(localStorage.getItem("14"));
$("#15 .task-description").val(localStorage.getItem("15"));
$("#16 .task-description").val(localStorage.getItem("16"));
$("#17 .task-description").val(localStorage.getItem("17"));
