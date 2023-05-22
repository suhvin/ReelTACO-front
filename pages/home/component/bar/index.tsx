import styled from "@emotion/styled";
import React from "react";
import Margin from "../margin";

const Bar = () => {
  return (
    <BarContainer>
      <Title>ReelTACO</Title>
    </BarContainer>
  );
};

export default Bar;

const BarContainer = styled.div`
  width: 100%;
  height: 10vh;
  background-color: #003876;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-family: Pretendard;
  font-style: normal;
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  margin: 0 auto;
  text-align: center;
`;
