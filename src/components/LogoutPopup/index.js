import Popup from 'reactjs-popup'
import ThemeSelector from '../../context/ThemeSelector'
import 'reactjs-popup/dist/index.css'
import {
  LogoutBtn,
  PopupContainer,
  PopupDescription,
  ButtonContainerPopup,
  CloseBtn,
  ConformBtn,
} from './styledComponents'

const PopupElement = props => (
  <ThemeSelector.Consumer>
    {value => {
      const {selectTheme} = value
      return (
        <Popup
          modal
          trigger={
            <LogoutBtn type="button" outline={selectTheme}>
              Logout
            </LogoutBtn>
          }
        >
          {close => (
            <PopupContainer outline={selectTheme}>
              <PopupDescription outline={selectTheme}>
                Are you sure you want to logout?
              </PopupDescription>
              <ButtonContainerPopup>
                <CloseBtn type="button" outline={selectTheme}>
                  Cancel
                </CloseBtn>
                <ConformBtn type="button" outline={selectTheme}>
                  Conform
                </ConformBtn>
              </ButtonContainerPopup>
            </PopupContainer>
          )}
        </Popup>
      )
    }}
  </ThemeSelector.Consumer>
)

export default PopupElement
