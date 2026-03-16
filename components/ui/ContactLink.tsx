'use client';

import { useContactModal } from '@/lib/ContactModalContext';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ContactLinkProps {
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
}

export default function ContactLink({ 
  children, 
  className = '',
  showArrow = false
}: ContactLinkProps) {
  const { openContactModal } = useContactModal();

  return (
    <button
      onClick={openContactModal}
      className={className}
    >
      {children}
      {showArrow && <ArrowRight className="w-4 h-4" />}
    </button>
  );
}