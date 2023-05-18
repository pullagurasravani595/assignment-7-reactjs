import styled from 'styled-components'

export const SaveVideoContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const SavedRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.outline ? '#f1f5f9' : '#0f0f0f')};
  background-size: cover;
  width: 80%;
  min-height: 100vh;
`
export const IconContainer = styled.div`
  height: 20vh;
  width: 100%;
  background-color: ${props => (props.outline ? '#d7dfe9' : '#181818')};
  padding-top: 28px;
  padding-left: 28px;
  display: flex;
  align-items: center;
`
export const IconDisplayContainer = styled.div`
  background-color: ${props => (props.outline ? '#f1f5f9' : '#000000')};
  height: 60px;
  width: 60px;
  border-radius: 45px;
  padding-top: 4px;
  padding-bottom: 12px;
  padding-left: 22px;
  padding-right: 15px;
`
export const IconNameSave = styled.p`
  color: #ff0000;
  font-weight: bold;
`
export const RouterName = styled.h1`
  color: ${props => (props.outline ? '#1e293b' : '#ffffff')};
  font-weight: bold;
  font-family: 'Roboto';
  font-size: 30px;
  margin-left: 16px;
`
export const SavedUnOrderListContainer = styled.ul`
  display: flex;
  flex-direction: column;
`
export const NoVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`

export const NoImageElement = styled.img`
  width: 290px;
  height: 300px;
`
export const NoSavedVideoHeading = styled.h1`
  color: ${props => (props.outline ? '#1e293b' : '#ffffff')};
  font-size: 24px;
  font-weight: bold;
  font-family: 'Roboto';
`
export const NoSavedVideoDescription = styled.p`
  color: ${props => (props.outline ? '#616e7c' : '#f8fafc')};
  font-size: 16px;
  font-weight: bold;
  font-family: 'Roboto';
`
