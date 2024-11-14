import { games } from "./index.js";
import "./style.css";
import "../CSS/style.css";
const DOMSelectors = {
  header: document.querySelector("h1"),
  button: document.querySelectorAll("button"),
  container: document.querySelectorAll(".container"),
  card: document.querySelector(".card"),
  theme: document.querySelector("#theme"),
};
theme.addEventListener("click", function () {
  if (document.body.classList.contains("warm")) {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  } else if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  }
});
function createCards(games) {
  DOMSelectors.container.innerHTML = "";
  games.forEach((game) =>
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
        <h2 class="card-title">${game.title}</h2>
        <h3 class="card-desc">${game.description}</h3>
        <h4 class="card-price">$${game.price}</h4>
        <img
          class="card-img"
          src="${game.imageUrl}"
          alt="${game.altText}"
        />
      </div>`
    )
  );
}
createCards(games);

games.forEach((game) => console.log(game));
const adventureGame = games.filter((games) => games.category == "Adventure");
adventureGame.forEach((adventureGame) => console.log(adventureGame));
const actionGame = games.filter((games) => games.category.includes("Action"));
actionGame.forEach((actionGame) => console.log(actionGame));
document.querySelector("#adv").addEventListener("click", function () {
  console.log(games.category.includes("Action"));
});
filteredGames.forEach((product) => {
  const gameCard = document.createElement("div");

  <img src="${games.image}"></img>;
});
