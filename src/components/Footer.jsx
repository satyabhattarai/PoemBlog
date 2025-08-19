import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaThreads,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mx-auto container mb-8 flex flex-col items-center gap-3">
      <span className="text-base">@ Anupama</span>

      <div className="flex gap-6">
        <a
          href="https://facebook.com"
          target="_blank"
          className="text-gray-600 hover:text-blue-600 transform hover:-translate-y-1 transition-transform duration-300 ease-in-out"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          className="text-gray-600 hover:text-pink-600 transform hover:-translate-y-1 transition-transform duration-300 ease-in-out"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://www.threads.net/"
          target="_blank"
          className="text-gray-600 hover:text-black transform hover:-translate-y-1 transition-transform duration-300 ease-in-out"
        >
          <FaThreads size={24} />
        </a>
        <a
          href="mailto:yourmail@gmail.com"
          className="text-gray-600 hover:text-red-600 transform hover:-translate-y-1 transition-transform duration-300 ease-in-out"
        >
          <FaEnvelope size={24} />
        </a>
      </div>
    </footer>
  );
}
