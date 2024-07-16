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
  NameItem,
  Name,
} from './styledComponents'

const VideoCard = props => {
  const {videoDetails} = props
  const {
    id,
    publishedAt,
    thumbnailUrl,
    viewCount,
    title,
    channel,
  } = videoDetails
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
                    <NameItem>
                      <Name bgColor={isDark}>{channel.name}</Name>
                    </NameItem>
                    <NameItem>
                      <Name bgColor={isDark}>{viewCount}</Name>
                    </NameItem>
                    <NameItem>
                      <Name bgColor={isDark}>{pubDate}</Name>
                    </NameItem>
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

export default VideoCard
