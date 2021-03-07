
// in Process

// const character = document.getElementById("character");
// const block = document.getElementById("block");
// const block2 = document.querySelector(".block2");
// const block3 = document.querySelector(".block3");
// const game = document.getElementById("game");
// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   game.onmousemove = function (mouse) {
//     var xpos = mouse.clientX;
//     var ypos = mouse.clientY;
    
//     character.style.position="absolute";
//     character.style.left=xpos+"px";
//     character.style.cursor = "pointer";
//   };
//   setInterval(() => {
    
//     block.style.left = Math.floor(Math.random() * 480) + "px";

//   }, 1500);
//   setInterval(()=>{
//     block2.style.left = Math.floor(Math.random() * 480) + "px";
//   },2000)
//   setInterval(()=>{
//     block3.style.left = Math.floor(Math.random() * 480) + "px";
//   },2500);
// });

// var checkDead = setInterval(function () {
//   var characterTop = parseInt(
//     window.getComputedStyle(character).getPropertyValue("top")
//   );
//   var blockLeft = parseInt(
//     window.getComputedStyle(block).getPropertyValue("left")
//   );

//   if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
//     alert("u lose");
//   }
// }, 10);
