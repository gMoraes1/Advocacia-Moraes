import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ_ITEMS } from '../utils/constants';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-neutral-200 rounded-lg overflow-hidden mb-4">
      <button
        className={`w-full text-left p-5 flex justify-between items-center font-medium transition ${
          isOpen ? 'bg-primary-50 text-primary-800' : 'bg-white hover:bg-neutral-50'
        }`}
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="text-lg">{question}</span>
        {isOpen ? (
          <ChevronUp className="flex-shrink-0 ml-2" />
        ) : (
          <ChevronDown className="flex-shrink-0 ml-2" />
        )}
      </button>
      
      {isOpen && (
        <div className="p-5 bg-white border-t border-neutral-200 animate-fade-in">
          <p className="text-neutral-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Dúvidas Frequentes</h2>
        <p className="text-center max-w-3xl mx-auto text-neutral-700 mb-12">
          Respondemos às perguntas mais comuns sobre nossos serviços e processos jurídicos.
          Se você não encontrar a resposta que procura, entre em contato conosco.
        </p>
        
        <div className="max-w-3xl mx-auto">
          {FAQ_ITEMS.map((item) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openId === item.id}
              onClick={() => handleToggle(item.id)}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-neutral-700 mb-4">
            Não encontrou o que procurava?
          </p>
          <a href="#footer" className="btn btn-outline">
            Entre em contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;