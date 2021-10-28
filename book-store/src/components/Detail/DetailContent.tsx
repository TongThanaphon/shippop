import React, { useState } from "react";
import styled from "styled-components";

import { NumberInput } from "../Input/NumberInput";
import { Button } from "../Button/Button";
import { HeartSolidIcon } from "../icons/HeartSolidIcon";
import { FacebookIcon } from "../icons/FacebookIcon";
import { MailIcon } from "../icons/MailIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { GoogleIcon } from "../icons/GoogleIcon";

interface DetailContentProps {
  id: string;
  covers: { front: string; back: string };
  title: string;
  author: string;
  publisher: string;
  categories: string[];
  type: string;
  code: string;
  price: { original: number; discounted: number };
  quantity: number;
  onAddToCart: (amount: number) => void;
}

export const DetailContent: React.FC<DetailContentProps> = (props) => {
  const {
    covers,
    title,
    author,
    publisher,
    categories,
    type,
    code,
    price,
    quantity,
    onAddToCart,
  } = props;

  const [displayImg, setDisplayImg] = useState(covers.front);
  const [amount, setAmount] = useState(1);

  const priceFormat = (p: number) => {
    return new Intl.NumberFormat("th-TH", {
      style: "currency",
      currency: "THB",
    })
      .format(p)
      .replace("฿", "THB");
  };

  const handleCategories = () => {
    let s = "";
    categories.map((c) => (s += c + " "));
    return s;
  };

  return (
    <Container>
      <div>
        <ImagePreview>
          <img src={displayImg} alt="" />
        </ImagePreview>
        <PreviewChoice>
          <div onClick={() => setDisplayImg(covers.front)}>
            <img src={covers.front} alt="" />
          </div>
          <div onClick={() => setDisplayImg(covers.back)}>
            <img src={covers.back} alt="" />
          </div>
        </PreviewChoice>
      </div>

      <Left>
        <div>
          <Title>{title}</Title>
          <Detail>
            <p>ผู้เขียน: {author}</p>
            <p>สำนักพิมพ์: {publisher}</p>
            <p>หมวดหมู่: {handleCategories()}</p>
            <p>ประเภทสินค้า: {type}</p>
            <p>บาร์โค้ด: {code}</p>
          </Detail>
        </div>

        <div>
          <Price>
            <p>ราคา</p>
            <p>{priceFormat(price.discounted)}</p>
            <p>{priceFormat(price.original)}</p>
          </Price>

          <Action>
            <NumberInput
              max={quantity}
              min={1}
              setValue={setAmount}
              value={amount}
            />
            <Button text="Add" onClick={() => onAddToCart(amount)} />
            <Button
              text="Wishlist"
              background="#f2994a"
              icon={<HeartSolidIcon color="#fff" />}
            />
          </Action>
          <Share>
            <p>แชร์ : </p>
            <div>
              <IconWrapper background="#659b41">
                <MailIcon color="#fff" size={24} />
              </IconWrapper>
              <IconWrapper background="#2b4560">
                <TwitterIcon color="#fff" size={24} />
              </IconWrapper>
              <FacebookIcon color="#1977f2" size={40} />
              <GoogleIcon color="#f63d28" size={40} />
            </div>
          </Share>
        </div>
      </Left>
    </Container>
  );
};

const Container = styled.div`
  display: flex;

  > div + div {
    margin-left: 80px;
  }

  @media (max-width: 1100px) {
    flex-direction: column;

    align-items: center;

    > div + div {
      margin-left: 0;
    }
  }
`;

const Left = styled.div`
  width: 45%;

  padding: 20px 0;

  > div:nth-child(1) {
    > * + * {
      margin-top: 20px;
    }
  }

  > div:nth-child(2) {
    margin-top: 60px;

    > * + * {
      margin-top: 30px;
    }
  }
`;

const ImagePreview = styled.div`
  height: 650px;
  width: 480px;

  > img {
    height: 100%;
    width: 100%;
  }
`;

const PreviewChoice = styled.div`
  display: flex;

  margin-top: 30px;

  cursor: pointer;

  > div + div {
    margin-left: 30px;
  }

  > div {
    height: 220px;

    &:hover {
      border: 3px solid #333;
    }

    > img {
      height: 100%;

      object-fit: cover;
    }
  }
`;

const Title = styled.p`
  margin: 0;

  font-size: 38px;
  font-weight: bold;
`;

const Detail = styled.div`
  > p {
    margin: 0;

    font-size: 20px;
  }
`;

const Price = styled.div`
  display: flex;
  align-items: center;

  > p {
    margin: 0;

    font-size: 30px;

    &:nth-child(2) {
      font-size: 38px;
      font-weight: bold;
      margin-left: 50px;
    }

    &:nth-child(3) {
      margin-left: 20px;

      text-decoration: line-through;
      font-weight: bold;

      color: #828282;
    }
  }
`;

const Action = styled.div`
  display: flex;

  > * + * {
    margin-left: 20px;
  }
`;

const Share = styled.div`
  display: flex;
  align-items: center;

  > p {
    margin: 0;

    font-size: 20px;
  }

  > div {
    display: flex;

    padding: 0 20px;

    > * + * {
      margin-left: 15px;
    }
  }
`;

const IconWrapper = styled.div<{ background: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(p) => p.background};

  height: 40px;
  width: 40px;

  border-radius: 50%;
`;
