import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const NotFoundMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  min-height: 100vh;
  background-color: ${props => (props.outline ? '#f1f5f9' : '#0f0f0f')};
`
export const NotFoundImage = styled.img`
  width: 300px;
  height: 300px;
`
export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 26px;
  font-weight: bold;
  color: ${props => (props.outline ? '#1e293b' : '#ffffff')};
  margin-top: 16px;
`
export const NotFoundParagraph = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
  color: ${props => (props.outline ? '#424242' : ' #cbd5e1')};
`
