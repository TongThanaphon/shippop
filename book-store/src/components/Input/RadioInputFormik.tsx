import React from "react";
import styled from "styled-components";

import { Field } from "formik";

interface RadioInputFormikProps {
  logo?: string;
  value: string;
  label: string;
  name: string;
  cheked?: boolean;
  onClick: (value: any) => void;
}

export const RadioInputFormik: React.FC<RadioInputFormikProps> = (props) => {
  const { value, label, logo, name, onClick, cheked } = props;

  const priceFormat = (p: number) => {
    return new Intl.NumberFormat("th-TH", {
      style: "currency",
      currency: "THB",
    })
      .format(p)
      .replace("฿", "THB");
  };

  return (
    <Container onClick={() => onClick(value)}>
      <div>
        <Field
          type="radio"
          value={value}
          name={name}
          // onClick={() => onClick(value)}
          checked={cheked}
        />
        <Name>
          {logo && (
            <Logo>
              <img src={logo} alt="" />
            </Logo>
          )}
          {!logo && <Text>{label}</Text>}
        </Name>
      </div>
      <Price>
        <p>{priceFormat(Number(value))}</p>
      </Price>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 10px;

  height: 120px;
  width: 100%;

  box-sizing: border-box;

  padding: 20px;

  overflow: hidden;

  border: 2px solid #c8c8c8;

  > div:nth-child(1) {
    display: flex;
    align-items: center;
  }
`;

const Logo = styled.div`
  height: 120px;

  > img {
    height: 100%;
  }
`;

const Name = styled.div`
  margin-left: 20px;

  display: flex;
  justify-content: center;

  width: 200px;
`;

const Text = styled.p`
  margin: 0;

  font-size: 20px;

  text-align: center;
`;

const Price = styled.div`
  > p {
    margin: 0;

    font-weight: bold;
    font-size: 20px;
  }
`;
