import React from 'react'
import styled from 'styled-components'
import Search from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
  height: 60px;
  color: black;
`
const Wrapper = styled.div`
  display: flex;
  justify-content:space-between;
  padding:10px 20px;
  align-items:center;  
`

const Language = styled.span`
  font-size:14px;
  cursor:pointer;
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
`
const Logo = styled.h1`
  font-weight:bold;
  text-align:center;
`


const MenuItem = styled.div`
  font-size:14px;
  cursor:pointer;
  margin-left:25px
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
            <Input />
            <Search style={{color:"gray",fontSize:16}}/>
          </SearchContainer>
        </Left>
        <Center><Logo>LITUN.</Logo></Center>
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