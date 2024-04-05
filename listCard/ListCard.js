import Card from "../myCard/MyCard.js";

export default function ListCard(cards) {
  console.log("cards", cards);
  const listCard = document.createElement("div");
  listCard.classList.add("caroussel");
  listCard.innerHTML = ``;
  cards.forEach((element) => {
    listCard.appendChild(
      Card(
        element.src,
        element.title,
        element.author,
        element.views,
        element.date
      )
    );
  });

  return listCard;
}
