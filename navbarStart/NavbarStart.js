export default function NavbarStart() {
  const element = document.createElement("div");
  element.className = "start";
  element.innerHTML = `
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
    `;
  return element;
}
