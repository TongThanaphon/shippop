import React from "react";
import styled from "styled-components";

import { Button } from "../Button/Button";

interface SummarizeProps {
  totalPrice: number;
  shipping: number;
  buttonText: string;
  onClick?: () => void;
  isSubmit?: boolean;
}

export const Summarize: React.FC<SummarizeProps> = (props) => {
  const { totalPrice, shipping, onClick, buttonText, isSubmit } = props;

  const priceFormat = (p: number) => {
    return new Intl.NumberFormat("th-TH", {
      style: "currency",
      currency: "THB",
    })
      .format(p)
      .replace("฿", "THB");
  };
  return (
    <Container>
      <Title>สรุปคำสั่งซื้อ</Title>
      <TextDisplay>
        <p>ยอดรวม</p>
        <p>{priceFormat(totalPrice)}</p>
      </TextDisplay>
      <TextDisplay>
        <p>ค่าส่ง</p>
        <p>{priceFormat(shipping)}</p>
      </TextDisplay>
      <Line />
      <TextDisplay>
        <p>ยอดรวมสุทธิ</p>
        <p>{priceFormat(Number(shipping) + Number(totalPrice))}</p>
      </TextDisplay>
      <Button
        text={buttonText}
        onClick={onClick}
        type={isSubmit ? "submit" : "button"}
      />
    </Container>
  );
};

const Container = styled.div`
  background-color: #f5f9ff;

  width: 440px;
  height: 480px;

  padding: 20px;
  padding-bottom: 40px;
  box-sizing: border-box;

  > *:nth-child(2) {
    margin-top: 40px;
  }

  > * + * {
    margin-top: 30px;
  }
`;

const Title = styled.p`
  margin: 0;

  font-weight: bold;
  font-size: 30px;
`;

const TextDisplay = styled.div`
  display: flex;
  justify-content: space-between;

  > p {
    margin: 0;

    font-weight: bold;
    font-size: 16px;
  }

  &:nth-child(5) > p:nth-child(2) {
    font-size: 24px;
  }
`;

const Line = styled.div`
  border: 2px solid #c8c8c8;

  margin: 40px 0;
`;
