import SavedVideosContext from '../../context/SavedVideosContext'
import {
  SavedVideosList,
  TrendingContainer,
  TrendingContainerForLogo,
  TrendingLogo,
  TrendingContainerHeading,
  SideBarAndSavedVideosContainer,
  SavedLogoContainerAndSavedVideosContainer,
  NoSavedVideosViewContainer,
  NoSavedVideosViewImg,
  NoSavedVideosViewHeading,
  NoSavedVideosViewDesc,
} from './styledComponents'
import SideBar from '../SideBar'
import SavedVideoItem from '../SavedVideoItem'
import Header from '../Header'

const SavedVideos = () => {
  const renderNoSavedVideosView = () => (
    <SavedVideosContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <NoSavedVideosViewContainer darkBg={isDark}>
            <NoSavedVideosViewImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt=" no saved videos"
            />
            <NoSavedVideosViewHeading darkBg={isDark}>
              No saved videos found
            </NoSavedVideosViewHeading>
            <NoSavedVideosViewDesc>
              You can save your videos while watching them
            </NoSavedVideosViewDesc>
          </NoSavedVideosViewContainer>
        )
      }}
    </SavedVideosContext.Consumer>
  )

  const renderTrendingLogoContainer = () => (
    <SavedVideosContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <TrendingContainer darkBg={isDark} data-testid="banner">
            <TrendingContainerForLogo darkBg={isDark}>
              <TrendingLogo />
            </TrendingContainerForLogo>
            <TrendingContainerHeading darkBg={isDark}>
              Saved Videos
            </TrendingContainerHeading>
          </TrendingContainer>
        )
      }}
    </SavedVideosContext.Consumer>
  )
  return (
    <SavedVideosContext.Consumer>
      {value => {
        const {savedVideosList, isDark} = value
        return (
          <>
            <Header />
            <SideBarAndSavedVideosContainer>
              <SideBar />
              <SavedLogoContainerAndSavedVideosContainer
                darkBg={isDark}
                data-testid="savedVideos"
              >
                {renderTrendingLogoContainer()}
                {savedVideosList.length === 0 ? (
                  renderNoSavedVideosView()
                ) : (
                  <SavedVideosList darkBg={isDark}>
                    {savedVideosList.map(eachVideo => (
                      <SavedVideoItem
                        key={eachVideo.id}
                        savedVideoDetails={eachVideo}
                      />
                    ))}
                  </SavedVideosList>
                )}
              </SavedLogoContainerAndSavedVideosContainer>
            </SideBarAndSavedVideosContainer>
          </>
        )
      }}
    </SavedVideosContext.Consumer>
  )
}
export default SavedVideos
