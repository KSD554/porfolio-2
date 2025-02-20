import { Download } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import G from "../assets/g.jpg";
import CV from "../assets/cv.pdf";
import { motion } from "framer-motion";
import "../Css/Hero.css";

const Hero = () => {
  return (
    <section className="h-max md:h-screen bg-gradient-to-l bg-gray-950 text-white flex flex-col justify-center items-center relative z-10 pb-10">
      {/* stars */}
      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="max-w-7xl mt-24 mx-auto items-center flex flex-col md:flex-row gap-16 md:gap-40 justify-between">
        <div className="md:space-y-6 px-4">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:text-6xl text-2xl font-bold mb-4"
          >
            Salut👋, je suis <p className="text-blue-400">KSD</p>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="md:text-2xl text-lg mb-3"
          >
            Développeur Full-Stack | Passionné par la MERN Stack.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.5 }}
            className="lg:w-[600px] mb-4 md:mb-0 text-sm text-gray-300"
          >
            Je suis développeur full stack, passionné par la création
            d&apos;applications web modernes et performantes. Mon expertise
            englobe à la fois le développement front-end et back-end, me
            permettant de concevoir des solutions complètes et adaptées aux
            besoins de mes clients.
          </motion.p>
          <a href={CV} download="cv">
            <motion.button
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.4, delay: 0.5 }}
              className="px-3 py-2 flex items-center gap-2 bg-blue-500 rounded-md text-white hover:bg-blue-600 shadow-blue-500 border-2 border-blue-400 transition-all shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC] mt-2"
            >
              <Download className="w-5 h-5" /> Télécharger le CV
            </motion.button>
          </a>
          <div className="flex gap-3 text-2xl transition-all mt-5 md:mt-0">
            <a href="https://www.facebook.com/share/1DTGrG5Hhg/?mibextid=wwXIfr">
              <FaFacebook className="hover:text-blue-400" />
            </a>

            <a href="https://www.instagram.com/ksd6013/profilecard/?igsh=N2Z6enFiejBxbmp1">
              <FaInstagram className="hover:text-blue-400" />
            </a>
             <a href="https://www.linkedin.com/in/sadok-debruchard-kouassi-96357b323">

            <FaLinkedin className="hover:text-blue-400" />
             </a>
            <FaYoutube className="hover:text-blue-400" />
          </div>
        </div>
        <div className="relative group">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0 }}
            src={G}
            alt=""
            className="rounded-full border border-blue-600 md:w-[500px] w-[300px] shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
