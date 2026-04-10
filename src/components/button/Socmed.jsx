import { MdEmail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

function SocialMediaAccounts() {
  return (
    <div className="flex mt-8 justify-center gap-4 lg:flex-col">
      <button className="p-3">
        <a href="http://github.com/AldwinDukes" target="_blank">
          <IoLogoGithub size={24} />
        </a>
      </button>

      <button className="p-3">
        <a href="https://www.instagram.com/aldwindukes/" target="_blank">
          <FaInstagram size={24} />
        </a>
      </button>

      <button className="p-3">
        <a href="mailto:aldwindukes@gmail.com">
          <MdEmail size={24} />
        </a>
      </button>

      <button className="p-3">
        <a href="https://www.linkedin.com/in/aldwindukes/" target="_blank">
          <FaLinkedin size={24} />
        </a>
      </button>
    </div>
  );
}

export default SocialMediaAccounts;
