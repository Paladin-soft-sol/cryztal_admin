import React from 'react';
import './footer.css';

/**
 *
 * @returns {React.ReactElement} - returns the Footer component
 */
export const Footer = () => {
  return (
    <footer className="foot_section_dashboard">
      <span dangerouslySetInnerHTML={{ __html: '&copy;' }} />
      <span className="deal"> Cryztal 2022</span>
    </footer>
  );
};
