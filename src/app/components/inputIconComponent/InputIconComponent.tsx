import React from 'react';
import InputIconComponentProps from '../../interfaces/inputIconComponentProps/InputIconComponentProps';

const InputIconComponent: React.FC<InputIconComponentProps> = ({ icon, ...inputProps }) => {
  return (
    <div className='relative'>
      {icon && <div className='absolute right-full left-3 top-1/4 text-red-300'>{icon}</div>}
      <input {...inputProps} className="text-white font-light mt-0 mb-6 bg-slate-800 w-96 h-10 rounded-md focus:border-2 focus:border-solid focus:border-slate-900 p-2 pl-10"/>
    </div>
  );
};

export default InputIconComponent;