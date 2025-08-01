import React from 'react';
import styled from 'styled-components';
import GraduationImage from '../assets/GraduationImage.svg';

// illustration bar
const Illustration = styled.div`
  width: 100%;
  height: 200px;
  background: #F57C00 url(${GraduationImage}) center/cover no-repeat;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const Card = styled.div`
  max-width: 680px;
  margin: 2rem auto;
  background: #ffffff;
  border: 1px solid #E1E5EB;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
`;

const Content = styled.div`
  padding: 1.5rem 2rem;
`;

const DateText = styled.div`
  font-size: 14px;
  color: #5F6D7E;
  margin-bottom: 0.5rem;
`;

const Message = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #222;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background: #F57C00;
  color: #000;
  padding: 0.75rem 1.5rem;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

/**
 * SeeResultsCard: shown when the quiz is completed
 * Props:
 * onFinish: callback for when the user clicks the button
 */
const SeeResultsCard = ({ onFinish }) => {
  const today = new Date().toLocaleDateString(undefined, {
    day: 'numeric', month: 'long', year: 'numeric'
  });

  return (
    <Card>
      <Illustration />
      <Content>
        <DateText>{`Completed on ${today}`}</DateText>
        <Message>
          Well done on completing your test. You can view the results now.
        </Message>
        <Button onClick={onFinish}>See your results</Button>
      </Content>
    </Card>
  );
};

export default SeeResultsCard;