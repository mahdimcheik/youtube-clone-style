export default function CardVideo(
  src = "https://placehold.co/334x188",
  title = "New Title",
  author = "new Author",
  views = "125 k",
  date = "21-04-1986"
) {
  const myCard = document.createElement("div");
  myCard.classList.add("card-video");
  myCard.innerHTML = `
  <img
    src=${src}
    alt="img-video"
    height="188"
    width="334"
  />
  <div class="description-avatar">
    <img
      src="./assets/profile.png"
      alt="avatar"
      height="36"
      width="36"
    />
    <div class="description">
      <h2>${title}</h2>
      <h3>${author}</h3>
      <h3>${views} views. Date : ${date}</h3>
    </div>
  </div>
`;
  return myCard;
}
