import NavbarEnd from "../navbarEnd/NavbarEnd.js";
import NavbarStart from "../navbarStart/NavbarStart.js";
import SearchBar from "./SerachBar.js";

function Image(src, height, width) {
  const imageBurger = document.createElement("img");
  imageBurger.alt = "alt";
  imageBurger.height = height;
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

  navbar.appendChild(NavbarStart());
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

  navbar.appendChild(NavbarEnd());

  return navbar;
}
