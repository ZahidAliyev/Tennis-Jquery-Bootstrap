const canvas = document.querySelector("#tennis");
const context = canvas.getContext("2d");
const container_for_canvas = document.querySelector('.game_container');
canvas.width = container_for_canvas.offsetWidth;
canvas.height = container_for_canvas.offsetHeight;

let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

const changeCanvasSizeForResize = () => {
    canvas.width = container_for_canvas.offsetWidth
    canvas.height = container_for_canvas.offsetHeight
  //  canvas.width = canvasContainerWidth - ((initialWindowInnerWidth - e.target.innerWidth)*0.58);
  //  canvas.height = canvasContainerHeight - ((initialWindowInnerHeight - e.target.innerHeight)*0.85);
  
};