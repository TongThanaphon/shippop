import React from "react";
import styled from "styled-components";

import { SearchIcon } from "../icons/SearchIcon";

interface SearchInputProps {
  placeholder: string;
  setSearch: (val: string) => void;
  onSubmit: () => void;
}

export const SearchInput: React.FC<SearchInputProps> = (props) => {
  const { placeholder, onSubmit, setSearch } = props;

  return (
    <Container>
      <form onSubmit={onSubmit} style={{ width: "199%" }}>
        <Input
          placeholder={placeholder}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <SearchIcon color="blue" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;

  background-color: #ebebeb;

  padding: 15px;

  border-radius: 20px;

  width: 100%;
`;

const Input = styled.input`
  width: 100%;

  border: none;
  outline: none;

  background-color: transparent;

  font-size: 18px;
`;
