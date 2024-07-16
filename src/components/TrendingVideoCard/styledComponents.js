import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavLink = styled(Link)`
  text-decoration: none;
`
export const TrendingVideoCardLi = styled.li`
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 285px;
  }
  @media screen and (min-width: 768px) {
    width: 100%;
    height: 325px;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    margin-bottom: 30px;
    padding: 20px;
  }
  @media screen and (min-width: 992px) {
    width: 100%;
    height: 325px;
    display: flex;
  }
`
export const TrendingThumbnail = styled.img`
  height: 170px;
  width: 100%;
  @media screen and (min-width: 767px) {
    width: 434px;
    height: 285px;
    margin-right: 5px;
  }
`
export const TrendingVideoDetailsContainer = styled.div`
  display: flex;
  margin: 20px 15px 30px 15px;
  margin: 0px;
  @media screen and (min-width: 767px) {
    width: 40%;
  }
`
export const TrendingChannelLogo = styled.img`
  height: 25px;
  margin-right: 15px;
  @media screen and (min-width: 767px) {
    height: 35px;
    margin-right: 22px;
  }
`
export const TrendingChannelDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const TrendingTitle = styled.p`
  color: ${props => (props.bgColor ? '#f9f9f9' : '#1e293b')};
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  margin: 0px;
  margin-bottom: 5px;
  @media screen and (min-width: 767px) {
    font-size: 18px;
  }
`
export const TrendingNameViewsAndDateContainer = styled.ul`
  display: flex;
  align-items: center;
  padding: 0px;
`
export const TrendingName = styled.p`
  color: ${props => (props.bgColor ? '#94a3b8' : '#212121')};
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
  margin-right: 20px;
  @media screen and (min-width: 767px) {
    font-size: 14px;
  }
`
