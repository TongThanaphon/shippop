import React from "react";
import styled from "styled-components";

import { FieldInputProps } from "formik";

interface SelectInputProps extends Partial<FieldInputProps<any>> {
  width: string;
  options: string[];
}

export const SelectInput: React.FC<SelectInputProps> = (props) => {
  const { width, options, name, value, onChange } = props;

  return (
    <SelectWrapper width={width} name={name} value={value} onChange={onChange}>
      {options.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </SelectWrapper>
  );
};

const SelectWrapper = styled.select<{ width: string }>`
  border-radius: 20px;
  border: 2px solid #c8c8c8;

  padding: 10px 15px;

  font-size: 18px;

  background-color: #fff;

  width: ${(p) => p.width};
`;
