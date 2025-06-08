import React from "react";
import techs from "../data/techs";
import styled from "styled-components";

const TechWrapper = styled.section`
  background: #f6ced8;
  padding: 2rem 0;
  text-align: center;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
`;

const TechItem = styled.div`
  background: #a2b9bc;
  color: #fff;
  border-radius: 12px;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  min-width: 100px;
`;

export default function TechStack() {
    return (
        <TechWrapper>
            <h2>Tech Stack</h2>
            <TechList>
                {techs.map((tech) => (
                    <TechItem key={tech}>{tech}</TechItem>
                ))}
            </TechList>
        </TechWrapper>
    );
}
