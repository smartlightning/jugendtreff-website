import { EnvelopeIcon as MailIcon } from '@heroicons/react/24/solid'
import { games, gruppenBildSchlittenfahren, hiking } from '../assets'
import IconButton from '../components/helpers/IconButton'

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="p-4">
        <section className="text-center">
          <h1 className="text-3xl font-bold mb-4">Das sind wir</h1>
          <img
            src={gruppenBildSchlittenfahren}
            alt="group"
            className="w-60 h-60 object-cover rounded-full mx-auto mb-4"
          />
          <p className="text-lg mb-6">
            Hi, wir sind eine Gruppe von jungen Christen und wir treffen uns
            regelmäßig für Aktivitäten und Bibellesen in und um Esslingen!
          </p>
        </section>

        <section className="mb-6">
          <img
            src={games}
            alt="group activity"
            className="w-full mb-4 rounded-lg"
          />
          <img
            src={hiking}
            alt="group activity"
            className="w-full mb-4 rounded-lg"
          />
        </section>

        <section className="text-center mb-6">
          <p className="text-lg mb-4">
            Hier siehst du eine Liste unserer nächsten Treffen:
          </p>
          <button className="bg-black text-white py-2 px-4 rounded-full text-lg mb-4">
            Eventplaner
          </button>
          <p className="text-lg mb-4">
            Du willst mehr über uns erfahren? Hier geht’s zu unserem
            Kontaktformular:
          </p>
          <button className="bg-black text-white py-2 px-4 rounded-full text-lg mb-4">
            Kontakt
          </button>
        </section>

        <section className="text-center mb-6">
          <p className="text-lg mb-4">
            Oder schau doch mal auf unserem Insta-Account vorbei:
          </p>
          <IconButton
            onClick={() =>
              window.open('https://www.instagram.com/direct/t/17842028825634235')
            }
            icon={MailIcon}
            iconPosition="left"
            label="@juhugendtreff"
            color="text-black hover:text-black"
          />
        </section>
      </main>
    </div>
  )
}

export default Home
