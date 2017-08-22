function Ticket(movie, age, time, price) {
  this.movie = movie;
  this.age = age;
  this.time = time;
  this.price = price;
 }

function formula(ticket) {
  if(ticket.age == "Youth"){
    ticket.price -= 2;
  } else if(ticket.age == "Senior"){
    ticket.price -= 3;
  }

  if(ticket.time == "10:00 am"){
    ticket.price -= 3;
  } else if(ticket.time == "12:00 pm"){
    ticket.price -= 2;
  }
  return ticket.price;
}


$(document).ready(function(){
  $('#submit').click(function(event) {
    event.preventDefault();

    var movie = $("#movie option:selected").text();
    var age = $("#age option:selected").text();
    var time = $("#time option:selected").text();
    var price = 10;
    var newTicket = new Ticket(movie, age, time, price);

    price = formula(newTicket);

    $("#movieOut").text(newTicket.movie);
    $("#ageOut").text(newTicket.age);
    $("#timeOut").text(newTicket.time);
    $("#priceOut").text(price);

    $(".table").show()
  });
});
