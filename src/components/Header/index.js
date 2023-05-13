import {withRouter, Link} from 'react-router-dom'
import {IoMdMoon} from 'react-icons/io'
import {HiSun} from 'react-icons/hi'
import LogoutPopup from '../LogoutPopup'
import './index.css'
import ThemeSelector from '../../context/ThemeSelector'

const Header = () => (
  <ThemeSelector.Consumer>
    {value => {
      const {selectTheme, selectThemeChoice} = value
      const onClickThemeChange = () => {
        selectThemeChoice()
      }
      const onClickLogout = () => <LogoutPopup />

      const headerThemeChange = selectTheme
        ? 'header-container'
        : 'header-container header-container-theme'
      const websiteLogo = selectTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
      const themeIcon = selectTheme ? (
        <button
          type="button"
          onClick={onClickThemeChange}
          className="theme-btn"
          data-testid="theme"
        >
          <IoMdMoon className="theme-icon" />
        </button>
      ) : (
        <button
          type="button"
          onClick={onClickThemeChange}
          className="theme-btn"
          data-testid="theme"
        >
          <HiSun className="theme-icon sun-theme" />
        </button>
      )
      const btnClassName = selectTheme
        ? 'logout-btn'
        : 'logout-btn logout-black-theme'
      return (
        <>
          <div className={headerThemeChange}>
            <Link to="/" className="nav-link">
              <img src={websiteLogo} alt="website logo" className="logo-img" />
            </Link>
            <div className="theme-profile-logout-container">
              {themeIcon}
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                className="profile-img"
                alt="profile"
              />
              <button type="button" className={btnClassName}>
                <LogoutPopup />
              </button>
            </div>
          </div>
        </>
      )
    }}
  </ThemeSelector.Consumer>
)

export default withRouter(Header)
