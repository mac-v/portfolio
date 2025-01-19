import Card from './Card.js';
import cardsData from "../data/cards.json"
const CardSection = () => {

  return (
    <div className="flex justify-center md:mx-5">
      <div className="flex flex-col mx-5 md:flex-row my-8 lg:mb-16 justify-between gap-6 lg:gap-8">
        {cardsData.map((card, index) => (
          <Card key={index} title={card.title} items={card.items} />
        ))}
      </div>
    </div>
  );
};

export default CardSection;
