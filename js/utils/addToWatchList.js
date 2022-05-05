import { getWatchList } from "./watchListFunctions.js";

export function addToWatchList(event) {
  const button = document.querySelector(".addButton");
  button.addEventListener("click", handleClick);
}

function handleClick(event) {
  this.classList.toggle("addButton");
  this.classList.toggle("addedButton");

  const id = this.dataset.id;
  const name = this.dataset.name;

  const currentWatchList = getWatchList();

  const filmExist = currentWatchList.find(function (film) {
    return film.id === id;
  });

  if (!filmExist) {
    const film = { id: id, name: name };
    currentWatchList.push(film);
    saveItem(currentWatchList);
  } else {
    const newWatchList = currentWatchList.filter((film) => film.id !== id);
    saveItem(newWatchList);
  }
}

function saveItem(films) {
  localStorage.setItem("watch list", JSON.stringify(films));
}
