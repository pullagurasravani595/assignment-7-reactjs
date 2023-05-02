import styled from 'styled-components'

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  @media screen and (min-width: 768px) {
    padding-top: 100px;
  }
`
export const VideoItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`
export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%%;
`
export const Heading = styled.h1`
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => (props.outline ? '#64748b' : '#f8fafc')};
`
export const ViewsTimeIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const ViewersTimeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const ViewsIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`
export const HorizontalRule = styled.hr`
  height: 3px;
  width: 100%;
  background-color: #cccccc;
`
export const LogoItemImage = styled.img`
  width: 45px;
  height: 45px;
`
export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`
export const RightSideContainer = styled.div`
  min-height: 100vh;
  width: 80%;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: ${props => (props.outline ? '#ffffff' : '#0f0f0f')};
  background-size: cover;
`

export const Description = styled.p`
  color: ${props => (props.outline ? '#3b82f6' : '#909090')};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
`
export const NewContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const ButtonElement = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => (props.outline ? '#2563eb' : '#64748b')};
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureImage = styled.img`
  width: 200px;
  height: 200px;
`
export const FailureHeading = styled.img`
  color: ${props => (props.outline ? '#00306e' : '#ffffff')};
  font-family: 'Roboto';
  font-size: '20px';
  font-weight: 500;
`
export const FailureDescription = styled.p`
  color: ${props => (props.outline ? '#7e858e' : '#f4f4f4')};
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
`
export const FailureBtn = styled.button`
  background-color: #4f46e5;
  color: #f8fafc;
  font-size: 12px;
  font-family: 'Roboto';
  border-radius: 4px;
  border-width: 0px;
  height: 30px;
`
