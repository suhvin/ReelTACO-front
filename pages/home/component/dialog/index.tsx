import styled from "@emotion/styled";
import React, { use, useEffect, useRef, useState } from "react";
import Dot from "../dot";
import { Input } from "@chakra-ui/react";
import Airplane from "../../../../public/asset/common/airplane.svg";
import Image from "next/image";
import SeekerTalk from "../talk/seeker-talk";
import RecommenderTalk from "../talk/recommender-talk";
import axios from "axios";

const Dialog = () => {
  const [content, setContent] = useState([
    {
      type: "seeker",
      desc: "영화 추천해줘",
    },
  ]);

  const [inputValue, setInputValue] = useState("");
  const onChangeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (element) {
      element.scrollTop = element.scrollHeight;
    }
  }, [content]);

  const sendData = async (temp?: any) => {
    try {
      const response = await axios.post(
        "http://localhost:5001/api",
        temp ?? content
      );
      setContent(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    sendData();
  }, []);

  const onClickAirplane = () => {
    if (inputValue !== "") {
      const temp = [...content, { type: "seeker", desc: inputValue }];
      setContent(temp);
      setInputValue("");
      sendData(temp);
    }
  };

  return (
    <DialogContainer>
      <TopBar>
        <DotBox>
          <Dot c="#FF5E58" />
          <Dot c="#FEBD2B" />
          <Dot c="#00C403" />
        </DotBox>
      </TopBar>
      <TalkBox ref={elementRef}>
        {content.map((item, index) => {
          return item.type === "seeker" ? (
            <SeekerTalk key={index} desc={item.desc} />
          ) : (
            <RecommenderTalk key={index} desc={item.desc} />
          );
        })}
      </TalkBox>
      <InputBox>
        <Input
          fontSize="sm"
          value={inputValue}
          onChange={onChangeInputValue}
          focusBorderColor="#f4f4f4"
        />
        <Image
          src="/asset/common/airplane.svg"
          alt=""
          width={30}
          height={30}
          style={{ marginLeft: "20px" }}
          onClick={onClickAirplane}
        />
      </InputBox>
    </DialogContainer>
  );
};

export default Dialog;

const DialogContainer = styled.div`
  width: 90%;
  height: 80vh;
  margin: 5vh auto;
  border-radius: 10px;
  border: 1px solid #e8e8e8;
`;

const TopBar = styled.div`
  width: 100%;
  height: 4vh;
  border-radius: 9px 9px 0px 0px;
  background-color: #e8e8e8;
  display: flex;
  align-items: center;
`;

const DotBox = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: row;
`;

const TalkBox = styled.div`
  width: 100%;
  height: calc(100% - 5vh - 40px - 20px - 20px);
  padding: 20px 20px 0px 20px;
  margin-bottom: 20px;
  overflow-y: scroll;
`;

const InputBox = styled.div`
  width: 100%;
  height: 40px;
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
