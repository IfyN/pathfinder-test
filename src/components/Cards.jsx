import styled from 'styled-components'

// Outer wrapper for the card
const CardWrapper = styled.div`
  position: relative;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  overflow: visible;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`

const IconCircle = styled.div`
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  background: #ffffff;
  border: 2px solid ${(props) => props.borderColor || '#3b82f6'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

// Content area (title + description)
const Content = styled.div`
  flex: 1;
`

const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin: 0 0 0.5rem;
`

const Description = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
`

export default function Card({ icon, title, description, borderColor }) {
  return (
    <CardWrapper>
      {icon && <IconCircle borderColor={borderColor}>{icon}</IconCircle>}
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
    </CardWrapper>
  )
}
