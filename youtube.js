import Navbar from "./navbar/Navbar.js";
import Layout from "./layout/Layout.js";
import SearchBar from "./navbar/SerachBar.js";
const searchState$ = new rxjs.Subject();

const main = document.getElementById("root");
let listVideos = [];

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    listVideos = data;
    console.log("list from src", listVideos);
    main.appendChild(Navbar());
    main.appendChild(SearchBar(searchState$));
    main.appendChild(Layout(listVideos));
  })
  .catch((err) => {
    console.error("erreur:", err);
  });
searchState$.subscribe((ele) => console.log("element from obser: ", ele));
