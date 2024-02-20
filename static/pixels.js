const pixelSize = 15; // pixels
const space = 7;      // pixels
const pixels = document.querySelector(".pixels");
const title = document.createElement("div")
title.setAttribute("class", "manta-title")
title.innerHTML = '<span class="outside"><span>Diving into the</span> <span class="inside">power of distributed data</span></span>'

function buildPixels(){
  const width = 0.99 * window.innerWidth;
  const height = pixels.clientHeight;
  const nRows = Math.floor((height - space) / (space + pixelSize));
  const nCols = Math.floor((width - space) / (space + pixelSize));
  const offsetY = (height - (nRows * (pixelSize + space) + space)) / 2;
  const offsetX = (width - (nCols * (pixelSize + space) + space)) / 2;

  pixels.innerHTML = "";
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", `${width}`);
  svg.setAttribute("height", `${height}`);
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  for (let row = 0; row < nRows; row++) {
    const proba = (nRows - row + 5) / (nRows + 5);
    const opacity = Math.max(0.1, (nRows - row) / nRows);
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    for (let col = 0; col < nCols; col ++){
      if (Math.random() < proba){
        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("width", pixelSize);
        rect.setAttribute("height", pixelSize);
        rect.setAttribute("fill", "white");
        rect.setAttribute("x", offsetX + space + col * (space + pixelSize));
        rect.setAttribute("y", offsetY + space + row * (space + pixelSize));
        rect.setAttribute("opacity", opacity);
        g.appendChild(rect);
      }
    }
    svg.appendChild(g);
  }
  pixels.appendChild(svg);
  pixels.appendChild(title);
}

buildPixels();
window.onresize = function(){
  buildPixels();
}
