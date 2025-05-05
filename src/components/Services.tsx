import React from 'react';
import { 
  Scale, 
  Briefcase, 
  Building2, 
  Receipt, 
  Home, 
  ShoppingCart 
} from 'lucide-react';
import { SERVICES } from '../utils/constants';

const ServiceIconMap = {
  Scale: Scale,
  Briefcase: Briefcase,
  Building2: Building2,
  Receipt: Receipt,
  Home: Home,
  ShoppingCart: ShoppingCart,
};

const ServiceCard: React.FC<{
  title: string;
  description: string;
  icon: keyof typeof ServiceIconMap;
}> = ({ title, description, icon }) => {
  const IconComponent = ServiceIconMap[icon];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 hover:shadow-lg hover:translate-y-[-4px]">
      <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center mb-4">
        <IconComponent size={28} className="text-primary-800" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-primary-800">{title}</h3>
      <p className="text-neutral-700">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-neutral-50 py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Nossos Serviços</h2>
        <p className="text-center max-w-3xl mx-auto text-neutral-700 mb-12">
          Oferecemos assistência jurídica especializada em diversas áreas do Direito, 
          sempre com o compromisso de buscar as melhores soluções para cada caso.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon as keyof typeof ServiceIconMap}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;