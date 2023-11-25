"use client";

import React, { useState, useEffect } from "react";
import CardProps from "../../interfaces/CardProps/CardProps";
import Image from "../image/Image";
import TextComponent from "../text/TextComponent";
import Icon from "../icon/Icon";
import PowerComponent from "../power/PowerComponent";

const CardComponent: React.FC<CardProps> = ({
  imageProps,
  textProps,
  iconProps,
  powerProps,
  onSelect,
  metahuman,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    onSelect(metahuman);
  };

  useEffect(() => {
    if (isSelected) {
      onSelect(metahuman);
    }
  }, [isSelected]);

  return (
    <div
      className={`flex items-center rounded-md flex-col h-60 w-36 m-6 bg-gradient-to-r from-red-700 to-red-950 ${
        isSelected ? "border-2 border-yellow-500" : ""
      } hover:bg-slate-900 cursor-pointer`}
      onClick={handleClick}
    >
      <Image {...imageProps} className="mb-3 mt-1 w-4/5" />
      <TextComponent {...textProps} />
      <div className="flex items-center space-x-5 justify-between">
        <Icon {...iconProps} />
        <PowerComponent {...powerProps} />
      </div>
    </div>
  );
};

export default CardComponent;
