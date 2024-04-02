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
        <div class="middle-with-mic">
          <div class="middle">
            <input type="text" placeholder="Rechercher" />
            <img
              src="./assets/magnify.png"
              alt="burger"
              height="20"
              width="20"
            />
          </div>
          <img
            src="./assets/mic.png"
            alt="burger"
            height="20"
            width="20"
            class="mic"
          />
        </div>
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
        </div>
      `;
  return navbar;
}