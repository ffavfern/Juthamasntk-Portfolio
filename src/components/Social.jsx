import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const socialLinks = [
  { name: 'Facebook', url: 'https://facebook.com', icon: faFacebook },
  { name: 'Twitter', url: 'https://twitter.com', icon: faTwitter },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: faLinkedin },
  { name: 'Instagram', url: 'https://instagram.com', icon: faInstagram },
  { name: 'GitHub', url: 'https://github.com', icon: faGithub },
];

const Social = () => {
  return (
    <section id="social" className="bg-white py-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Socials</h2>
      <div className="flex flex-wrap justify-center space-x-4 sm:space-x-8">
        {socialLinks.map(social => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 mx-2 sm:mx-4"
          >
            <FontAwesomeIcon icon={social.icon} className="text-3xl sm:text-4xl text-gray-800" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Social;
