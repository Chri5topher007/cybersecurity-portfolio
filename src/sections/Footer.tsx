import { socialLinks } from "../lib/constants";

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <p>© {new Date().getFullYear()} Lijo Dominic</p>
      <div className="socials">
        {socialLinks.map((link) => (
          <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="icon">
            <span className="text-sm font-medium text-white-50">{link.name.charAt(0)}</span>
          </a>
        ))}
      </div>
      <p className="text-center md:text-end">Cybersecurity Engineer</p>
    </div>
  </footer>
);

export default Footer;
