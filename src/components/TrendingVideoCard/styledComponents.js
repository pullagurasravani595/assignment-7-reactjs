import styled from 'styled-components'

export const ListContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 18px;
  list-style-type: none;
`
export const ThumbnailImage = styled.img`
  height: 230px;
  width: 300px;
`
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-left: 25px;
`
export const Heading = styled.p`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  color: ${props => (props.outline ? '#1e293b' : '#ffffff')};
`
export const DescriptionElement = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: bold;
  color: #475569;
  margin-right: 12px;
`
export const ViewsTimeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const NavContainer = styled.div`
  text-decoration: none;
`
