import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Info = styled.div`
    opacity:0;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background-color: gray;
    z-index:3;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:rgba(0,0,0,0.2);
    transition: all 0.5s ease;
    cursor:pointer;
`

const Container = styled.div`
    flex:1;
    margin:5px;
    min-width:280px;
    height:350px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color: #f5fbfd;
    position:relative;
    &:hover ${Info}{
        opacity:1;
    }
`
const Circle = styled.div`
    width:200px;
    height:200px;
    border-radius:50%;
    background-color:white;
    position:absolute;
`
const Image = styled.img`
    height:75%;
    z-index:2;
    overflow:hidden;
`

const Icon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    background-color:white;
    display : flex;
    align-items:center;
    justify-content:center;
    margin:10px;
    transition: all 0.5s ease;

    &:hover{
        background-color: #e9f5f5;
        transform:scale(1.1);
    }    
`

const Product = ({ item }) => {
    console.log(item.image)
    return (
        <Container>
            <Circle />
            <Image src={item.image} />
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <Link to = {`/product/${item._id}`}>
                    <SearchOutlinedIcon />
                    </Link>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlinedIcon />
                </Icon>
            </Info>
        </Container>
    )
}


// 1:7
export default Product