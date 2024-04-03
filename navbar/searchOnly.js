import SearchBar from "./SerachBar.js";

export default function SearchOnly() {
  const searchbar = document.createElement("div");
  searchbar.classList.add("center");
  searchbar.appendChild(SearchBar());
  return searchbar;
}
