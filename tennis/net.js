const net = {
    x: canvasWidth/2 - 2/2,
    y: 0,
    width: 2,
    height: 10,
    color: "white"
}
function drawNet() {
    for(let i=0; i <= canvasHeight; i += 15)  {
        drawRectangle(net.x, net.y + i, net.width, net.height, net.color);

    }

}