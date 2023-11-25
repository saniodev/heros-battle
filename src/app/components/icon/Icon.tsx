import React from 'react';
import IconProps from '../../interfaces/iconProps/IconProps';

const Icon: React.FC<IconProps> = ({ icon: IconComponent , ...props }) => {
  return <IconComponent {...props} className='text-white font-mono' />;
};

export default Icon;