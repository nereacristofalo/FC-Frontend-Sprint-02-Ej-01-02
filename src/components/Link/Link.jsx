import React from 'react';
import './Link.css';

const Link = ({ children, underline }) => {
  const linkClasses = ['link'];
  if (underline) {
    linkClasses.push('link-underline');
  }

  return <button className={linkClasses.join(' ')}>{children}</button>;
};

export default Link;
