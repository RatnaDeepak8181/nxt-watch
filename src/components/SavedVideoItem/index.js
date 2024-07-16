import {formatDistanceToNow} from 'date-fns'
import SavedVideosContext from '../../context/SavedVideosContext'
import {
  NavLink,
  VideoCardLi,
  Thumbnail,
  VideoDetailsContainer,
  ChannelLogo,
  ChannelDetailsContainer,
  Title,
  NameViewsAndDateContainer,
  Name,
} from './styledComponents'

const SavedVideoItem = props => {
  const {savedVideoDetails} = props
  const {
    id,
    publishedAt,
    thumbnailUrl,
    viewCount,
    title,
    channel,
  } = savedVideoDetails
  const pubDate = formatDistanceToNow(new Date(publishedAt))
  return (
    <SavedVideosContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <NavLink to={`videos/${id}`}>
            <VideoCardLi>
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetailsContainer>
                <ChannelLogo src={channel.profileImageUrl} alt="channel logo" />
                <ChannelDetailsContainer>
                  <Title bgColor={isDark}>{title}</Title>
                  <NameViewsAndDateContainer>
                    <Name bgColor={isDark}>{channel.name}</Name>
                    <Name bgColor={isDark}>{viewCount}</Name>
                    <Name bgColor={isDark}>{pubDate}</Name>
                  </NameViewsAndDateContainer>
                </ChannelDetailsContainer>
              </VideoDetailsContainer>
            </VideoCardLi>
          </NavLink>
        )
      }}
    </SavedVideosContext.Consumer>
  )
}
export default SavedVideoItem
