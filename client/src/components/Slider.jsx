import React from 'react'
import styled from 'styled-components'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';


const Container = styled.div`
    width:100%;
    height:100vh;
    display: flex; 
    position:relative;
    overflow:hidden;
`
const Arrow = styled.div`
    width:50px;
    height:50px;
    background-color:#fff7f7;
    border-radius:50%;
    display: flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    top:0;
    bottom:0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin:auto;
    cursor:pointer;
    opacity:0.5;
`

const Wrapper = styled.div`
    height:100%;
    display: flex;
`

const Slide = styled.div`
    display: flex;
    align-items:center;
    width:100vw;
    height:100vh;
`
const ImgContainer = styled.div`
    height:100%
    flex:1;
`

const Image = styled.img`
    height:80%;
`

const InfoContainer = styled.div`
    flex:1;
    padding:50px;
`
const Title = styled.h1`
    font-size:70px
`
const Desc = styled.p`
    margin:50px 0px;
    font-size:20px;
    font-weight:500;
    letter-spacing:3px;
`
const Button = styled.button`
    padding:10px;
    font-size:20px;
    background-color:transparent;
    cursor:pointer;
`

const Slider = () => {
    return (
        <Container>
            <Arrow direction="left">
                <ArrowLeftOutlinedIcon />
            </Arrow>
            <Wrapper>
                <Slide bg="f5fafd">
                    <ImgContainer>
                        <Image src="https://cdn.pixabay.com/photo/2016/06/15/16/31/girl-1459284_960_720.png"/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>SUMMER SALE</Title>
                        <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
                <Slide bg="f5fafd">
                    <ImgContainer>
                        <Image src="https://cdn.pixabay.com/photo/2016/06/15/16/31/girl-1459284_960_720.png"/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>WINTER SALE</Title>
                        <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
                <Slide bg="f5fafd">
                    <ImgContainer>
                        <Image src="https://cdn.pixabay.com/photo/2016/06/15/16/31/girl-1459284_960_720.png"/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>POPULAR SALE</Title>
                        <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction="right">
                <ArrowRightOutlinedIcon />
            </Arrow>
        </Container>
    )
}

export default Slider