import styled from 'styled-components'
import {FaFire} from 'react-icons/fa'

export const SideBarAndTrendingContainer = styled.div`
  display: flex;
  min-height: 100vh;
`
export const LogoContainerAndTrendingVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const TrendingVideoCardUl = styled.ul`
  padding: 0px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.darkBg ? '#0f0f0f' : '#f9f9f9')};
  padding-top: 20px;
  margin: 0px;
`
export const TrendingContainer = styled.div`
  background-color: ${props => (props.darkBg ? '#181818' : '#f1f1f1')};
  display: flex;
  align-items: center;
  padding-left: 18px;
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
  width: 100%;
`
export const FailureImg = styled.img`
  height: 170px;
  width: 170px;
`
export const FailureViewHeading = styled.h1`
  color: #1e293b;
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
