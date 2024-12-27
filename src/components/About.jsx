import React from "react";
import AboutImg from "../assets/About.png";
import { FaChevronRight } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className="py-20 bg-gray-900 z-50 text-gray-300">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-11 text-center">
          À propos de moi
        </h2>
        <div className="flex flex-col md:flex-row gap-20 items-center">
          {/* img section */}
          <div className="relative border hidden md:block border-blue-600 p-1 rounded-full bg-blue-500 shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500">
            <img
              src={AboutImg}
              alt=""
              className="w-[300px] md:w-[1500px] rounded-full border-blue-600 border shadow-blue-500 "
            />
          </div>
          {/* section paragraphe */}
          <div className="p-5 md:p-10 bg-gray-950 rounded-md shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500">
            <p className="text-lg leading-7 mb-6">
              Salut ! Je suis Rohit Singh, un développeur Full-Stack passionné
              avec une expertise dans la pile MERN, WordPress et le
              référencement. Avec une base solide dans le développement Web
              moderne et un souci du détail, je crée des solutions Web élégantes
              et conviviales adaptées aux besoins des clients.
            </p>
            <p className="text-lg leading-7 mb-6">
              Mon parcours dans la technologie a commencé sans expérience
              informatique et j'ai relevé tous les défis pour perfectionner mes
              compétences en développement, résolution de problèmes et travail
              d'équipe. Je suis toujours désireux d'apprendre et d'explorer de
              nouvelles technologies pour offrir des expériences Web de pointe.
            </p>
            <p className="text-lg leading-7 ">
              Quand je ne code pas, j'aime plonger dans des univers fascinants à
              travers {" "}
              
              les mangas, les K-dramas et les livres. Ces passions m'inspirent et
              alimentent ma créativité. Connectons-nous et explorons ensemble
              des idées uniques, que ce soit à travers des lignes de code ou des
              récits captivants !
            </p>
            <div className="mt-5">
              <h1 className="font-bold text-2xl mb-5 text-blue-400">
                Mes compétences
              </h1>
              <div className="flex flex-wrap gap-4 mb-5 text-sm">
                <p className="bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full">
                  React js
                </p>
                <p className="bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full">
                  Next.js
                </p>
                <p className="bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full">
                  Tailwind CSS
                </p>
                <p className="bg-gray-900 cursor-pointer texte-gris-300 px-2 py-1 arrondi-complet">
                  Redux
                </p>
                <p className="bg-gray-900 curseur-pointeur texte-gray-300 px-2 py-1 arrondi-complet">
                  Node.js
                </p>
                <p className="bg-gray-900 curseur-pointeur texte-gray-300 px-2 py-1 arrondi-complet">
                  Github
                </p>
                <p className="bg-gray-900 curseur-pointeur texte-gray-300 px-2 py-1 arrondi-complet">
                  Python
                </p>
                <p className="bg-gray-900 curseur-pointeur texte-gray-300 px-2 py-1 arrondi-complet">
                  Php
                </p>
              </div>
              <button className="px-3 py-1 arrondi-md bg-blue-500 texte-blanc éléments flexibles-centre écart-1">
                Contact
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
