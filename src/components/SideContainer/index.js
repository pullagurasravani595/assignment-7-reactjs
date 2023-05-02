import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {GiFlamer} from 'react-icons/gi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import ThemeSelector from '../../context/ThemeSelector'
import './index.css'

const SideContainer = () => (
  <ThemeSelector.Consumer>
    {value => {
      const {selectTheme} = value
      const sideContainerClassName = selectTheme
        ? 'side-container'
        : 'side-container side-container-black-theme'
      const IconDescription = selectTheme
        ? 'icon-description-light'
        : 'icon-description'
      const iconColor = selectTheme ? 'flame-icon' : 'black-theme-icon'
      const sideContainerBottomHeading = selectTheme
        ? 'side-container-heading'
        : 'side-container-heading slide-container-bottom-heading-black'
      const sideContainerBottomDescription = selectTheme
        ? 'side-container-description'
        : 'side-container-description side-container-bottom-description'
      return (
        <>
          <div className={sideContainerClassName}>
            <ul>
              <Link to="/" className="nav-link-side-container">
                <li className="home-icon-container">
                  <AiFillHome className="home-icon" />
                  <p className={IconDescription}>Home</p>
                </li>
              </Link>
              <Link to="/trending" className="nav-link-side-container">
                <li className="home-icon-container">
                  <GiFlamer className={iconColor} />
                  <p className={IconDescription}>Trending</p>
                </li>
              </Link>
              <Link to="/gaming" className="nav-link-side-container">
                <li className="home-icon-container">
                  <SiYoutubegaming className={iconColor} />
                  <p className={IconDescription}>Gaming</p>
                </li>
              </Link>
              <Link to="/saved-videos" className="nav-link-side-container">
                <li className="home-icon-container">
                  <CgPlayListAdd className={iconColor} />
                  <p className={IconDescription}>Saved videos</p>
                </li>
              </Link>
            </ul>
            <div className="side-bottom-container">
              <p className={sideContainerBottomHeading}>CONTACT US</p>
              <div className="icon-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                  className="social-media-icon"
                />
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                  className="social-media-icon"
                />
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                  className="social-media-icon"
                />
              </div>
              <p className={sideContainerBottomDescription}>
                Enjoy! Now to see your channels and recommendations!
              </p>
            </div>
          </div>
        </>
      )
    }}
  </ThemeSelector.Consumer>
)

export default SideContainer
