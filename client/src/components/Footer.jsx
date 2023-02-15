import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

const Container = styled.div`
    display:flex;
`
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`
const Logo = styled.h1``
const Desc = styled.p`
    margin:20px 0px;
`
const SocialIcon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    color:white;
    background-color: #${props=>props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;
`
const SocialContainer = styled.div`
    display:flex;
`

const Center = styled.h3`
    flex:1;
    padding:20px;

`
const Title = styled.h3`
    margin-bottom:30px;
`
const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`

const ListItem = styled.li`
    width:50%;
    margin-bottom:20px;
`

const Right = styled.div`
    flex:1;
    padding:20px;

`

const ContactItem = styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;
`
const Payment = styled.img`
    width:50%;
`


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>TreasureTronix</Logo>
                <Desc>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't lok even slightly believable.
                </Desc>
                <SocialContainer>
                    <SocialIcon color='385999'>
                        <FacebookIcon />
                    </SocialIcon>
                    <SocialIcon color='E4405F'>
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon color='55ACEE'>
                        <TwitterIcon />
                    </SocialIcon>
                    <SocialIcon color='E60023'>
                        <PinterestIcon />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Traking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <RoomIcon style={{marginRight:"10px"}}/>
                    622 Dixie Path, South Tobinchester 98336
                </ContactItem>
                <ContactItem>
                    <LocalPhoneIcon style={{marginRight:"10px"}}/>
                    +91 7735-648-011
                </ContactItem>
                <ContactItem>
                    <EmailIcon style={{marginRight:"10px"}}/>
                    contact@litun.dev
                </ContactItem>
                <Payment src="data:image/jpeg;base64,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"/>
            </Right>
        </Container>
    )
}

export default Footer