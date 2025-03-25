import React from 'react';
import './ContactText.css';

interface ContactTextProps {}

export const ContactText = ({ ...props }: ContactTextProps) => {
  return (
    <>
      <div className="contact-text">
        <p>
           You can reach me here at{' '}
          <a href="mailto:cjan1102@gmail.com">cjan1102@gmail.com</a>. I
          look forward to hearing from you!
        </p>
      </div>
    </>
  );
};

export default ContactText;
