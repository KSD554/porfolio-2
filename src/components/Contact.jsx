import Swal from "sweetalert2";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "04bdce3d-b3e8-44b7-b22e-48c0d31d548f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Envoi réussi !",
        text: "Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.",
        icon: "success",
      });
    }
  };
  return (
    <section id="contact" className="bg-gray-950 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-300 mb-12">
          Contactez-moi
        </h2>
        <div className="grid lg:grid-cols-2 gap-10">
          {/* contact info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-300">
                Parlons-en
              </h1>
              <p className="text-gray-300 my-5">
                Je suis toujours ravi de discuter de nouveaux projets,
                d&apos;opportunités de collaboration ou tout simplement
                d&apos;échanger autour de la technologie. Que vous ayez une idée
                à développer, besoin d&apos;un développeur passionné pour donner
                vie à votre vision, ou que vous souhaitiez simplement vous
                connecter, n&apos;hésitez pas à me contacter. Construisons
                quelque chose d&apos;extraordinaire ensemble !
              </p>
              <h3 className="text-2xl font-semibold text-gray-300">Email</h3>
              <p className="text-gray-300 mt-2">
                <span className="hover:underline cursor-pointer">
                  kouassisadok3@gmail.com
                </span>
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-300">Phone</h3>
              <p className="text-gray-300 mt-2">
                <span className="hover:underline cursor-pointer">
                  +225 07 04 30 66 42
                </span>
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-300">
                Suivez-moi
              </h3>
              <div className="flex gap-3 text-2xl transition-all mt-5">
                <a href="https://www.facebook.com/share/1DTGrG5Hhg/?mibextid=wwXIfr">
                  <FaFacebook className="hover:text-blue-400" />
                </a>

                <a href="https://www.instagram.com/ksd6013/profilecard/?igsh=N2Z6enFiejBxbmp1">
                  <FaInstagram className="hover:text-blue-400" />
                </a>
                <a href="https://www.linkedin.com/in/sadok-debruchard-kouassi-96357b323">
                  <FaLinkedin className="hover:text-blue-400" />
                </a>
                <a href="https://www.youtube.com/@ksd679">
                  <FaYoutube className="hover:text-blue-400" />
                </a>
              </div>
            </div>
          </div>
          {/* contact form */}
          <div className="bg-gray-900 rounded-lg shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500 p-8">
            <h3 className="text-3xl font-semibold text-gray-300 mb-6">
              Contactez-nous
            </h3>
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300"
                >
                  Nom
                </label>
                <input
                  type="name"
                  id="name"
                  name="name"
                  className="mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Votre Nom"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Votre email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="messsage"
                  name="message"
                  rows={5}
                  className="mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Votre Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
              >
                Envoyer un message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
