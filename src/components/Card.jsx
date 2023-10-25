function Card({ card }) {
  return (
    <div>
      <div>
        <img src={card.src} alt="card front" className="w-28 border-4 border-indigo-600 rounded-lg" />
        <img
          src="/src/assets/pumpkin.png"
          alt="card back"
          className="w-28 p-4 border-4 border-indigo-600 rounded-lg"
        />
      </div>
    </div>
  );
}

export default Card;
