import React from 'react';

const WhatsAppButton = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <a
    href="https://wa.me/6285716551653?text=Halo%20HADIGITAL,%20saya%20tertarik%20dengan%20layanan%20Anda."
    target="_blank"
    rel="noreferrer"
    className={className}
  >
    {children}
  </a>
);

export default WhatsAppButton;
