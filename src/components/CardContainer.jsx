// src/components/Features.jsx
import React from 'react'
import styled from 'styled-components'
import Card from './Cards'
import { ClipboardDocumentListIcon, ClockIcon, SparklesIcon } from '@heroicons/react/24/outline'

// Responsive container for the three cards
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
`

// Styled icons
const StyledClipboardIcon = styled(ClipboardDocumentListIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: #F97316;
`
const StyledClockIcon = styled(ClockIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: #A78BFA;
`
const StyledSparklesIcon = styled(SparklesIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: #FBBF24;
`

export default function Features() {
  return (
    <CardContainer>
      <Card
        icon={<StyledClipboardIcon />}
        borderColor="#F97316"
        title="24 questions"
        description="Answer 24 questions about your working style and career preferences."
      />

      <Card
        icon={<StyledClockIcon />}
        borderColor="#A78BFA"
        title="2 minutes"
        description="Gain insights into your future career in just two minutes."
      />

      <Card
        icon={<StyledSparklesIcon />}
        borderColor="#FBBF24"
        title="Personalised advice"
        description="Receive personalised advice to guide you on your next steps."
      />
    </CardContainer>
  )
}