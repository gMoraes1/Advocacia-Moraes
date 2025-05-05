import React from 'react';
import { 
  Instagram, 
  
  MapPin, 
  Mail, 
  Phone as PhoneIcon,
  ArrowUp
 } from 'lucide-react';
import { CONTACT_INFO } from '../utils/constants';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer id="footer" className="bg-primary-800 text-white">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6 text-white">
              Advocacia Moraes
            </h3>
            <p className="mb-6 text-neutral-300">
              Excelência jurídica e compromisso com a defesa dos interesses de nossos clientes.
            </p>
            <div className="flex space-x-4">
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-700 hover:bg-gold-600 p-2 rounded-full transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>

            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Serviços</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-neutral-300 hover:text-white transition-colors duration-300">
                  Direito Civil
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-300 hover:text-white transition-colors duration-300">
                  Direito Trabalhista
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-300 hover:text-white transition-colors duration-300">
                  Direito Empresarial
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-300 hover:text-white transition-colors duration-300">
                  Direito Tributário
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-300 hover:text-white transition-colors duration-300">
                  Direito Imobiliário
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 text-gold-400" />
                <span className="text-neutral-300">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon size={20} className="mr-3 text-gold-400" />
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-neutral-300 hover:text-white transition-colors duration-300"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-gold-400" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-neutral-300 hover:text-white transition-colors duration-300"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">
            &copy; {new Date().getFullYear()} Advocacia Moraes. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#privacy-policy"
              className="text-neutral-300 hover:text-white transition-colors duration-300"
            >
              Desenvolvido por <span className="text-gold-400">Gustavo Moraes</span>  
            </a>
            </div>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-primary-700 hover:bg-gold-600 p-2 rounded-full transition-colors duration-300"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;