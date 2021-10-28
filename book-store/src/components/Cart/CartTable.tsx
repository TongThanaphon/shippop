import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { ProductState, remove, edit } from "../../redux/Cart/CartSlice";

import { CrossIcon } from "../icons/CrossIcon";
import { PenIcon } from "../icons/PenIcon";
import { NumberInput } from "../Input/NumberInput";

interface CartTableProps {
  data: ProductState[];
}

export const CartTable: React.FC<CartTableProps> = (props) => {
  const { data } = props;
  const dispatch = useDispatch();
  const [currentAmount, setCurrentAmount] = useState(0);

  const priceFormat = (p: number) => {
    return new Intl.NumberFormat("th-TH", {
      style: "currency",
      currency: "THB",
    })
      .format(p)
      .replace("฿", "THB");
  };

  const handleDelete = (id: string) => {
    dispatch(remove({ id }));
  };

  const handleEdit = (id: string, item: ProductState) => {
    let product = {
      ...item,
      amount: currentAmount,
      totalPrice: currentAmount * item.price,
    } as ProductState;

    dispatch(edit({ id, product }));
  };

  return (
    <Table cellSpacing="0">
      <tr>
        <th>สินค้า</th>
        <th>ราคา</th>
        <th>จำนวน</th>
        <th>ยอดรวม</th>
      </tr>
      {data.map((item, index) => {
        return (
          <tr key={index}>
            <td>
              <ProductDetail>
                <ImageWrapper>
                  <img src={item.image} alt="" />
                </ImageWrapper>
                <ProductName>
                  <p>{item.title}</p>
                </ProductName>
              </ProductDetail>
            </td>
            <td>
              <Price>{priceFormat(item.price)}</Price>
            </td>
            <td>
              <NumberInput
                max={999}
                min={1}
                value={currentAmount > 0 ? currentAmount : item.amount}
                setValue={setCurrentAmount}
              />
            </td>
            <td>
              <SummarizeContainer>
                <Price>{priceFormat(item.totalPrice)}</Price>
                <Action>
                  <IconWrapper>
                    <CrossIcon
                      size={20}
                      color="#c8c8c8"
                      onClick={() => handleDelete(item.id)}
                    />
                  </IconWrapper>
                  <IconWrapper>
                    <PenIcon
                      size={14}
                      color="#c8c8c8"
                      onClick={() => handleEdit(item.id, item)}
                    />
                  </IconWrapper>
                </Action>
              </SummarizeContainer>
            </td>
          </tr>
        );
      })}
    </Table>
  );
};

const Table = styled.table`
  width: 100%;

  > tr:nth-child(1) {
    text-align: left;

    > th {
      padding: 10px;
    }
  }

  > tr > th,
  tr > td {
    border-bottom: 3px solid #c8c8c8;
  }

  > tr > td {
    padding: 20px 10px;
    vertical-align: top;
  }

  > tr > th:nth-child(1) {
    width: 380px;
  }
`;

const ProductDetail = styled.div`
  display: flex;
`;

const ProductName = styled.div`
  > p {
    margin: 0;

    word-wrap: break-word;
  }
`;

const ImageWrapper = styled.div`
  height: 120px;

  > img {
    height: 100%;

    object-fit: cover;
  }
`;

const Price = styled.p`
  margin: 0;

  font-size: 20px;
  font-weight: bold;
`;

const SummarizeContainer = styled.div`
  display: flex;

  > * + * {
    margin-left: 20px;
  }
`;

const Action = styled.div`
  > * + * {
    margin-top: 10px;
  }
`;

const IconWrapper = styled.div`
  width: 30px;
  height: 30px;

  border: 2px solid #c8c8c8;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
