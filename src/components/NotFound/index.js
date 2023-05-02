import ThemeSelector from '../../context/ThemeSelector'
import {
  NotFoundContainer,
  NotFoundMainContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundParagraph,
} from './styledComponents'
import Header from '../Header'
import SideContainer from '../SideContainer'

const NotFound = () => (
  <ThemeSelector.Consumer>
    {value => {
      const {selectTheme} = value
      const notFoundUrl = selectTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
      return (
        <>
          <Header />
          <NotFoundContainer>
            <SideContainer />
            <NotFoundMainContainer outline={selectTheme}>
              <NotFoundImage src={notFoundUrl} alt="not found image" />
              <NotFoundHeading outline={selectTheme}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundParagraph>
                we are sorry, the page you requested could not be found.
              </NotFoundParagraph>
            </NotFoundMainContainer>
          </NotFoundContainer>
        </>
      )
    }}
  </ThemeSelector.Consumer>
)

export default NotFound
