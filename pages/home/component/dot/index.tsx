import styled from "@emotion/styled";
import React from "react";

type Props = {
  c: string;
};

const Dot = ({ c }: Props) => {
  return <DotContainer c={c}></DotContainer>;
};

export default Dot;

const DotContainer = styled.div<{ c: string }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.c};
  margin-right: 8px;
`;
