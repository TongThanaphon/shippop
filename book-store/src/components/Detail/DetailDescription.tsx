import React, { useState } from "react";
import styled from "styled-components";

interface DetailDescriptionProps {
  title: string;
  description: string;
}

const options = ["เกี่ยวกับสินค้า", "รายละเอียด"];

export const DetailDescription: React.FC<DetailDescriptionProps> = (props) => {
  const { title, description } = props;
  const [select, setSelect] = useState(options[0]);

  return (
    <div>
      <OptionContainer>
        {options.map((option, index) => (
          <Choice
            key={`option-${index}`}
            onClick={() => setSelect(option)}
            isSelect={select === option}
          >
            <p>{option}</p>
            <div></div>
          </Choice>
        ))}
      </OptionContainer>
      <Line />
      <Content>
        {select === options[0] && (
          <>
            <Title>
              <p>รายละเอียด :</p>
              <p>{title}</p>
            </Title>
            <Description>{description}</Description>
          </>
        )}
      </Content>
    </div>
  );
};

const OptionContainer = styled.div`
  display: flex;

  max-width: 1600px;
  width: 100%;
  margin: 0 auto;

  > * + * {
    margin-left: 20px;
  }

  @media (max-width: 1600px) {
    margin: 0 20px;
  }
`;

const Choice = styled.div<{ isSelect: boolean }>`
  cursor: pointer;
  min-width: 120px;

  text-align: center;

  > p {
    margin: 0;

    font-weight: bold;
    font-size: 18px;

    color: ${(p) => (p.isSelect ? "#333" : "#666")};
  }

  > div {
    visibility: ${(p) => (p.isSelect ? "visible" : "hidden")};

    background-color: blue;

    height: 2px;
    width: 100%;
  }
`;

const Line = styled.div`
  border: 2px solid #e6e6e6;

  margin: 40px 0;
`;

const Content = styled.div`
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1600px) {
    margin: 0 20px;
  }
`;

const Title = styled.div`
  display: flex;
  margin-bottom: 20px;

  > p {
    margin: 0;

    font-size: 20px;

    &:nth-child(1) {
      font-weight: bold;
    }
  }

  > p + p {
    margin-left: 10px;
  }
`;

const Description = styled.p`
  margin: 0;

  font-size: 20px;
  line-height: 1.25;
`;
