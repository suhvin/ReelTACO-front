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
      desc: "Hey, I'm in the mood for a movie tonight. Do you have any recommendations?",
    },
    {
      type: "recommender",
      desc: "Absolutely! I'd love to help you find the perfect movie. Tell me, what kind of movies do you enjoy?",
    },
    {
      type: "seeker",
      desc: "Well, I have quite a diverse taste in movies. I love romantic comedies that blend awkwardly hilarious family moments with touches of poignancy. Movies that explore complex family dynamics and showcase endearing characters are right up my alley. I'm a sucker for humor too, so if a movie can make me laugh and provide plenty of laughs, that's a big plus. And if it has a touch of cuteness and prettiness, even better! However, I'm not a fan of films lacking intelligence or humor. Forced dialogue and frequent lame jokes can really detract from my enjoyment.",
    },
    {
      type: "recommender",
      desc: "I see. You appreciate a mix of comedy, romance, and family dynamics, with movies that have substance and heart. Based on your preferences, I have a fantastic recommendation for you. Have you heard of [Love Is All You Need (2013)]?",
    },
    {
      type: "seeker",
      desc: "Hmm, I can't say I'm familiar with that one. What's it about?",
    },
    {
      type: "recommender",
      desc: "Well, [Love Is All You Need (2013)] is a delightful romantic comedy that I believe perfectly aligns with your taste. It tells the story of a woman who, amidst personal struggles, travels to Italy for her daughter's wedding. While there, she encounters a man who has his own fair share of challenges. Their paths intertwine, leading to unexpected and heartwarming moments.",
    },
    {
      type: "seeker",
      desc: "That sounds intriguing! I love movies with unexpected moments and heartfelt connections. Is there any humor in it?",
    },
    {
      type: "recommender",
      desc: "Absolutely! The movie has its fair share of witty and humorous moments, blending them seamlessly with the romantic storyline. It's not just about the romance, but also about the funny and awkward situations the characters find themselves in. The comedy adds a layer of charm and lightness to the overall story.",
    },
    {
      type: "seeker",
      desc: "That's exactly what I'm looking for! It sounds like it has all the elements I enjoy in a movie—romance, family dynamics, humor, and heart. Is there anything else that makes it special?",
    },
    {
      type: "recommender",
      desc: "Definitely! One of the standout aspects of [Love Is All You Need (2013)] is its beautiful setting. The movie takes place in stunning locations in Italy, adding a touch of cuteness and prettiness that you appreciate. The scenery itself becomes a character, enhancing the overall experience.",
    },
    {
      type: "seeker",
      desc: "That's wonderful! I'm sold. I'm excited to watch [Love Is All You Need (2013)]. It seems to tick all the boxes and promises to be an entertaining and heartfelt movie. Thank you so much for the recommendation!",
    },
    {
      type: "recommender",
      desc: "You're welcome! I'm confident you'll thoroughly enjoy it. It's a charming film that captures the essence of the genres and themes you appreciate. Grab some popcorn, sit back, and immerse yourself in the world of [Love Is All You Need (2013)]. Happy watching!",
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
