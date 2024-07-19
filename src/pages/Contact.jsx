import React, { useState } from 'react';
import { artistic, chris } from '../assets';


const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const gemeindeEmail = 'chrismcqueen18@gmail.com';

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${gemeindeEmail}?subject=Kontaktanfrage Webseite&body=${encodeURIComponent(message)}&cc=${encodeURIComponent(email)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      <main className="flex flex-col items-center w-full max-w-md bg-white p-6 rounded-lg shadow-md mt-6">
        <h1 className="text-2xl font-bold mb-4">Kontakt</h1>
        <p className="text-center mb-6">
          Du willst mehr über uns erfahren oder möchtest mal vorbeischauen? Schreib uns gerne, wir freuen uns über deine Nachricht!
        </p>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Deine E-mail Adresse</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Deine E-mail Adresse"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">Nachricht</label>
            <textarea
              id="message"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Nachricht"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded hover:bg-gray-800 transition duration-300"
          >
            Im Emailprogramm abschicken
          </button>
        </form>
        <div className="mt-6 text-center">
          <p>Du willst lieber mit jemandem persönlich schreiben?</p>
          <div className="mt-4 cursor-pointer transition-opacity duration-500 ease-in-out hover:opacity-75">
            <a href="https://ig.me/m/chrismcqueenphotography" target="_blank" rel="noopener noreferrer">
              <img
                src={chris}
                alt="Person"
                className="w-44 h-44 rounded-full mx-auto object-cover object-top"
              />
            </a>
            <p>
              Chris McQueen
            </p>
          </div>
          <div className="mt-4 cursor-pointer transition-opacity duration-500 ease-in-out hover:opacity-75">
            <a href="https://ig.me/m/juhugendtreff" target="_blank" rel="noopener noreferrer">
              <img
                src={artistic}
                alt="Person"
                className="w-44 h-44 rounded-full mx-auto object-cover"
              />
            </a>
            <p>
              Test user
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;