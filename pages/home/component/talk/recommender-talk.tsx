import styled from "@emotion/styled";
import { type } from "os";
import React from "react";

type Props = {
  desc: string;
};

const RecommenderTalk = ({ desc }: Props) => {
  return (
    <RecommenderTalkContainer>
      <Talk>
        <Text>{desc}</Text>
      </Talk>
    </RecommenderTalkContainer>
  );
};

export default RecommenderTalk;

const RecommenderTalkContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Talk = styled.div`
  display: inline-block;
  max-width: 80%;
  padding: 4px 10px;
  margin-bottom: 15px;
  margin-right: 0px;
  border-radius: 4px;
  background-color: #dae3f3;
  word-break: keep-all;
`;

const Text = styled.p`
  font-size: 12px;
  font-weight: 400;
  font-family: Pretendard;
  color: #003876;
`;
