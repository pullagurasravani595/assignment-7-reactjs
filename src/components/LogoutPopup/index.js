import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import ThemeSelector from '../../context/ThemeSelector'
import {
  LogoutBtn,
  PopupContainer,
  PopupDescription,
  ButtonContainerPopup,
  CloseBtn,
  ConformBtn,
  PopupMainContainer,
} from './styledComponents'

const PopupElement = props => (
  <ThemeSelector.Consumer>
    {value => {
      const {selectTheme} = value
      const OnClickConformBtn = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <PopupMainContainer>
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
                  <CloseBtn
                    type="button"
                    outline={selectTheme}
                    onClick={() => close()}
                  >
                    Cancel
                  </CloseBtn>
                  <ConformBtn
                    type="button"
                    outline={selectTheme}
                    onClick={OnClickConformBtn}
                  >
                    Confirm
                  </ConformBtn>
                </ButtonContainerPopup>
              </PopupContainer>
            )}
          </Popup>
        </PopupMainContainer>
      )
    }}
  </ThemeSelector.Consumer>
)

export default withRouter(PopupElement)
