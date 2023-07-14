import React from "react";
import { GridLoader } from "react-spinners";

type Props = {
  className?: string;
  color?: string;
  size?: number | string;
};

const Spinner = ({ className, color, size }: Props) => {
  return <GridLoader className={className} size={size} color={color} />;
};

export default Spinner;
