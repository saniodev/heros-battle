import React from 'react';
import TextComponentProps from '../../interfaces/textComponentProps/TextComponentProps';

const TextComponent: React.FC<TextComponentProps> = ({ text }) => {
  const uppercaseText = text.toUpperCase();

  return <div className='text-white font-semibold'>{uppercaseText}</div>;
};

export default TextComponent;