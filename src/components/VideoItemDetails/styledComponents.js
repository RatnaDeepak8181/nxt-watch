import ReactPlayer from 'react-player'
import {AiFillLike, AiFillDislike} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'
import styled from 'styled-components'

export const SideBarAndVideoContainer = styled.div`
  display: flex;
  width: 100%;
`
export const RenderVideo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    padding: 16px;
  }
`
export const UpperSection = styled.div`
  padding: 24px 12px 0px 12px;
`
export const VideoContainer = styled.div`
  width: 100%;
  background-color: transparent;
`
export const VideoPlayer = styled(ReactPlayer)``
export const VideoCardTitle = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.bgColor ? '#f9f9f9' : '#383838')};
  font-size: 16px;
  font-weight: 500;
`
export const ViewAndLikeContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
export const ViewAndPublishedDateContainer = styled.div`
  display: flex;
`
export const ViewCount = styled.p`
  font-family: 'Roboto';
  color: #94a3b8;
  font-size: 11px;
  font-weight: 400;
  margin-right: 14px;
`
export const LikeBtn = styled.button`
  outline: none;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  font-family: 'Roboto';
  color: ${props => (props.likeColorChange ? '#2563eb' : '#64748b')};
  font-size: 11px;
  font-weight: 600;
  padding: 0px;
  margin-right: 22px;
`
export const DislikeBtn = styled.button`
  outline: none;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  font-family: 'Roboto';
  color: ${props => (props.dislikeColorChange ? '#2563eb' : '#64748b')};
  font-size: 11px;
  font-weight: 600;
  padding: 0px;
  margin-right: 22px;
`
export const SaveBtn = styled.button`
  outline: none;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  font-family: 'Roboto';
  color: ${props => (props.saveColorChange ? '#2563eb' : '#64748b')};
  font-size: 11px;
  font-weight: 600;
  padding: 0px;
  margin-right: 22px;
`
export const Like = styled(AiFillLike)`
  height: 18px;
  width: 18px;
  color: ${props => (props.likeColorChange ? '#2563eb' : '#64748b')};
  margin-right: 4px;
`
export const DisLike = styled(AiFillDislike)`
  height: 18px;
  width: 18px;
  color: ${props => (props.dislikeColorChange ? '#2563eb' : '#64748b')};
  margin-right: 4px;
`
export const Save = styled(MdPlaylistAdd)`
  height: 18px;
  width: 18px;
  color: ${props => (props.saveColorChange ? '#2563eb' : '#64748b')};
  margin-right: 4px;
  margin-left: 10px;
`
export const Line = styled.hr`
  color: 1px solid #64748b;
  width: 100%;
  margin-top: 30px;
`
export const LowerSection = styled.div`
  padding: 0px 12px 24px 12px;
`
export const ProfileAndNameAndSubCountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`
export const NameAndSubCountContainer = styled.div`
  margin-left: 20px;
`
export const Profile = styled.img`
  height: 50px;
`
export const Name = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.bgColor ? '#f9f9f9' : '#383838')};
  font-size: 16px;
  font-weight: 500;
`
export const Subscribers = styled.p`
  font-family: 'Roboto';
  color: #94a3b8;
  font-size: 11px;
  font-weight: 400;
  margin-right: 14px;
`
export const Desc = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.bgColor ? '#f9f9f9' : '#424242')};
  font-size: 14px;
  font-weight: 400;
  @media screen and (min-width: 768px) {
    margin-left: 68px;
  }
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`
export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
export const FailureImg = styled.img`
  height: 170px;
  width: 170px;
`
export const FailureViewHeading = styled.h1`
  color: ${props => (props.bgColor ? '#d7dfe9' : '#1e293b')};
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
export const FailureViewDesc = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`
export const FailureRetryBtn = styled.button`
 outline: none;
  border: none;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 10px;
  font-weight: 400;
  background-color: #4f46e5;
  border-radius: 4px;
  padding: 6px 20px 6px 20px;
  cursor: pointer;
  @media screen and (min-width: 767px) {
    font-size: 13px;
    padding: 8px 26px 8px 26px;
`
