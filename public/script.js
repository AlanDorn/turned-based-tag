import {isCollide} from '/script2.js'
const player = document.getElementById(`player`);


const goal = document.querySelectorAll(`.goal`);

let xPosition = 0;
let yPosition = 0;
let lastxPosition = xPosition;
let lastyPosition = yPosition;

let latestPlayerInput = "none";

setInterval(movePlayer, 10);

document.addEventListener("keydown", function (event) {
  // addEventListener runs every time event happens
  if (event.key == "w" || event.key == "a" || event.key == "s" || event.key == "d"){
     
    latestPlayerInput = event.key;
      
  }
});

// export {isCollide};

function VICTORY(player){
    const rect1 = player.getBoundingClientRect();
    let collision = false;

    goal.forEach(wall => {
        const rect2 = wall.getBoundingClientRect();
        if (
            !(rect1.top >= rect2.bottom || rect1.right <= rect2.left || rect1.bottom <= rect2.top || rect1.left >= rect2.right)
        ){
            collision = true;
        }

    });
    return collision;
}

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

  if(VICTORY(player)){
    console.log("FAT DUB!");
    end();

  } else { //if no collision update x and y positions respectively in the event that next time player runs into wall
    lastxPosition = xPosition;
    lastyPosition = yPosition;
  }

  latestPlayerInput = "none";
}

function end(){
    window.alert('Congratulations! You have reached the goal!');
    window.location.reload();
}

const socket = new WebSocket('ws://localhost:3001');

socket.onmessage = function(event) {
  console.log('Message from server ', event.data);
};

socket.onopen = function(event) {
  socket.send('Hello Server!');
};