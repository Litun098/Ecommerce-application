import React from 'react'
import styled from 'styled-components'
// import Navbar from '../components/Navbar'
import {mobile} from '../responsive'


const Container = styled.div`
    width:100vw; 
    height:100vh;
    background : linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
    ),
    url('images/register_background.jpg'),center;
    display:flex;
    background-size:cover;
    align-item:center;
    justify-content:center;
`
const Wrapper = styled.div`
    margin-top: 150px;
    width:40%;
    height:55%;
    padding:20px;
    background-color:white;
    ${mobile({width:"75%"})};
`
const Title = styled.h1`
    font-size:24px;
    font-weight:300;
`
const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:20px 10px 0px 0px;
    padding:10px;
`
const Form = styled.form`
    display:flex;
    flex-wrap:wrap;
`
const Agreement = styled.span`
    font-size:12px;
    margin:20px 0px;
`
const Button = styled.button`
    width:40%;
    border:none;
    padding:15px 20px;
    background-color: teal;
    color:white;
    cursor:pointer;
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="username" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal data in accordance woth the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE ACCOUNT</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register