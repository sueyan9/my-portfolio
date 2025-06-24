import React from "react";
import styled from "styled-components";
import palaceImg from "../assets/avatar.png";

const CardWrapper = styled.div`
  position: absolute;
  top: 32px;
  right: 32px;
  z-index: 20;
  @media (max-width: 768px) {
    top: 12px;
    right: 12px;
    transform: scale(0.8);
  }
`;

const Parent = styled.div`
  width: 280px;
  height: 280px;
  perspective: 1000px;
`;

const Card = styled.div`
  height: 100%;
  border-radius: 50px;
  background: linear-gradient(135deg,rgb(121, 102, 231) 0%,  #d7d2f5  100%);
  transition: all 0.5s cubic-bezier(.25,.8,.25,1);
  transform-style: preserve-3d;
  box-shadow: rgba(5, 71, 17, 0.1) 0px 10px 20px -5px;
  position: relative;
  &:hover {
    transform: rotate3d(1, 1, 0, 20deg) scale(1.05);
    box-shadow: rgba(5, 71, 17, 0.2) 0px 20px 30px 0px;
  }
`;

const Glass = styled.div`
  position: absolute;
  inset: 8px;
  border-radius: 55px;
  border-top-right-radius: 100%;
  background: linear-gradient(0deg, rgba(255,255,255,0.349) 0%, rgba(255,255,255,0.815) 100%);
  border-left: 1px solid white;
  border-bottom: 1px solid white;
  transform: translate3d(0px, 0px, 25px);
  transition: all 0.5s;
`;

const Logo = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  transform-style: preserve-3d;
    transform: scale(1.1);
`;

const Circle = styled.span`
  display: block;
  position: absolute;
  aspect-ratio: 1;
  border-radius: 50%;
  top: 0;
  right: 0;
  background: rgba(0, 249, 203, 0.2);
  transition: all 0.5s;
  ${({ size, z, t, r }) => `
    width: ${size}px;
    transform: translate3d(0,0,${z}px);
    top: ${t}px;
    right: ${r}px;
  `}
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
`;

export default function AvatarCard() {
    return (
        <CardWrapper>
            <Parent>
                <Card>
                    <Logo>
                        <Circle size={130} z={20} t={12} r={12} />
                        <Circle size={100} z={40} t={18} r={18} />
                        <Circle size={80} z={60} t={28} r={28} />
                        <Circle size={60} z={80} t={38} r={38} />
                        <Circle size={70} z={100} t={45} r={45} style={{display: "grid", placeContent: "center"}}>
                            <Avatar src={palaceImg} alt="avatar" />
                        </Circle>
                    </Logo>
                    <Glass />
                </Card>
            </Parent>
        </CardWrapper>
    );
}