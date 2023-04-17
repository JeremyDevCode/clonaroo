import React, { useState } from "react";
import styled from "styled-components";
import { Record } from "./Record";
import { Recording } from "./Recording";
import { Recorded } from "./Recorded";

export const MicContainer = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  border-radius: 1.5rem;
  padding: 1.25rem;
  background: #00ff75;
  box-shadow: 0 4px 0 #00ff7580;
  &:hover {
    transform: translateY(4px);
    box-shadow: none;
  }
  transition: all 100ms ease-in-out;
`;

export const StopContainer = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  border-radius: 1.5rem;
  padding: 1.25rem;
  background: #ed2939;
  box-shadow: 0 4px 0 #ed293980;
  &:hover {
    transform: translateY(4px);
    box-shadow: none;
  }
  transition: all 100ms ease-in-out;
`;

function Main() {
  const [voice, setVoice] = useState("record");

  return (
    <>
      <Record voice={voice} onClick={() => setVoice("recording")} />
      <Recording voice={voice} onClick={() => setVoice("recorded")} />
      <Recorded voice={voice} onClick={() => setVoice("recording")} />
    </>
  );
}

export { Main };
