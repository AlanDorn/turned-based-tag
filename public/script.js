import {isCollide} from '/script2.js'
const player = document.getElementById(`player`);
let xPosition = 0;
let yPosition = 0;

let latestPlayerInput = "none";

setInterval(movePlayer, 1);

document.addEventListener("keydown", function (event) {
  // addEventListener runs every time event happens
  if (event.key == "w" || event.key == "a" || event.key == "s" || event.key == "d"){
     
    latestPlayerInput = event.key;
      
  }
});

let lastxPosition = xPosition;
let lastyPosition = yPosition;

function movePlayer() {
    console.log(isCollide(player));

  switch (latestPlayerInput) {
    case "w":
      yPosition -= 10;
      player.style.transform = `translate(${xPosition}px, ${yPosition}px)`;
      console.log("Move up");
      break;
    case "a":
      xPosition -= 10;
      player.style.transform = `translate(${xPosition}px, ${yPosition}px)`;
      console.log("Move left");
      break;
    case "s":
      yPosition += 10;
      player.style.transform = `translate(${xPosition}px, ${yPosition}px)`;
      console.log("Move down");
      break;
    case "d":
      xPosition += 10;
      player.style.transform = `translate(${xPosition}px, ${yPosition}px)`;
      console.log("Move right");
      break;
    default:
      // Handle other keys if needed
      return;
  }

  //if collision detected move player back to last position
  if(isCollide(player)){
    console.log("No bueno, collision detected!!");
    xPosition = lastxPosition;
    yPosition = lastyPosition;
    player.style.transform = `translate(${xPosition}px, ${yPosition}px)`;
  } else { //if no collision update x and y positions respectively in the event that next time player runs into wall
    lastxPosition = xPosition;
    lastyPosition = yPosition;
  }

  latestPlayerInput = "none";
}
