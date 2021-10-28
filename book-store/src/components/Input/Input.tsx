import React from "react";
import styled from "styled-components";

import { FieldInputProps } from "formik";

interface InputProps extends Partial<FieldInputProps<any>> {
  width: string;
}

export const Input: React.FC<InputProps> = (props) => {
  const { width, name, value, onChange } = props;

  return (
    <InputWrapper width={width} name={name} value={value} onChange={onChange} />
  );
};

const InputWrapper = styled.input<{ width: string }>`
  border-radius: 20px;
  border-color: #c8c8c8;

  padding: 10px 15px;

  font-size: 18px;

  width: ${(p) => p.width};
`;
