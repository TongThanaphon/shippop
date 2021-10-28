import React from "react";
import styled from "styled-components";

import { Field } from "formik";

import { CashIcon } from "../icons/CashIcon";
import { CreditIcon } from "../icons/CreditIcon";

interface RadioButtonFormikCashProps {
  value: string;
  label: string;
  name: string;
}

export const RadioButtonFormikCash: React.FC<RadioButtonFormikCashProps> = (
  props
) => {
  const { value, label, name } = props;

  return (
    <Container>
      <Field type="radio" value={value} name={name} />
      <Name>
        {value === "Cash" && (
          <IconWrapper>
            <CashIcon />
          </IconWrapper>
        )}
        {value === "Credit/Debit" && <CreditIcon size={32} />}
        <Text>{label}</Text>
      </Name>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;

  border-radius: 10px;

  height: 120px;
  width: 100%;

  box-sizing: border-box;

  padding: 20px;

  border: 2px solid #c8c8c8;
`;

const IconWrapper = styled.div`
  border-radius: 50%;

  border: 2px solid #333;
  background-color: #fff;

  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Name = styled.div`
  margin-left: 20px;

  display: flex;
  align-items: center;
`;

const Text = styled.p`
  margin: 0;
  margin-left: 20px;

  font-size: 20px;

  text-align: center;
`;
