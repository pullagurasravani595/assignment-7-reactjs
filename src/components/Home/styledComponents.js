import styled from 'styled-components'

export const BannerContainerHome = styled.div`
  display: flex;
  flex-direction: row;
`
export const RightSideHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.outline ? '#ffffff' : '#181818')};
  min-height: 100vh;
  width: 80%;
  background-size: cover;
`
export const MainBannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 100%;
  height: 30vh;
  background-size: cover;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-right: 20px;
  padding-top: 14px;
  padding-left: 22px;
`
export const BannerBgContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const BannerBgImg = styled.img`
  height: 32px;
  width: 90px;
`
export const BgContainerDescription = styled.p`
  color: #1e293b;
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 500;
`
export const BgBtn = styled.button`
  line-height: 2.5;
  width: 100px;
  border-width: 0px;
  background-color: transparent;
  color: #1e293b;
  border: 1.5px solid #1e293b;
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: bold;
`
export const CloseBtn = styled.button`
  background-color: transparent;
  border-width: 0px;
`
export const HomeVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.outline ? '#f1f5f9' : '#0f0f0f')};
  min-height: 100vh;
  background-size: cover;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-right: 20px;
  margin-left: 20px;
  width: 64%;
`
export const InputElement = styled.input`
  outline: none;
  height: 34px;
  width: 70%;
`
export const SearchElement = styled.button`
  background-color: ${props => (props.outline ? '#e2e8f0' : '#424242')};
  line-height: 2;
  text-align: Center;
  width: 60px;
  height: 34px;
  border-width: 0px;
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`
export const UnOrderListContainerHome = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`
export const FailureContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureImgElement = styled.img`
  width: 250px;
  height: 220px;
`
export const FailureHomeHeading = styled.h1`
  font-weight: 500;
  font-size: 20px;
  font-family: 'Roboto';
  color: ${props => (props.outline ? '#1e293b' : '#ffffff')};
`
export const DescriptionFailureHome = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => (props.outline ? '#64748b' : '#909090')};
`
export const HomeFailureBtn = styled.button`
  background-color: #4f46e5;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 13px;
  height: 30px;
  width: 60px;
  border-width: 0px;
  border-radius: 3px;
`
export const NoSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoSearchImg = styled.img`
  height: 320px;
  width: 320px;
`

export const NoSearchHeading = styled.h1`
  color: ${props => (props.outline ? '#1e293b' : '#ffffff')};
  font-size: 20px;
  font-family: 'Roboto';
`
export const NoSearchParagraph = styled.p`
  color: ${props => (props.outline ? '#64748b' : '#ffffff')};
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: bold;
`
export const NoSearchBtn = styled.button`
  background-color: #4f46e5;
  height: 30px;
  width: 60px;
  border-radius: 4px;
  border-width: 0px;
  color: #ffffff;
`
