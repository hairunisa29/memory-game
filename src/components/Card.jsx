function Card({ card, handleChoice, flipped }) {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className="card relative">
      <div className={flipped ? "flipped" : ""}>
        <img
          src={card.src}
          alt="card front"
          className="w-28 border-4 border-indigo-600 rounded-lg front"
        />
        <img
          src="/src/assets/pumpkin.png"
          alt="card back"
          className="w-28 p-4 border-4 border-indigo-600 rounded-lg cursor-pointer back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default Card;
