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
  width: 100%;
`
export const PlayerContainer = styled.div`
  width: 100%;
  height: 30vh;
  flex-grow: 1;
`
export const Heading = styled.h1`
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-top: 40px;
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
`
export const HorizontalRule = styled.hr`
  height: 3px;
  width: 100%;
  color: #94a3b8;
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
  background-color: ${props => (props.outline ? '#ffffff' : '#181818')};
  background-size: cover;
`
