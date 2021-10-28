import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { Button } from "../Button/Button";
import { CrossIcon } from "../icons/CrossIcon";
import { PenIcon } from "../icons/PenIcon";

import { ProductState } from "../../redux/Cart/CartSlice";

interface CartDetailProps {
  totalAmount: number;
  totalPrice: number;
  products: ProductState[];
}

export const CartDetail: React.FC<CartDetailProps> = (props) => {
  const { totalAmount, totalPrice, products } = props;
  const { push } = useHistory();

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
      <TextBold>ตะกร้าของฉัน</TextBold>
      <TextNormal>{totalAmount} สินค้าในตะกร้า</TextNormal>
      <Button
        text="ดูหรือแก้ไขตะกร้าของฉัน"
        background="#fff"
        borderColor="blue"
        textColor="blue"
        width="80%"
        onClick={() => push("/cart")}
      />
      <ProductContainer>
        {products.map((product: any, index: number) => (
          <div key={index}>
            <ProductContent>
              <ProductAmount>{product.amount} x</ProductAmount>
              <ProductImage>
                <img src={product.image} alt="" />
              </ProductImage>
              <ProductName>
                <p>{product.title}</p>
              </ProductName>
              <Action>
                <IconWrapper>
                  <CrossIcon color="#8c8c8c" size={15} />
                </IconWrapper>
                <IconWrapper>
                  <PenIcon color="#8c8c8c" size={10} />
                </IconWrapper>
              </Action>
            </ProductContent>
            {index !== products.length - 1 && <Line />}
          </div>
        ))}
      </ProductContainer>
      <Price>
        <p>ยอดรวม:</p>
        <p>{priceFormat(totalPrice)}</p>
      </Price>
      <Button
        width="80%"
        text="ไปชำระเงิน"
        onClick={() => push("/transaction")}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 420px;

  padding: 30px 0;

  box-sizing: border-box;

  background-color: #fff;

  cursor: default;

  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.6);

  position: absolute;
  left: -300px;
  top: 25px;

  display: flex;
  flex-direction: column;
  align-items: center;

  > * + * {
    margin-top: 20px;
  }
`;

const TextBold = styled.p`
  margin: 0;

  font-weight: bold;
  font-size: 22px;
  color: #333;
`;

const TextNormal = styled.p`
  margin: 0;

  font-size: 16px;
  color: #8c8c8c;
`;

const ProductContainer = styled.div`
  overflow-y: scroll;

  height: 180px;
  width: 100%;

  padding: 15px;

  box-sizing: border-box;

  border-top: 3px solid #c4c4c4;
  border-bottom: 3px solid #c4c4c4;

  > * + * {
    margin-top: 20px;
  }
`;

const Price = styled.div`
  display: flex;

  padding: 10px 0;

  > p {
    margin: 0;

    font-weight: bold;

    &:nth-child(1) {
      color: #8c8c8c;
      font-size: 18px;
    }

    &:nth-child(2) {
      font-size: 22px;
      color: #333;

      margin-left: 5px;
    }
  }
`;

const ProductContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const ProductAmount = styled.p`
  margin: 0;

  font-size: 20px;
`;

const ProductName = styled.div`
  width: 120px;

  overflow: hidden;

  > p {
    margin: 0;

    font-size: 16px;

    text-overflow: ellipsis;
    overflow: hidden;
  }

  align-self: flex-start;
`;

const Line = styled.div`
  border-bottom: 1px solid #c8c8c8;
`;

const ProductImage = styled.div`
  height: 80px;

  > img {
    width: 100%;
    height: 100%;
  }
`;

const Action = styled.div`
  display: flex;
  flex-direction: column;

  align-self: flex-start;

  > * + * {
    margin-top: 8px;
  }
`;

const IconWrapper = styled.div`
  border-radius: 50%;
  border: 2px solid #8c8c8c;

  background-color: #fff;

  width: 24px;
  height: 24px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
