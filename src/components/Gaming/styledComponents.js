import styled from 'styled-components'

export const GamingContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const RightSideGamingContainer = styled.div`
  background-color: ${props => (props.outline ? '#f1f5f9' : '#0f0f0f')};
  min-height: 100vh;
  width: 80%;
`
export const GamingIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => (props.outline ? '#cbd5e1' : '#212121')};
  padding-top: 20px;
  padding-bottom: 15px;
  padding-left: 26px;
`
export const GamingIconBgContainer = styled.div`
  background-color: ${props => (props.outline ? '#f1f5f9' : '#000000')};
  height: 60px;
  width: 60px;
  border-radius: 45px;
  padding-top: 6px;
  padding-bottom: 17px;
  padding-left: 20px;
  padding-right: 15px;
`
export const GamingIcon = styled.p`
  color: #ff0000;
`
export const GamingIconDescription = styled.p`
  color: ${props => (props.outline ? '#1e293b' : '#f8fafc')};
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 24px;
  margin-left: 20px;
`
export const UnOrderListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`
export const GamingLoader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`
export const FailureImageGaming = styled.img`
  width: 270px;
  height: 270px;
`
export const FailureGamingHeading = styled.h1`
  font-size: 22px;
  font-family: 'Roboto';
  font-weight: bold;
  color: ${props => (props.outline ? '#1e293b' : '#ffffff')};
`

export const FailureGamingDescription = styled.p`
  font-size: 17px;
  font-weight: 'bold';
  font-family: 'Roboto';
  color: #64748b;
`
export const GamingRetryBtn = styled.button`
  color: #ffffff;
  background-color: #4f46e5;
  font-size: 12px;
  font-family: 'Roboto';
  height: 30px;
  border-radius: 3px;
  border-width: 0px;
`
