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
    <div className="flex justify-center max-w-7xl flex-col md:flex-row my-7 gap-5 md:gap-10 md:px-11 mx-auto  mb-10 lg:mb-16 ">
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title} items={card.items} />
      ))}
    </div>
  );
};

export default CardSection;
