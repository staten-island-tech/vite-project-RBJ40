import { games } from "./index.js";
import "./style.css";
import "../CSS/style.css";
const DOMSelectors = {
  header: document.querySelector("h1"),
  button: document.querySelectorAll("button"),
  container: document.querySelectorAll(".container"),
  card: document.querySelector(".card"),
};
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
