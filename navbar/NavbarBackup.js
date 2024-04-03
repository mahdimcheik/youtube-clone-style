import SearchBar from "./SerachBar.js";
console.log("search br : ", SearchBar().formTarget ? "true" : "false");

function Image(src, height, width) {
  const imageBurger = document.createElement("img");
  (imageBurger.alt = "alt"), (imageBurger.height = height);
  imageBurger.src = src;
  imageBurger.width = width;
  return imageBurger;
}
function GenericDiv(genericClass) {
  const genericDiv = document.createElement("div");
  genericDiv.classList.add(genericClass);
  return genericDiv;
}

export default function Navbar() {
  const navbar = document.createElement("header");
  navbar.classList.add("header");
  navbar.innerHTML = ` 
        <div class="start">
          <img
            src="./assets/burger.png"
            alt="burger"
            height="20"
            width="auto"
          />
          <img
            src="./assets/youtube.png"
            alt="burger"
            height="20"
            width="auto"
          />
        </div>        
      `;
  const middleWithMic = GenericDiv("middle-with-mic");
  const middle = GenericDiv("middle");
  const mic = Image(
    "https://www.iconpacks.net/icons/1/free-microphone-icon-342-thumb.png",
    20,
    20
  );
  const magnefy = Image("./assets/magnify.png", 20, 20);

  middle.appendChild(SearchBar());
  middle.appendChild(magnefy);

  middleWithMic.appendChild(middle);
  middleWithMic.appendChild(mic);
  navbar.appendChild(middleWithMic);

  navbar.innerHTML += `
  <div class="end">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    style="
      pointer-events: none;
      display: inherit;
      width: 100%;
      height: 100%;
    "
    viewBox="0 0 24 24"
    width="24"
    focusable="false"
  >
    <path
      d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z"
    ></path>
  </svg>
  <img src="./assets/bell.png" alt="burger" height="20" width="20" />
  <img src="./assets/profile.png" alt="burger" height="20" width="20" />
</div>`;
  // navbar.appendChild(SearchBar());

  return navbar;
}
