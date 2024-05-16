function movePlayer() {
    console.log(isCollide(player));

  //obtain input from user keyboard
  switch (latestPlayerInput) {
    case ("w"): //up
      case ("ArrowUp"): //up
      yPosition -= 10;
      player.style.transform = `translate(${xPosition}px, ${yPosition}px)`;
      console.log("Move up");
      break;
    case "a": //left
      case ("ArrowLeft"): //left
      xPosition -= 10;
      player.style.transform = `translate(${xPosition}px, ${yPosition}px)`;
      console.log("Move left");
      break;
    case "s":
      case ("ArrowDown"):
      yPosition += 10;
      player.style.transform = `translate(${xPosition}px, ${yPosition}px)`;
      console.log("Move down");
      break;
    case "d":
      case ("ArrowRight"):
      xPosition += 10;
      player.style.transform = `translate(${xPosition}px, ${yPosition}px)`;
      console.log("Move right");
      break;
    default:
      // Handle other keys if needed
      return;
  }
}