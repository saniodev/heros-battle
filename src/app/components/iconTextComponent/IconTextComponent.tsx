import React from 'react';
import IconTextComponentProps from '../../interfaces/iconTextComponentProps/IconTextComponentProps';
import Icon from '../icon/Icon';

const IconTextComponent: React.FC<IconTextComponentProps> = ({ icon, text }) => {
  return (
    <div className='text-center'>
      <Icon icon={icon} size={40} />
      <p>{text}</p>
    </div>
  );
};

export default IconTextComponent;