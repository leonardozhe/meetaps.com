'use client';

import { useContactModal } from '@/lib/ContactModalContext';
import { ArrowRight } from 'lucide-react';

interface ContactButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'link';
}

export default function ContactButton({ 
  children, 
  className = '', 
  variant = 'primary' 
}: ContactButtonProps) {
  const { openContactModal } = useContactModal();

  const baseStyles = 'inline-flex items-center justify-center gap-2 transition-colors';
  
  const variantStyles = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-xl',
    secondary: 'btn-secondary',
    link: 'text-blue-600 hover:text-blue-700 font-medium'
  };

  return (
    <button
      onClick={openContactModal}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}