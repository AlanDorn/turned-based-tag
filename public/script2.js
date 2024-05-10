const wall = document.getElementById(`wall`);

function isCollide(player) {
    const rect1 = player.getBoundingClientRect();
    const rect2 = wall.getBoundingClientRect();

        
    return !(
        rect1.top >= rect2.bottom ||
        rect1.right <= rect2.left ||
        rect1.bottom <= rect2.top ||
        rect1.left >= rect2.right
    );
}
export {isCollide};