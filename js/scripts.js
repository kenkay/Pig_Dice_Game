//backend
function newPlayers(one, two) {
  this.one = one;
  this.two = two;
}


//frontend
$(document).ready(function() {
  $("form#players").submit(function(event) {
    event.preventDefault();
    $("#show-player").show();

    var inputPlayerOne = $("input#player_one").val();
    var inputPlayerTwo = $("input#player_two").val();

    $("h3#player_1").text(inputPlayerOne);
    $("h3#player_2").text(inputPlayerTwo);

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
