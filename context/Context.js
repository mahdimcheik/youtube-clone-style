const searchWord = new rxjs.BehaviorSubject("");
const videoList = [
  {
    src: "https://picsum.photos/334/188",
    title: "Voyage à travers le cosmos",
    author: "Astronome Enthousiaste",
    date: "2023-09-15",
    views: 12345,
  },
  {
    src: "https://picsum.photos/334/189",
    title: "Cuisine exotique : Recettes du monde",
    author: "Chef Gusto",
    date: "2022-12-05",
    views: 6789,
  },
  {
    src: "https://picsum.photos/334/187",
    title: "Apprendre une nouvelle langue en 30 jours",
    author: "Polyglotte Pro",
    date: "2024-03-20",
    views: 54321,
  },
  {
    src: "https://picsum.photos/333/188",
    title: "Yoga pour le bien-être",
    author: "Yogi Zen",
    date: "2023-07-10",
    views: 9876,
  },
  {
    src: "https://picsum.photos/332/188",
    title: "Techniques de méditation avancées",
    author: "Méditant Serein",
    date: "2024-01-30",
    views: 24680,
  },
  {
    src: "https://picsum.photos/333/187",
    title: "Conseils pour le succès entrepreneurial",
    author: "Entrepreneur Expert",
    date: "2023-05-18",
    views: 13579,
  },
  {
    src: "https://picsum.photos/334/188",
    title: "Voyage à travers le cosmos",
    author: "Astronome Enthousiaste",
    date: "2023-09-15",
    views: 12345,
  },
  {
    src: "https://picsum.photos/334/189",
    title: "Cuisine exotique : Recettes du monde",
    author: "Chef Gusto",
    date: "2022-12-05",
    views: 6789,
  },
  {
    src: "https://picsum.photos/334/187",
    title: "Apprendre une nouvelle langue en 30 jours",
    author: "Polyglotte Pro",
    date: "2024-03-20",
    views: 54321,
  },
  {
    src: "https://picsum.photos/332/188",
    title: "Yoga pour le bien-être",
    author: "Yogi Zen",
    date: "2023-07-10",
    views: 9876,
  },
  {
    src: "https://picsum.photos/332/188",
    title: "Techniques de méditation avancées",
    author: "Méditant Serein",
    date: "2024-01-30",
    views: 24680,
  },
  {
    src: "https://picsum.photos/332/187",
    title: "Conseils pour le succès entrepreneurial",
    author: "Entrepreneur Expert",
    date: "2023-05-18",
    views: 13579,
  },
];

let relativePath = "index";
export { searchWord, videoList, relativePath };
