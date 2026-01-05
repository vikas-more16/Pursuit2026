import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaXTwitter,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa6";
import "../styles/sidebar.css";

const SocialBar = () => {
  return (
    <aside className="social-bar">
      <FaInstagram />
      <FaLinkedin />
      <FaYoutube />
      <FaXTwitter />
      <FaFacebook />
      <FaWhatsapp />
    </aside>
  );
};

export default SocialBar;
