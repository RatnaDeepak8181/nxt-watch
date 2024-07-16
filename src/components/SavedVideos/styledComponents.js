import styled from 'styled-components'
import {FaFire} from 'react-icons/fa'

export const SavedLogoContainerAndSavedVideosContainer = styled.div`
  width: 100%;
  background-color: ${props => (props.darkBg ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
`
export const SideBarAndSavedVideosContainer = styled.div`
  display: flex;
`
export const SavedVideosList = styled.ul`
  padding: 0px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.darkBg ? '#0f0f0f' : '#f9f9f9')};
  padding-top: 20px;
  margin: 0px;
`
export const TrendingContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    background-color: ${props => (props.darkBg ? '#181818' : '#f1f1f1')};
    display: flex;
    align-items: center;
    padding-left: 18px;
  }
`
export const TrendingContainerForLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${props => (props.darkBg ? '#000000' : '#e2e8f0')};
  margin-right: 8px;
`
export const TrendingLogo = styled(FaFire)`
  height: 22px;
  width: 22px;
  color: #ff0000;
`
export const TrendingContainerHeading = styled.h1`
  color: ${props => (props.darkBg ? '#f9f9f9' : '#1e293b')};
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
`
export const NoSavedVideosViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: ${props => (props.darkBg ? '#0f0f0f' : '#f9f9f9')};
  margin: 0px;
`
export const NoSavedVideosViewImg = styled.img`
  height: 175px;
  width: 175px;
  @media screen and (min-width: 767px) {
    height: 275px;
    width: 375px;
  }
`
export const NoSavedVideosViewHeading = styled.h1`
  color: ${props => (props.darkBg ? '#d7dfe9' : '#212121')};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  @media screen and (min-width: 767px) {
    font-size: 18px;
  }
`
export const NoSavedVideosViewDesc = styled.p`
  color: #7e858e;
  font-family: 'Roboto';
  font-size: 11px;
  font-weight: 500;
  text-align: center;
  @media screen and (min-width: 767px) {
    font-size: 14px;
  }
`
