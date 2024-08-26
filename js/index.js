const character = document.createElement("div");
character.className = "character";
character.style.backgroundColor = "black";
character.style.width = "100px";
character.style.height = "100px";
character.style.position = "absolute";
document.getElementById("gameArea").appendChild(character);

let posX = 100,
  posY = 100;
character.style.left = posX + "px";
character.style.top = posY + "px"; // right가 아닌 top으로 수정

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      posY -= 12;
      break;
    case "ArrowDown":
      posY += 12;
      break;
    case "ArrowLeft":
      posX -= 12;
      break;
    case "ArrowRight":
      posX += 12;
      break;
  }
  character.style.left = posX + "px";
  character.style.top = posY + "px"; // top으로 수정
});
