
var colour = ["red","blue","green","yellow"];
 var userClickedPattern =[];
var gamePattern =[];
var level = 0;
started = false;
$(document).click(function(){
  if(!started){
  nextSequence();
  started = true;
}
});

$(document).keypress(function(){
  if(!started){
  nextSequence();
  started = true;
}
});

$(".btn").click(function(){
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  playsound(userChosenColour);
  animatePress(userChosenColour);
  console.log(userClickedPattern);
  checkAnswer(userClickedPattern.length-1);
})





function nextSequence() {
  userClickedPattern=[];
  level = level + 1;
  $("#level-title").text("LEVEL "+level)
var Randomnum = Math.floor(Math.random()*4);
var randomChosenColour = colour[Randomnum];
gamePattern.push(randomChosenColour);
$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
playsound(randomChosenColour);
animatePress(randomChosenColour);



}

function playsound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
function animatePress(currentColour){
$("#"+currentColour).addClass("pressed");
  setTimeout(function() {
      $("#"+currentColour).removeClass("pressed");
  }, 100);

}
function checkAnswer(currentLevel){
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel])
  {
    if(gamePattern.length === userClickedPattern.length){
    console.log("success");
    setTimeout(function() {
      nextSequence();
    }, 1000);

  }


  }
  else {
 console.log("lose");
 playsound("wrong");
 $("body").addClass("game-over")
 $("#level-title").text("Game Over Press any key to restart");
 setTimeout(function () {
   $("body").removeClass("game-over");
 }, 200);
  startover();
  }

}


function startover() {
  level = 0;
  gamePattern = [];
  started = false;
}
