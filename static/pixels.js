const pixelSize = 20; // pixels
const space = 7;      // pixels
const pixels = document.querySelector(".pixels");

function buildPixels(){
  const width = window.innerWidth;
  const height = pixels.clientHeight;
  const nRows = Math.floor((height - space) / (space + pixelSize));
  const nCols = Math.floor((width - space) / (space + pixelSize));
  const offsetY = Math.floor(((height - space) % (space + pixelSize)) / 2);
  const offsetX = Math.floor(((width - space) % (space + pixelSize)) / 2);

  pixels.innerHTML = "";
  for (let row = 0; row < nRows; row++) {
    const rowDiv = document.createElement("div");
    const proba = (nRows - row + 5) / (nRows + 5);
    const opacity = Math.max(0.1, (nRows - row) / nRows);
    var posX = 0;
    rowDiv.setAttribute("class", "pixel-row")
    for (let col = 0; col < nCols; col ++){
      if (Math.random() < proba){
        const div = document.createElement("div");
        div.setAttribute("class", "pixel");
        div.setAttribute("style", `top: ${offsetY + row * space}px; left: ${offsetX + posX + col * space}px; opacity: ${opacity};`);
        rowDiv.appendChild(div);
      } else {
        posX += pixelSize;
      }
    }
    pixels.appendChild(rowDiv);
  }
}

buildPixels();
window.onresize = function(){
  buildPixels();
}
