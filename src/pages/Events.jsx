import React from 'react';
import { games } from '../assets';
import Card from '../components/helpers/Card';


const events = [
  {
    title: 'Meet & Read',
    date: 'Samstag 03 November 2023',
    theme: 'Glaube',
    location: 'Familie Fischer',
  },
  {
    title: 'Schlittenfahren',
    date: 'Samstag 03 Februar 2023',
    theme: 'Berge',
    location: 'Gemeinde',
  },
  {
    title: 'Jugendtreff',
    date: 'Samstag 03 Januar 2023',
    theme: 'Backen',
    location: 'Gemeinde',
  },
  {
    title: 'Meet & Read',
    date: 'Samstag 03 November 2023',
    theme: 'Bibel',
    location: 'Stuttgart',
  },
];

const Events = () => {
/*   const handleIconClick = (event) => {
    const mailtoLink = `mailto:contact@example.com?subject=${encodeURIComponent(event.title)}&body=${encodeURIComponent(`Event Details:\n\nTitle: ${event.title}\nDate: ${event.date}\nTheme: ${event.theme}\nLocation: ${event.location}`)}`;
    window.location.href = mailtoLink;
  }; */
  return (
    <div>
      <div
        className="relative bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: `url(${games})` }}
      >
        <h1 className="w-full p-4 text-3xl font-bold text-white text-left">Events</h1>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {events.map((event, index) => (
            <Card key={index} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;