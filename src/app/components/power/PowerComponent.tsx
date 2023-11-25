import React from "react";
import PowerComponentProps from "../../interfaces/powerComponentProps/PowerComponentProps";

const PowerComponent: React.FC<PowerComponentProps> = ({ value }) => {
  return <div className='text-white font-mono'>{value}</div>;
};

export default PowerComponent;
