import {FaSearch} from 'react-icons/fa'
import styled from 'styled-components'

export const SideBarAndHomeContainer = styled.div`
  display: flex;
  min-height: 100vh;
  filter: ${props => (props.blurVal ? 'blur(5px)' : '')};
`
export const BannerAndVideoCardContainer = styled.div`
  width: 100%;
`
export const BannerContainer = styled.div`
  display: ${props => (props.isClose ? `none` : `flex`)};
  justify-content: space-between;
  padding: 30px;
  height: 165px;
  width: 100%;
  @media screen and (min-width: 767px) {
    background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
    background-size: cover;
    height: 265px;
  }
`
export const BannerDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const BannerLogo = styled.img`
  height: 30px;
`
export const BannerDesc = styled.p`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 400;
`
export const BannerBtnContainer = styled.div``
export const BannerBtn = styled.button`
  background-color: transparent;
  color: #0f0f0f;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  border: 1px solid #0f0f0f;
  outline: none;
  cursor: pointer;
  padding: 6px 12px 6px 12px;
`
export const BannerCloseBtn = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const VideosContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
  padding-top: 20px;
`
export const VideoCardUl = styled.ul`
  padding: 0px;
  list-style-type: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
`
export const SearchEleContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${props => (props.bgColor ? '#424242' : '#d7dfe9')};
  margin: 10px;
  height: 27px;
  background-color: transparent;
  @media screen and (min-width: 767px) {
    width: 375px;
    margin: 0px;
  }
`
export const SearchInput = styled.input`
  outline: none;
  width: 90%;
  border: none;
  padding-left: 12px;
  height: 27px;
  background-color: transparent;
  color: ${props => (props.bgColor ? '#d7dfe9' : '#424242')};
`
export const SearchBtn = styled.button`
  outline: none;
  cursor: pointer;
  padding: 5px 15px 5px 15px;
  border: 1px solid ${props => (props.bgColor ? '#424242' : '#d7dfe9')};
  background-color: ${props => (props.bgColor ? '#424242' : '#d7dfe9')};
`
export const SearchIcon = styled(FaSearch)`
  height: 12px;
  width: 12px;
  color: ${props => (props.bgColor ? '#d7dfe9' : '')};
`
export const NoResultViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
export const NoResultImg = styled.img`
  height: 175px;
  width: 175px;
  @media screen and (min-width: 767px) {
    height: 275px;
    width: 375px;
  }
`
export const NoVideoHeading = styled.h1`
  color: ${props => (props.bgColor ? '#d7dfe9' : '#212121')};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  @media screen and (min-width: 767px) {
    font-size: 18px;
  }
`
export const NoVideoDesc = styled.p`
  color: #7e858e;
  font-family: 'Roboto';
  font-size: 11px;
  font-weight: 500;
  text-align: center;
  @media screen and (min-width: 767px) {
    font-size: 14px;
  }
`
export const RetryBtn = styled.button`
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
  }
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
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
