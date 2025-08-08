import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-20">
      <div className="max-w-5xl mx-auto px-4 py-10 flex flex-col items-center text-center space-y-6">
        {/* Icon Social */}
        <div className="flex space-x-6 text-2xl text-gray-600">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=fernaldysaputra@gmail.com&su=Let's+Connect+–+Portfolio+Inquiry&body=Hi+Fernaldy,+I+just+visited+your+portfolio+and+would+like+to+get+in+touch+with+you."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email via Gmail"
            className="hover:text-sky-600"
          >
            <MdEmail />
          </a>
          <a
            href="https://github.com/Welk-dy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-sky-600"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/fernaldysaputra"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-sky-600"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/fernaldy.saputra/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-sky-600"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 text-center">
        &copy; {new Date().getFullYear()} Fernaldy Saputra. Inspired by{" "}
            <a
            href="https://astro-zen.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-sky-600 hover:text-sky-700"
            >
        Astro Zen
        </a>{" "}
        &{" "}
            <a
            href="https://demo.magic-portfolio.com/"
            target="_blank" 
            rel="noopener noreferrer"
            className="underline text-sky-600 hover:text-sky-700"
            >
        Magic Portfolio
            </a>
        . All rights reserved.
        </p>
      </div>
    </footer>
  );
}