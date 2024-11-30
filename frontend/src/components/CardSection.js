import React from 'react';
import Card from './Card';

const CardSection = () => {
  const cardsData = [
    {
      title: 'Experience',
      items: [
        {
          name: 'Langowski Logistics',
          role: 'Junior System Analyst',
          date: '01.24-Present',
          link: 'https://langowski.eu/',
          logo: 'images/langowski',
        },
      ],
    },
    {
      title: 'Education',
      items: [
        {
          name: 'PJATK Warsaw',
          role: 'Computer Science',
          date: '9.24-Present',
          link: 'https://pja.edu.pl/informatyka/o-wydziale/',
          logo: 'images/pjatk',
        },
        {
          name: 'University of Gdansk',
          role: 'Economy',
          date: '9.21-05.24',
          link: 'https://old.ekonom.ug.edu.pl/web/main/',
          logo: 'images/ug',
        },
      ],
    },
  ];

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
