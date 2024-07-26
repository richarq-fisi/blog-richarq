import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FaLaptop, FaTwitter } from "react-icons/fa";
import { getAllTopics } from "../Lib/Data";

export const getStaticProps = () => {
  const allTopics = getAllTopics();
  return {
    props: {
      topics: allTopics,
    },
  };
};

function about({ topics }) {
  return (
    <div className="min-h-screen relative bg-white dark:bg-gray-800">
      <Navbar topics={topics} />
      <div className="max-w-2xl pt-20 pb-32 px-6 text-center mx-auto">
        <div className="h-64 w-full justify-center flex">
          <img src="/about.png" className="h-64" />
        </div>
        <h2 className="text-3xl font-semibold text-gray-700 py-4 dark:text-gray-200">
          Hola,{" "}
          <span className="bg-purple-400 text-white rounded px-1 dark:bg-purple-700">
            Soy Richar
          </span>{" "}
          . Gusto en conocerte 👋
        </h2>
        <p className="text-gray-600 mt-4 dark:text-purple-200">
        Soy un desarrollador autodidacta que actualmente está cursando el noveno semestre de Ingeniería de Software.
        Me apasiona la creación de nuevas tecnologías web, así como la ciberseguridad. También tengo un fuerte interés en áreas relacionadas con el aprendizaje profundo (Deep Learning) y el Procesamiento del Lenguaje Natural.
        </p>

        <div className="text-center pt-8">
          <button className="bg-purple-700 px-3 py-1 font-semibold text-white inline-flex items-center space-x-2 rounded dark:bg-purple-700">
            <FaLaptop />
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://richarq.vercel.app/project"
            >
              Ve mis proyectos
            </a>
          </button>

          {/* <button className="bg-purple-700 px-3 py-1 font-semibold text-white inline-flex items-center space-x-2 rounded ml-3 dark:bg-purple-700">
            <FaTwitter />
            <a
              className="twitter-follow-button"
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/"
            >
              Follow Me
            </a>
          </button> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default about;
