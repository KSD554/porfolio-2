import LogoCraft from "../assets/logo-craft.png";
import PlumePartagee from "../assets/plume-partagee.png";
import Projet5 from "../assets/projet-5.png";
import Projet1 from "../assets/projet-1.png";
import Projet2 from "../assets/projet-2.png";
import { FaGithub } from "react-icons/fa";

const Project = () => {
  const projects = [
    {
      title: "Logo Craft",
      description:
        "Logo Craft, l'outil parfait pour concevoir le logo de vos rêve ! Créez, personnalisez et modifiez vos designs à votre guise, puis téléchargez-les en un clic. Donnez vie à votre vision en toute simplicité!",
      techStack: ["Next.js", "Tailwind CSS"],
      link: "https://logo-craft-4kn4.vercel.app/",
      github: "https://github.com/KSD554/logo-craft",
      image: LogoCraft,
    },
    {
      title: "Plume Partagée",
      description:
        "Plume Partagée, c'est votre compagnon pour donner vie à vos idées! Créez, personnalisez et publiez votre propre blog en toute simplicité. Partagez votre passion avec le monde et connectez-vous à une communauté qui vous ressemble!",
      techStack: [
        "React",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "Firebase",
        "redux",
      ],
      link: "https://plume-partagee.onrender.com",
      github: "https://github.com/KSD554/mern-blog",
      image: PlumePartagee,
    },
    {
      title: "CV Forge",
      description:
        "Avec CV Forge, transformez votre parcours professionnel en une véritable œuvre d'art. Notre plateforme intuitive vous permet de concevoir un CV moderne, personnalisé et impactant, adapté à votre domaine d'expertise. Que vous soyez étudiant, jeune diplômé ou professionnel expérimenté, CV Forge vous offre des outils puissants pour mettre en valeur vos compétences et captiver les recruteurs.Car votre carrière mérite un CV aussi solide et remarquable que vous. 💼✨",
      techStack: ["Next js", "DaisyUI", "Tailwind CSS"],
      link: "https://cv-forge-ci.vercel.app",
      github: "",
      image: Projet5,
    },
    {
      title: "CasaCentral",
      description:
        "CasaCentral propose des propriétés exceptionnelles, alliant confort et design moderne, pour une expérience immobilière unique et personnalisée.",
      techStack: ["React js", "Tailwind CSS"],
      link: "https://casacentral-seven.vercel.app",
      github: "",
      image: Projet1,
    },
    {
      title: "E-Shop",
      description:
        "Cette plateforme permet aux utilisateurs de créer un compte, gérer leurs commandes, ajouter des produits à la wishlist et modifier leur profil. Les vendeurs peuvent ajouter des produits, gérer des événements, suivre les commandes et gérer les paiements",
      techStack: ["React js", "Tailwind CSS"],
      link: "https://multi-vendor-ecommerce-main-hi7c.vercel.app/",
      github: "",
      image: Projet2,
    },
  ];
  return (
    <section id="project" className="bg-gradient-to-r bg-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-300 mb-12">
          Projets
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-950 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover px-3 pt-3 rounded-2xl"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-900 text-gray-300 text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
                  >
                    Voir le projet
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2 items-center bg-gray-800 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-900 transition-colors"
                  >
                    <FaGithub /> Github
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
