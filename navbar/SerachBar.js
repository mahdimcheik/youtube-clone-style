// import { searchState$ } from "../context/Context";

export default function SearchBar(searchState$) {
  const input = document.createElement("input");
  input.type = "text";
  input.addEventListener("input", (e) => {
    console.log(e.target.value);
    searchState$.next(e.target.value);
  });
  return input;
}
