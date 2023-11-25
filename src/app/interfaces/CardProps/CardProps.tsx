import { IconType } from 'react-icons';
import { ImageProps } from "next/image";
import PowerComponentProps from '../powerComponentProps/PowerComponentProps';
import TextComponentProps from '../textComponentProps/TextComponentProps';

interface CardProps {
  imageProps: ImageProps;
  textProps: TextComponentProps;
  iconProps: {
    icon: IconType;
  };
  powerProps: PowerComponentProps;
  onSelect: (metahuman: any) => void;
  metahuman: any;
  isSelected: boolean;
}

export default CardProps;