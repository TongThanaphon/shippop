import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  selectCartItems,
  selectTotalAmount,
  selectTotalPrice,
} from "../../redux/Cart/CartSlice";

import { NavMenuItem } from "./NavMenuItem";
import { Avatar } from "./Avatar";
import { SearchInput } from "../Input/SearchInput";
import { CartDetail } from "./CartDetail";

import { CartIcon } from "../icons/CartIcon";
import { SearchIcon } from "../icons/SearchIcon";
import { CrossIcon } from "../icons/CrossIcon";

const NavMenuItems = [
  {
    text: "สินค้าใหม่",
    href: "",
  },
  {
    text: "สินค้าขายดี",
    href: "",
  },
  {
    text: "สินค้าลดราคา",
    href: "",
  },
  {
    text: "สินค้าแนะนำ",
    href: "",
  },
];

export const Header: React.FC = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [search, setSearch] = useState("");
  const cartProduct = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <Navbar>
      <Container>
        <Link to="/">
          <Logo>
            <div>Book</div>
          </Logo>
        </Link>
        <NavMenu>
          {!isSearch ? (
            <>
              {NavMenuItems.map((item, index) => {
                return <NavMenuItem key={index} {...item} />;
              })}
            </>
          ) : (
            <SearchInput
              placeholder="ค้นหาสินค้า"
              onSubmit={() => alert(search)}
              setSearch={setSearch}
            />
          )}
        </NavMenu>
        <RightMenu>
          {!isSearch ? (
            <SearchIcon onClick={() => setIsSearch(!isSearch)} />
          ) : (
            <CrossIcon onClick={() => setIsSearch(!isSearch)} />
          )}
          <CartWrapper>
            <CartIcon />
            {totalAmount > 0 && (
              <>
                <CartNoti>{totalAmount}</CartNoti>
                <CartDetailWrapper>
                  <CartDetail
                    totalAmount={totalAmount}
                    totalPrice={totalPrice}
                    products={cartProduct}
                  />
                </CartDetailWrapper>
              </>
            )}
          </CartWrapper>
          <Avatar image="https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg" />
        </RightMenu>
      </Container>
    </Navbar>
  );
};

const Navbar = styled.div`
  height: 70px;
  width: 100%;

  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.6);

  background-color: #fff;

  display: flex;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
`;

const Container = styled.div`
  max-width: 1600px;
  width: 100%;
  height: 100%;

  padding: 10px;

  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  > div {
    font-weight: bold;
    font-size: 40px;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;

  margin: 0 auto 0 60px;

  height: 100%;
  width: 100%;

  > a + a {
    margin-left: 30px;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;

  > div + div {
    margin-left: 30px;
  }
`;

const CartDetailWrapper = styled.div`
  display: none;
`;

const CartWrapper = styled.div`
  position: relative;

  cursor: pointer;

  &:hover {
    ${CartDetailWrapper} {
      display: block;
    }
  }
`;

const CartNoti = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 20px;

  background-color: blue;

  color: #fff;
  font-weight: bold;
  font-size: 10px;

  border-radius: 50%;

  position: absolute;
  top: -10px;
  right: -10px;
`;
