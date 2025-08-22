import { Button as AntdButton } from "antd";
import type { ButtonType } from "antd/es/button";
import type { CommonComponentProps } from "../../interface";

export interface ButtonProps {
  type: ButtonType;
  text: string;
}

const Button = ({ id, type, text, styles }: CommonComponentProps) => {
  return <AntdButton data-component-id={id} type={type} style={styles}>{text}</AntdButton>;
};

export default Button;
