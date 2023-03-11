import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width:100vw; 
    height:100vh;
    ${'' /* background-color:gray; */}
    background : linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
    ),
    url('images/register_background.jpg'),center;
    background-size:cover;
    display:flex;
    align-item:center;
    justify-content:center;
`
const Wrapper = styled.div`
    width:25%;
    padding:20px;
    background-color:white;
`
const Title = styled.h1`
    font-size:24px;
    font-weight:300;
`
const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:20px 0px;
    padding:10px;
`
const Form = styled.form`
    display:flex;
    flex-direction:column;
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
    margin-bottom:10px;
`
const Link = styled.a`
    margin:5px 0px;
    font-size:12px;
    text-decoration:underline;
    cursor:pointer;
`

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username" />
                    <Input placeholder="password" />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal data in accordance woth the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>LOGIN</Button>
                    <Link>FORGOT PASSWORD</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login