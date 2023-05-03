import styled from 'styled-components'

export const TrendingContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const BannerTrendingContainer = styled.div`
  background-color: ${props => (props.outline ? '#e2e8f0' : '#212121')};
  height: 20vh;
  width: 100%;
  padding-top: 30px;
  padding-left: 30px;
`
export const BannerContainerSuccess = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  min-height: 100vh;
  background-color: ${props => (props.outline ? '#f9f9f9' : '#0f0f0f')};
`
export const FlameContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const IconElement = styled.div`
  border-radius: 55px;
  padding-left: 22px;
  padding-right: 25px;
  padding-top: 25px;
  padding-bottom: 20px;
  background-color: ${props => (props.outline ? '#f1f5f9' : '#000000')};
  color: red;
  font-weight: bold;
  margin-right: 15px;
`
export const Description = styled.p`
  color: ${props => (props.outline ? '#1e293b' : '#ffffff')};
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 500;
`
export const BannerVideoContainer = styled.ul`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`
export const HeadingElement = styled.h1`
  font-size: 20px;
  font-weight: bold;
  font-family: 'Roboto';
  color: ${props => (props.outline ? '#1e293b' : '#f8fafc')};
`
export const ImageElement = styled.img`
  width: 300px;
  height: 300px;
`
export const FailureDescription = styled.p`
  color: #616e7c;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
`
export const TrendingBtn = styled.button`
  background-color: #4f46e5;
  font-size: 15px;
  font-weight: bold;
  font-family: 'Roboto';
  color: #ffffff;
  line-height: 2;
  border-radius: 3px;
  border-width: 0px;
`
