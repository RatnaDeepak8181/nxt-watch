import SavedVideosContext from '../../context/SavedVideosContext'
import {
  NavLink,
  GamingVideoLi,
  GamingVideoThumbnail,
  GamingTitle,
  GamingViewCount,
} from './styledComponents'

const GamingVideoCard = props => {
  const {gamingVideoDetails} = props
  const {id, thumbnailUrl, title, viewCount} = gamingVideoDetails

  return (
    <SavedVideosContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <NavLink to={`videos/${id}`}>
            <GamingVideoLi>
              <GamingVideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <GamingTitle bgColor={isDark}>{title}</GamingTitle>
              <GamingViewCount bgColor={isDark}>
                {viewCount} Watching
                <br /> Worldwide
              </GamingViewCount>
            </GamingVideoLi>
          </NavLink>
        )
      }}
    </SavedVideosContext.Consumer>
  )
}
export default GamingVideoCard
