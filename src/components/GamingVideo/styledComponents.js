import styled from 'styled-components'

export const ListContainer = styled.li`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  height: 340px;
  width: 240px;
  margin-right: 3px;
  margin-bottom: 20px;
`
export const GamingVideoImage = styled.img`
  width: 100%;
  height: 250px;
`
export const HeadingElement = styled.p`
  font-size: 18px;
  font-weight: 'bold';
  font-family: 'Roboto';
  color: ${props => (props.outline ? '#1e293b' : '#ffffff')};
`
export const GamingDescriptionValue = styled.p`
  font-size: 15px;
  font-weight: bold;
  font-family: 'Roboto';
  color: ${props => (props.outline ? '#64748b' : '#424242')};
`
