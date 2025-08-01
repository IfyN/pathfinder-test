import styled from 'styled-components'

const InfoTextContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
  line-height: 1.6;
  color: #4b5563;
  text-align: justify;
`

const InfoTextComponent = () => {
  return (
    <InfoTextContainer>
      <p>
        We've analysed data from thousands of our members who work in
        graduate roles across a range of sectors to understand which
        personalities, skills and values best fit each career path.
      </p>
      <p style={{ marginTop: '1rem' }}>
        Take this test to understand what career path you might be suited to
        and how to get started.
      </p>
    </InfoTextContainer>
  )
}

export default InfoTextComponent