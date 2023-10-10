import React from 'react'
import { HeadNav, PrimaryNav, MenuLink, Menu, Logo, Title, GridContainer, GridItem } from './NavElement'
import link from '../../assets/link.png'
const Navbar = () => {
  return (
    <>
      <HeadNav>
      <PrimaryNav>
        {/* Image Downloaded from freepik */}
        <GridContainer>
          <GridItem><Logo src={link} alt="logo" /></GridItem>
          <GridItem><Title as="h1"><a style={{textDecoration: 'none', color: 'white'}} href='/'>URL Shortener</a></Title></GridItem>
        </GridContainer>
        {/* <Hamburger /> */}
        <Menu>
          <MenuLink to="/listUrls" activeStyle>
            All URLs
          </MenuLink>
          {/* <MenuLink to="/listpatients" activeStyle>
            Patients
          </MenuLink>
          <MenuLink to="/listvaccines" activeStyle>
            Vaccines
          </MenuLink>
          <MenuLink to="/annual" activeStyle>
            Annual Report
          </MenuLink>
          <MenuLink to="/signup" activeStyle>
            SignUp
          </MenuLink> */}
        </Menu>
      </PrimaryNav>
      </HeadNav>
    </>
  )
}
export default Navbar