import styled from "@emotion/styled";
import { type } from "os";
import React from "react";

type Props = {
  desc: string;
};

const SeekerTalk = ({ desc }: Props) => {
  return (
    <SeekerTalkContainer>
      <Talk>
        <Text>{desc}</Text>
      </Talk>
    </SeekerTalkContainer>
  );
};

export default SeekerTalk;

const SeekerTalkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Talk = styled.div`
  display: inline-block;
  max-width: 80%;
  padding: 4px 10px;
  margin-bottom: 15px;
  margin-right: 0px;
  border-radius: 4px;
  background-color: #edf2f7;
  word-break: keep-all;
`;

const Text = styled.p`
  font-size: 12px;
  font-weight: 400;
  font-family: Pretendard;
  color: #718096;
`;
