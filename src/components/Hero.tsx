import React from 'react';
import { Mail, Phone } from 'lucide-react';
import ContactButton from './ContactButton';
import { CONTACT_INFO } from '../utils/constants';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-gradient-to-r from-primary-900 to-primary-800 text-white overflow-hidden"
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/5668857/pexels-photo-5668857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-primary-900 bg-opacity-75"></div>
      </div>

      <div className="section-container relative z-10 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
          Advocacia <span className="text-gold-400">Moraes</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl animate-slide-up opacity-90">
          Excelência jurídica e compromisso com os interesses de nossos clientes. Conte com uma equipe especializada para defender seus direitos.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
          <ContactButton
            icon={<Phone size={20} />}
            text="Entre em contato"
            href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
            variant="primary"
          />
          <ContactButton
            icon={<Mail size={20} />}
            text="Envie um email"
            href={`mailto:${CONTACT_INFO.email}`}
            variant="secondary"
          />
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-neutral-50 to-transparent"></div>
    </section>
  );
};

export default Hero;