import ListCard from "../listCard/ListCard.js";
import ListCardFiltered from "../listCardFiltered/ListCardFiltered.js";

export default function Layout(listVideos) {
  const layout = document.createElement("div");
  layout.classList.add("container");
  const sideBar = document.createElement("div");
  sideBar.classList.add("sidebar");
  sideBar.innerHTML = `  
  <div class="home vertical">
    <div class="logo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        focusable="false"
        style="
          pointer-events: none;
          display: inherit;
          width: 100%;
          height: 100%;
        "
      >
        <g>
          <path d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"></path>
        </g>
      </svg>
    </div>
    <span>Accueil</span>
  </div>
  <div class="home vertical">
    <div class="logo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        focusable="false"
        style="
          pointer-events: none;
          display: inherit;
          width: 100%;
          height: 100%;
        "
      >
        <path
          d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"
        ></path>
      </svg>
    </div>
    <span>Short</span>
  </div>
  <div class="home vertical">
    <div class="logo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        focusable="false"
        style="
          pointer-events: none;
          display: inherit;
          width: 100%;
          height: 100%;
        "
      >
        <path
          d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"
        ></path>
      </svg>
    </div>
    <span>Vous</span>
  </div>
`;

  const myMain = document.createElement("div");

  myMain.classList.add("main");
  console.log("list videos", listVideos);
  // myMain.appendChild(ListCard(listVideos));
  myMain.appendChild(ListCardFiltered(listVideos));

  layout.appendChild(sideBar);
  layout.appendChild(myMain);

  return layout;
}
