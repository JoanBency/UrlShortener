// import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const HeadNav = styled.nav`
  z-index: 14;
  height: 60px;
  display: flex;
  background: #000000;
  justify-content: space-between;
  padding: 0.18rem;
`

export const PrimaryNav = styled.nav`
  z-index: 14;
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 0.18rem;
`

export const Logo = styled.img`
  width: 30px;
  height: 30px;
  display: flex;
  margin-left: 2%;
  margin-top: 30%;
  `
  export const Title = styled.h6`
  color: #ffffff;
  font-weight: 3000;
  display: flex;
  align-items: left;
  font-size: 1.5rem;
  margin-left: -10%;
  margin-top: 5%;
`

export const MenuLink = styled(Link)`
  color: #ffffff;
  font-weight: 600;
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  padding: 0 12rem 1rem;
  margin-right: 10px;
  height: 100%;
  &.active {
    color: #ffffff;
  }
`

export const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50vw;
  @media screen and (max-width: 1368px) {
    margin-left: 30vw;
  }
  @media screen and (max-width: 976px) {
    margin-left: 14vw;
    
  }
  @media screen and (max-width: 768px) {
    margin-left: 5vw;
    
  }
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
`

export const GridItem = styled.div`
  border: none;
  text-align: center;
  padding-left: 30px;
`