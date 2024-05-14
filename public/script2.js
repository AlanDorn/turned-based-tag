// const wall = document.getElementById(`wall`);

// function isCollide(player) {
//     const rect1 = player.getBoundingClientRect();
//     const rect2 = wall.getBoundingClientRect();

        
//     return !(
//         rect1.top >= rect2.bottom ||
//         rect1.right <= rect2.left ||
//         rect1.bottom <= rect2.top ||
//         rect1.left >= rect2.right
//     );
// }
// export {isCollide};


const walls = document.querySelectorAll(`.wall`);
const enemyBase = document.querySelectorAll(`.enemyBase`);

function isCollide(player) {
    const rect1 = player.getBoundingClientRect();
    let collision = false;
        
    walls.forEach(wall => {
        const rect2 = wall.getBoundingClientRect();
        if (
            !(rect1.top >= rect2.bottom || rect1.right <= rect2.left || rect1.bottom <= rect2.top || rect1.left >= rect2.right)
        ){
            collision = true;
        }

    });
    enemyBase.forEach(wall => {
        const rect2 = wall.getBoundingClientRect();
        if (
            !(rect1.top >= rect2.bottom || rect1.right <= rect2.left || rect1.bottom <= rect2.top || rect1.left >= rect2.right)
        ){
            collision = true;
        }

    });
    return collision;
}
export {isCollide};