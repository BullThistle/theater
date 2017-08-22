function Ticket(movie, age, time) {
  this.movie = movie;
  this.age = age;
  this.time = time;
 }


$(document).ready(function() {
  $('#submit').click(function() {

    var movie = $("#movie option:selected").text();
    var age = $("#age option:selected").text();
    var time = $("#time option:selected").text();

    var newTicket = new Ticket(movie, age, time);
    alert(newTicket.time);
  });




});
