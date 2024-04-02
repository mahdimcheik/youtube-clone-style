const tag = ["Music", "Mix", "News", "React", "angular"];

export default function Tags() {
  const topBar = document.createElement("div");
  topBar.classList.add("topbar");

  tag.forEach((element) => {
    const singleTag = document.createElement("span");
    singleTag.innerHTML = `${element.name}`;
    topBar.appendChild(singleTag);
  });
}
