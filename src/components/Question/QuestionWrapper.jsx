import React from 'react';
import styled from 'styled-components';
import ProgressBar from './ProgressBar';
import ScaleHint   from './ScaleHint';

const Container = styled.div`
  max-width: 680px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const ProgressText = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #223153;
`;

const QuestionCount = styled.div`
  font-size: 14px;
  color: #5F6D7E;
  margin-top: 4px;
`;

const QuestionCard = styled.div`
  background: #ffffff;
  border: 1px solid #E1E5EB;
  border-radius: 8px;
  padding: 1.5rem 2rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
`;

const Meta = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 8px;
  font-size: 14px;
  color: #5F6D7E;
  margin-bottom: 8px;
`;

const QuestionNumber = styled.span`
  color: #F57C00;
  font-weight: 600;
`;

const LeadIn = styled.span``;

const MainQuestion = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #222;
  text-align: center;
  margin: 16px 0 24px;
`;

const ReviewHint = styled.div`
  font-size: 14px;
  color: #7D8699;
  text-align: center;
  margin-top: 24px;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;

  button {
    padding: 0.75rem 1.5rem;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }

  button:disabled {
    background: #ccc;
    cursor: not-allowed;
  }

  button:not(:disabled) {
    background: #007BFF;
    color: white;
  }
`;

//UI for Questions
const QuestionWrapper = ({
  currentIndex,
  totalQuestions,
  question,
  selectedValue,
  onSelect,
  onNext,
  onBack
}) => (
  <Container>
    <Header>
      <ProgressText>
        {`Your progress – ${Math.round((currentIndex / totalQuestions) * 100)}%`}
      </ProgressText>
      <QuestionCount>
        {`Question ${currentIndex} of ${totalQuestions}`}
      </QuestionCount>
      <ProgressBar current={currentIndex} total={totalQuestions} />
    </Header>

    <QuestionCard>
      <Meta>
        <QuestionNumber>{`Q${currentIndex}/${totalQuestions}`}</QuestionNumber>
        <LeadIn>{question.leadIn}</LeadIn>
      </Meta>

      <MainQuestion>{question.highlight}</MainQuestion>

      {/* Pass the selectedValue + onSelect handler into ScaleHint */}
      <ScaleHint value={selectedValue} onSelect={onSelect} />

      <ReviewHint>
        To review your previous answers, scroll back before selecting “finish”.
      </ReviewHint>
    </QuestionCard>

    <Nav>
      <button onClick={onBack} disabled={currentIndex === 1}>
        Back
      </button>
      <button onClick={onNext}>
        {currentIndex === totalQuestions ? 'Finish' : 'Next'}
      </button>
    </Nav>
  </Container>
);

export default QuestionWrapper;

