import {GoFlame} from 'react-icons/go'
import ThemeSelector from '../../context/ThemeSelector'
import Header from '../Header'
import SideContainer from '../SideContainer'
import TrendingVideoCard from '../TrendingVideoCard'
import {
  SaveVideoContainer,
  SavedRightContainer,
  IconContainer,
  IconDisplayContainer,
  IconNameSave,
  RouterName,
  SavedUnOrderListContainer,
  NoVideoContainer,
  NoImageElement,
  NoSavedVideoHeading,
  NoSavedVideoDescription,
} from './styledComponents'

const SavedVideo = () => (
  <ThemeSelector.Consumer>
    {value => {
      const {selectTheme, saveVideosList} = value
      return (
        <>
          <Header />
          <SaveVideoContainer>
            <SideContainer />
            <SavedRightContainer outline={selectTheme}>
              <IconContainer outline={selectTheme}>
                <IconDisplayContainer outline={selectTheme}>
                  <IconNameSave>
                    <GoFlame />
                  </IconNameSave>
                </IconDisplayContainer>
                <RouterName outline={selectTheme}>Saved videos</RouterName>
              </IconContainer>
              {saveVideosList.length === 0 ? (
                <NoVideoContainer>
                  <NoImageElement
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <NoSavedVideoHeading outline={selectTheme}>
                    No saved videos found
                  </NoSavedVideoHeading>
                  <NoSavedVideoDescription outline={selectTheme}>
                    You can save your videos while watching them
                  </NoSavedVideoDescription>
                </NoVideoContainer>
              ) : (
                <SavedUnOrderListContainer>
                  {saveVideosList.map(eachSave => (
                    <TrendingVideoCard
                      cardDetails={eachSave}
                      key={eachSave.id}
                    />
                  ))}
                </SavedUnOrderListContainer>
              )}
            </SavedRightContainer>
          </SaveVideoContainer>
        </>
      )
    }}
  </ThemeSelector.Consumer>
)

export default SavedVideo
