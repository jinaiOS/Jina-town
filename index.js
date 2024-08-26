const character = document.createElement("div");
character.className = "character";
character.style.backgroundColor = "black"; // 문자열로 감싸야 합니다.
character.style.width = "100px"; // 단위를 추가해야 합니다.
character.style.height = "100px"; // 단위를 추가해야 합니다.
character.style.position = "absolute"; // 위치를 절대적으로 설정해야 합니다.
document.getElementById("gameArea").appendChild(character); // getElementsById를 getElementById로 수정

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
