import { videoList, relativePath } from "../context/Context.js";
import { sideBar } from "../layout/SideBar.js";
import ListCardFiltered from "../listCardFiltered/ListCardFiltered.js";
import Navbar from "../navbar/Navbar.js";

export default function App() {
  const layout = document.createElement("div");
  layout.classList.add("container");

  layout.appendChild(sideBar());
  switch (relativePath) {
    case "index": {
      layout.appendChild(ListCardFiltered(videoList));
      break;
    }
    case "video": {
      layout.appendChild(Navbar());
    }
  }

  return layout;
}
