import React from 'react'
import styled from 'styled-components'
import Search from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {mobile} from '../responsive'


const Container = styled.div`
  height: 60px;
  color: black;
  ${mobile({height:"50px"})}
`
const Wrapper = styled.div`
  display: flex;
  justify-content:space-between;
  padding:10px 20px;
  align-items:center;  
  ${mobile({padding:"10px 0px"})}

`

const Language = styled.span`
  font-size:14px;
  cursor:pointer;
  ${mobile({display:"none"})}
`

const Left = styled.div`
  flex:1;
  display:flex;
  align-items:center;
`
const Center = styled.div`
flex:1
    
`
const Right = styled.div`
  flex:1;
  display:flex;
  align-item:center;
  justify-content:flex-end;
  ${mobile({flex:2,justifyContent:"center"})}
`
const SearchContainer = styled.div`
  border:1px solid lightgrey;
  display:flex;
  align-items:center;
  margin-left:25px;
  padding:5px; 
`

const Input = styled.input`
  border:none;
  ${mobile({width:"50px"})}

`
const Logo = styled.h1`
  font-weight:bold;
  text-align:center;
  ${mobile({fontSize:"24px"})}
`

const MenuItem = styled.div`
  font-size:14px;
  cursor:pointer;
  margin-left:25px;
  ${mobile({fontSize:"12px",marginLeft:"10px"})}
`



const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>
            EN
          </Language>
          <SearchContainer>
            <Input placeholder='Search'/>
            <Search style={{color:"gray",fontSize:16}}/>
          </SearchContainer>
        </Left>
        <Center><Logo>TreasureTronix</Logo></Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={1} color="primary">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar