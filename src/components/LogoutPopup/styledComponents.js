import styled from 'styled-components'

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.outline ? '#f1f5f9' : '#313131')};
  height: 200px;
  width: 300px;
  padding: 20px;
`
export const LogoutBtn = styled.button`
  color: ${props => (props.outline ? '#4f46e5' : '#f1f1f1')};
  border: 1px solid ${props => (props.outline ? '#4f46e5' : '#d7dfe9')};
  line-height: 1;
  border-radius: 3px;
`
export const PopupDescription = styled.p`
  color: ${props => (props.outline ? '#909090' : '#f4f4f4')};
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: bold;
`
export const ButtonContainerPopup = styled.div`
  display: flex;
  flex-direction: row;
`
export const CloseBtn = styled.button`
  background-color: transparent;
  border: 1px solid #7e858e;
  color: #7e858e;
`
export const ConformBtn = styled.button`
  color: ;
  border-radius: 4px;
  border-width: 0px;
  line-height: 1;
  background-color: #3b82f6;
`
