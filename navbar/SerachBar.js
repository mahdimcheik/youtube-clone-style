import { searchWord } from "../context/Context.js";

export default function SearchBar() {
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Rechercher";
  input.addEventListener("input", (e) => {
    console.log("triggered");
    searchWord.next(e.target.value);
  });
  return input;
}
