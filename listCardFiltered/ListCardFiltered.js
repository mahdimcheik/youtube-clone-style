import Card from "../myCard/MyCard.js";

const cardss = [
  {
    src: "https://picsum.photos/334/188",
    title: "random title",
    author: "Mahdi",
    views: "155 k",
    date: "15-02-5212",
  },
  {
    src: "https://picsum.photos/334/188",
    title: "random title 1",
    author: "Mahdi",
    views: "155 k",
    date: "15-02-5211",
  },
  {
    src: "https://picsum.photos/334/188",
    title: "random title 2",
    author: "Mahdi",
    views: "155 k",
    date: "15-02-5212",
  },
  {
    src: "https://picsum.photos/334/188",
    title: "random title 3",
    author: "Mahdi",
    views: "155 k",
    date: "15-02-5212",
  },
];

export default function ListCardFiltered(cards = cardss, word = "") {
  const listCard = document.createElement("div");
  listCard.classList.add("caroussel");
  listCard.innerHTML = ``;
  cards
    .filter(
      (element) =>
        element.author.toLowerCase().includes(word) ||
        element.title.toLowerCase().includes(word)
    )
    .forEach((element) =>
      listCard.appendChild(
        Card(
          element.src,
          element.title,
          element.author,
          element.views,
          element.date
        )
      )
    );

  return listCard;
}