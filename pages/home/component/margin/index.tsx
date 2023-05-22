import styled from "@emotion/styled";
import React from "react";

type Props = {
  h: number;
};

const Margin = ({ h }: Props) => {
  return <div style={{ width: "100%", height: h + "px" }} />;
};

export default Margin;
