import {withRouter} from 'react-router-dom'
import {IoMdMoon} from 'react-icons/io'
import {HiSun} from 'react-icons/hi'
import './index.css'
import ThemeSelector from '../../context/ThemeSelector'

const Header = () => (
  <ThemeSelector.Consumer>
    {value => {
      const {selectTheme, selectThemeChoice} = value
      const onClickThemeChange = () => {
        selectThemeChoice()
      }
      const headerThemeChange = selectTheme
        ? 'header-container'
        : 'header-container header-container-theme'
      const websiteLogo = selectTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
      const themeIcon = selectTheme ? (
        <IoMdMoon className="theme-icon" onClick={onClickThemeChange} />
      ) : (
        <HiSun className="theme-icon sun-theme" onClick={onClickThemeChange} />
      )
      const btnClassName = selectTheme
        ? 'logout-btn'
        : 'logout-btn logout-black-theme'
      return (
        <>
          <div className={headerThemeChange}>
            <img src={websiteLogo} alt="website logo" className="logo-img" />
            <div className="theme-profile-logout-container">
              {themeIcon}
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
                className="profile-img"
              />
              <button type="button" className={btnClassName}>
                Logout
              </button>
            </div>
          </div>
        </>
      )
    }}
  </ThemeSelector.Consumer>
)

export default withRouter(Header)
