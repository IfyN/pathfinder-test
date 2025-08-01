import React from 'react';
import styled from 'styled-components'
import heroImage from '../assets/HeroImage.svg'

// Full‐width hero wrapper at top of page
const HeroWrapper = styled.section`
  width: 100vw;
  height: 400px;
  background-color: #f3f4f6; /* light gray fallback */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: 0;
  padding: 0;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`

const HeroImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// Container for overlay text
const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  max-width: 680px;
  padding: 0 2rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;

  color: #223153;
  z-index: 2;
`;

// Main heading
const Title = styled.h1`
  font-size: 3rem;
`;

// Subheading paragraph
const Subtitle = styled.p`
  font-size: 1.25rem;
  margin-top: 0.5rem;
  color: #5F6D7E;
`;

export default function HeroImage() {
    return (
      <HeroWrapper>
        <HeroImageStyled
          src={heroImage}
          alt="Illustration of person in a maze representing career paths"
        />
        <TextContainer>
          <Title>Career path test</Title>
          <Subtitle>Discover careers that match your skills and personality</Subtitle>
        </TextContainer>
      </HeroWrapper>
    )
  }
