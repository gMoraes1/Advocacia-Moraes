import React from 'react';
import { ABOUT_TEXT } from '../utils/constants';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Sobre Nós</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-primary-800">
              {ABOUT_TEXT.subtitle}
            </h3>
            
            <div className="space-y-4">
              {ABOUT_TEXT.description.map((paragraph, index) => (
                <p key={index} className="text-neutral-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="mt-8">
              <a href="#services" className="btn btn-primary">
                Conheça nossos serviços
              </a>
            </div>
          </div>
          
          <div>
            <div className="relative h-full">
              <div className="bg-primary-50 p-8 rounded-lg h-full">
                <h4 className="text-2xl font-serif font-bold text-primary-800 mb-6">
                  Nossos Valores
                </h4>
                
                <div className="space-y-6">
                  {ABOUT_TEXT.values.map((value, index) => (
                    <div key={index} className="flex">
                      <div className="mr-4 flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gold-600 text-white">
                          {index + 1}
                        </div>
                      </div>
                      <div>
                        <h5 className="text-xl font-semibold text-primary-800">
                          {value.label}
                        </h5>
                        <p className="text-neutral-700 mt-1">{value.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Decorative element */}
              <div
                className="absolute -top-6 -right-6 w-48 h-48 bg-gold-100 rounded-full opacity-50 -z-10"
                aria-hidden="true"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;