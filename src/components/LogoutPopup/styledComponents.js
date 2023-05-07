import styled from 'styled-components'

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.outline ? '#f1f5f9' : '#313131')};
  padding: 20px;
`
export const LogoutBtn = styled.button`
  color: ${props => (props.outline ? '#4f46e5' : '#f1f1f1')};
  line-height: 1;
  border-radius: 3px;
  background-color: transparent;
  border-width: 0px;
`
export const PopupDescription = styled.p`
  color: ${props => (props.outline ? '#909090' : '#f4f4f4')};
  font-family: 'Roboto';
  font-size: 20px;
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
  line-height: 2;
  margin-right: 4px;
  color: {(props) => (props.outline ? '#94a3b8' : '#f8fafc')};
`
export const ConformBtn = styled.button`
  color: #f8fafc;
  border-radius: 4px;
  border-width: 0px;
  line-height: 1;
  background-color: #3b82f6;
  margin-left: 6px;
`

export const PopupMainContainer = styled.div`
  height: 200px;
  width: 20%;
`
