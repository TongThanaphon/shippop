import React from "react";
import styled from "styled-components";

import { Button } from "../Button/Button";

import { CorrectIcon } from "../icons/CorrectIcon";
import { HeartBorderIcon } from "../icons/HeartBorderIcon";
import { StarIcon } from "../icons/StarIcon";
import { CartIcon } from "../icons/CartIcon";

interface ProductCardProps {
  quantity: number;
  image: string;
  review: { rate: number; amount: number };
  title: string;
  price: { original: number; discounted: number };
  onAddToCart?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = (props) => {
  const { quantity, image, review, title, price, onAddToCart } = props;

  const priceFormat = (p: number) => {
    return new Intl.NumberFormat("th-TH", {
      style: "currency",
      currency: "THB",
    })
      .format(p)
      .replace("฿", "THB");
  };

  return (
    <Card>
      <Upper>
        {quantity > 0 && (
          <Tag>
            <CorrectIcon size={14} color="#78a962" />
            <p>มีสินค้า</p>
          </Tag>
        )}
        <ProductImage>
          <img src={image} alt="" />
        </ProductImage>
        <ButtonWrapper>
          <Button
            text="Add To Cart"
            background="#fff"
            borderColor="#0156ff"
            textColor="#0156ff"
            icon={<CartIcon color="#0156ff" onClick={onAddToCart} />}
          />
        </ButtonWrapper>
      </Upper>
      <Rating>
        <StarContainer>
          {[1, 2, 3, 4, 5].map((i) => {
            if (review.rate - i >= 0) {
              return <StarIcon key={i} size={15} color="#e9a426" />;
            } else {
              return <StarIcon key={i} size={15} color="#c4c4c4" />;
            }
          })}
        </StarContainer>
        <p>Reviews ({review.amount})</p>
      </Rating>
      <Title>
        <p>{title}</p>
      </Title>
      <Price>
        <p>{priceFormat(price.discounted)}</p>
        <p>{priceFormat(price.original)}</p>
      </Price>

      <ActionContainer>
        <IconWrapper>
          <HeartBorderIcon color="#c4c4c4" size={20} />
        </IconWrapper>
        <IconWrapper>
          <GraphIcon>
            <div></div>
            <div></div>
            <div></div>
          </GraphIcon>
        </IconWrapper>
      </ActionContainer>
    </Card>
  );
};

const ButtonWrapper = styled.div`
  display: none;

  margin-bottom: 20px;
`;

const ActionContainer = styled.div`
  display: none;

  position: absolute;
  top: 28px;
  right: 20px;

  > div + div {
    margin-top: 5px;
  }
`;

const Upper = styled.div`
  padding: 0 30px 0 15px;
`;

const Card = styled.div`
  width: 360px;
  max-height: 480px;

  cursor: pointer;

  padding: 12px 32px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  background-color: #fff;

  position: relative;
  z-index: 1;

  &:hover {
    box-shadow: 0px 0px 8px 5px rgba(0, 0, 0, 0.2);
    z-index: 2;

    > ${Upper} > ${ButtonWrapper}, ${ActionContainer} {
      display: block;
    }
  }
`;

const Tag = styled.div`
  display: flex;
  align-items: center;

  > p {
    margin: 0 0 0 8px;

    font-size: 14px;
    color: #78a962;
  }
`;

const ProductImage = styled.div`
  height: 200px;

  display: flex;
  justify-content: center;

  > img {
    height: 100%;

    object-fit: cover;
  }
`;

const Rating = styled.div`
  display: flex;
  align-items: center;

  margin-top: 10px;

  > p {
    margin: 0 0 0 12px;

    font-size: 16px;
    color: #a2a2a2;
  }
`;

const StarContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  margin-top: 10px;

  height: 44px;
  width: 230px;

  > p {
    margin: 0;

    font-weight: bold;
    font-size: 18px;
    line-height: 1.25;

    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

const Price = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: end;

  margin-top: 20px;
  margin-bottom: 10px;

  > p {
    margin: 0;
  }

  > p:nth-child(1) {
    text-decoration: line-through;

    color: #a2a2a2;
    font-size: 22px;
  }

  > p:nth-child(2) {
    color: #333;

    font-weight: bold;
    font-size: 28px;
  }
`;

const IconWrapper = styled.div`
  border: 2px solid #c4c4c4;
  border-radius: 50%;

  height: 38px;
  width: 38px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const GraphIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  > div {
    width: 3px;

    background-color: #c4c4c4;
  }

  > div:nth-child(1) {
    height: 10px;
  }

  > div:nth-child(2) {
    height: 20px;
  }

  > div:nth-child(3) {
    height: 15px;
  }

  > div + div {
    margin-left: 3px;
  }
`;
