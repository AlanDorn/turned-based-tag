import {isCollide} from '/script2.js'
const player = document.getElementById(`player`);
let xPosition = 0;
let yPosition = 0;
// let xPrev ;
// let yPrev ;
let latestPlayerInput = "none";

setInterval(movePlayer, 1);

document.addEventListener("keydown", function (event) {
  // addEventListener runs every time event happens
  if (event.key == "w" || event.key == "a" || event.key == "s" || event.key == "d"){
     
    latestPlayerInput = event.key;
      
  }
});

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
      break;
  }
  latestPlayerInput = "none";
}
