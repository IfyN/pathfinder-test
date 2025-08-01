import React from 'react';
import styled from 'styled-components';

const ScaleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin: 1rem 0;
`;

const Connector = styled.div`
  flex: 1;
  height: 1px;
  background: #C1C7D0;
`;

const Scale = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const DotButton = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: ${props => (props.selected ? 'none' : '2px solid #C1C7D0')};
  background: ${props => (props.selected ? '#5DA5F9' : 'transparent')};
  cursor: pointer;
  padding: 0;
  margin: 0;
  outline: none;

  &:focus {
    box-shadow: 0 0 0 2px rgba(29, 155, 209, 0.6);
  }
`;

const LegendLabel = styled.span`
  font-size: 14px;
  color: #5F6D7E;
`;
/**
 Likert scale */



const ScaleHint = ({ value, onSelect }) => {
  const options = [1, 2, 3, 4, 5];

  return (
    <ScaleContainer>
      {/* Left label */}
      <LegendLabel>Strongly Disagree</LegendLabel>

      {/* Dots with connectors */}
      <Scale>
        {options.map((opt, idx) => (
          <React.Fragment key={opt}>
            <DotButton
              selected={opt === value}
              onClick={() => onSelect(opt)}
              aria-label={`Select ${opt}`}
            />
            {idx < options.length - 1 && <Connector />}
          </React.Fragment>
        ))}
      </Scale>

      {/* Right label */}
      <LegendLabel>Strongly Agree</LegendLabel>
    </ScaleContainer>
  );
};

export default ScaleHint;

