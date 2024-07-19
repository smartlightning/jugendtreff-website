import React from 'react';
import { UserPlusIcon } from '@heroicons/react/24/solid';

const Card = ({ event, onIconClick }) => {
  return (
    <div className="bg-card p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-500">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold">{event.title}</h2>
        <UserPlusIcon className="h-6 w-6 text-gray-700 cursor-pointer" />
      </div>
      <p className="text-gray-700 mb-1">{event.date}</p>
      <p className="text-gray-700 mb-1">Thema: {event.theme}</p>
      <p className="text-gray-700">Treffpunkt: {event.location}</p>
    </div>
  );
};

export default Card;