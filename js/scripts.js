//backend
function newPlayers(one, two) {
  this.one = one;
  this.two = two;
}


//frontend
$(document).ready(function() {
  $("form#players").submit(function(event) {
    event.preventDefault();

    var inputPlayerOne = $("input#player_one").val();
    var inputPlayerTwo = $("input#player_two").val();

    $("p#player_1").text(inputPlayerOne);
    $("p#player_2").text(inputPlayerTwo);

    $("input#player_one").val("");
    $("input#player_two").val("");

  });
});

function dicerollPlayerOne() {
  document.getElementById("p1roll").innerHTML = Math.floor(6 * Math.random()) + 1
}

function dicerollPlayerTwo() {
  document.getElementById("p2roll").innerHTML = Math.floor(6 * Math.random()) + 1
}
