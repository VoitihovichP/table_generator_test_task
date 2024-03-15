import { CSSProperties } from 'react';

export interface IIcon {
  color?: string;
  className?: string;
  height?: number;
  width?: number;
  size?: number;
  filled?: boolean;
  style?: CSSProperties;
  onClick?: () => void;
}
