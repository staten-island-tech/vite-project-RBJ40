const DOMSelectors = {
  header: document.querySelector("h1"),
  description: document.querySelector(".card-desc"),
  button: document.querySelectorAll("button"),
  form: document.querySelectorAll(".form"),
  container: document.querySelectorAll(".container"),
  card: document.querySelector(".card"),
};
document.querySelector("lightbutton").addEventListener("click", function () {});
const games = [
  { name: "Tears of the Kingdom", price: "$60", category: "Adventure" },
  { name: "Street Fighter 6", price: "$60", category: "Action" },
  { name: "Breath of the Wild", price: "$50", category: "Adventure" },
  { name: "Mario Kart 8 Deluxe", price: "$50", category: "Action" },
  { name: "Tekken 8", price: "$60", category: "Action" },
  { name: "Super Smash Bros Ultimate", price: "$50", category: "Action" },
  { name: "Naruto Ultimate Ninja Storm", price: "$50", category: "Action" },
  { name: "Mario Kart Double Dash", price: "$30", category: "Action" },
  { name: "Kirby and the Forgotten Land", price: "$40", category: "Adventure" },
  { name: "Kirby Star Allies", price: "$40", category: "Adventure" },
  { name: "Kirby's Dream Land", price: "$40", category: "Adventure" },
  { name: "Kirby Planet Robobot", price: "$40", category: "Adventure" },
  { name: "Kid Icarus: Uprising", price: "$40", category: "Action" },
  { name: "Wii Sports", price: "$30", category: "Action" },
  { name: "Skyward Sword", price: "$50", category: "Adventure" },
];
games.forEach((game) => console.log(game));
const adventureGame = games.filter((games) => games.category == "Adventure");
adventureGame.forEach((adventureGame) => console.log(adventureGame));
const actionGame = games.filter((games) => games.category.includes("Action"));
actionGame.forEach((actionGame) => console.log(actionGame));

createCards(games);
