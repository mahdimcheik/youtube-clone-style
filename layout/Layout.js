import ListCardFiltered from "../listCardFiltered/ListCardFiltered.js";
import { sideBar } from "./SideBar.js";

export default function Layout(listVideos) {
  const layout = document.createElement("div");
  layout.classList.add("container");

  const myMain = document.createElement("div");

  myMain.classList.add("main");
  console.log("list videos", listVideos);
  myMain.appendChild(ListCardFiltered(listVideos));

  layout.appendChild(sideBar());
  layout.appendChild(myMain);

  return layout;
}
