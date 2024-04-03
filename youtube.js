import Navbar from "./navbar/Navbar.js";
import Layout from "./layout/Layout.js";
import SearchBar from "./navbar/SerachBar.js";
import SearchOnly from "./navbar/searchOnly.js";
const searchState$ = new rxjs.BehaviorSubject("");

const main = document.getElementById("root");
let listVideos = [];

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    listVideos = data;
    console.log("list from src", listVideos);
    main.appendChild(Navbar());
    // main.appendChild(SearchBar());
    main.appendChild(SearchOnly());
    main.appendChild(Layout(listVideos, searchState$));
  })
  .catch((err) => {
    console.error("erreur:", err);
  });
searchState$.subscribe((ele) => console.log("element from obser: ", ele));
