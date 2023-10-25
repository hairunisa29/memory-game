import { useState } from "react";
import Card from "./components/Card";

const cardImages = [
  {
    src: "/src/assets/cat.jpg",
  },
  {
    src: "/src/assets/glasses.jpg",
  },
  {
    src: "/src/assets/hair.jpg",
  },
  {
    src: "/src/assets/hat.jpg",
  },
  {
    src: "/src/assets/peace.jpg",
  },
  {
    src: "/src/assets/silly.jpg",
  },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h1 className="font-bold text-xl md:text-3xl">Memory Game</h1>
      <button
        className="rounded border border-indigo-600 px-8 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
        onClick={shuffleCards}
      >
        New Game
      </button>
      <div className="grid grid-cols-4 gap-5">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default App;
