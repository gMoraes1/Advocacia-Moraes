import React, { ReactNode } from 'react';

interface ContactButtonProps {
  icon: ReactNode;
  text: string;
  href: string;
  variant: 'primary' | 'secondary' | 'outline';
}

const ContactButton: React.FC<ContactButtonProps> = ({ icon, text, href, variant }) => {
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn ${variantClasses[variant]} gap-2`}
    >
      {icon}
      {text}
    </a>
  );
};

export default ContactButton;