import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.div`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  color: #555;
`;

const Track = styled.div`
  background: #e0e0e0;
  height: 10px;
  border-radius: 5px;
`;

const Fill = styled.div`
  background: #007BFF;
  height: 100%;
  border-radius: 5px;
  transition: width 0.3s ease;
`;

const ProgressBar = ({ current, total }) => {
  const percent = (current / total) * 100;

  return (
    <Wrapper>
      <Label>{`Question ${current} of ${total}`}</Label>
      <Track>
        <Fill style={{ width: `${percent}%` }} />
      </Track>
    </Wrapper>
  );
};

export default ProgressBar;

// Styled Components
