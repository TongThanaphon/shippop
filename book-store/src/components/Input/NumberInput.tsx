import React from "react";
import styled from "styled-components";

interface NumberInputProps {
  max: number;
  min: number;
  value: number;
  setValue: (val: number) => void;
}

export const NumberInput: React.FC<NumberInputProps> = (props) => {
  const { max, min, setValue, value } = props;

  return (
    <InputWrapper
      type="number"
      max={max}
      min={min}
      value={value}
      onChange={(e) => {
        let val = Number(e.target.value);
        if (val > max) {
          setValue(max);
        } else {
          setValue(val);
        }
      }}
    />
  );
};

const InputWrapper = styled.input`
  background-color: #c4c4c4;

  width: 100px;
  padding: 15px;

  text-align: center;
  font-weight: bold;

  border: none;
  border-radius: 5px;

  &:focus {
    outline: none;
  }
`;
