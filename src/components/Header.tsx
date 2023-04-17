import React from "react";
import styled from "styled-components";

export const SlimeImage = styled.img`
  z-index: 10;
  height: 5rem;
  width: 5rem;
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  @media (max-width: 640px) {
    height: 4rem;
    width: 4rem;
  }
`;

export const HeaderComponent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  &:hover ${SlimeImage} {
    transform: translateY(5rem);
  }
  @media (max-width: 640px) {
    width: 90%;
  }
`;

export const Title = styled.h1`
  position: relative;
  z-index: 50;
  font-size: 6rem;
  font-weight: 900;
  line-height: 1;
  color: #00ff75;
  @media (max-width: 640px) {
    font-size: 4.5rem;
  }
`;

export const SlimeContainer = styled.div`
  position: absolute;
  right: -0.5rem;
  top: -2rem;
  overflow: hidden;
  @media (max-width: 640px) {
    top: -1.6rem;
  }
`;

function Header() {
  return (
    <HeaderComponent>
      <div className="relative">
        <Title>Clonaroo</Title>
        <SlimeContainer>
          <SlimeImage src="./slime.gif" alt="slime" />
        </SlimeContainer>
      </div>
      <p className="text-[#F3F3F3] text-center">
        Speak your mind and be heard - Share your voice with the world!
      </p>
    </HeaderComponent>
  );
}

export { Header };
