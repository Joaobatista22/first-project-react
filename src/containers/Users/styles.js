import Styled from "styled-components";
import Background from "../../assets/bg image2.svg";
import {Link} from  'react-router-dom'

export const Container = Styled.div`
background: url('${Background}');
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
background-size:cover;
overflow: auto;

`;
export const Image = Styled.img`
margin: 5% 0 1% 0;

`;
export const ContainerItens = Styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 2% 6% 5% 6%;
    border-radius: 45px;
    height: 80%;
    background: linear-gradient(45deg, black, transparent);

`;
export const H1 = Styled.h1`
font-size: normal;
font-weight: bold;
color: white;
text-shadow: 2px 2px #3e3d3d;
line-height: 40px;
text-align:center;


`;

export const Button = Styled(Link)`
    display: flex;
    gap: 7px;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(-90deg,#b80fd3,#420a6d);
    border: none;
    outline: none;
    padding: 0.9rem 4rem;
    margin: 14rem 1rem 1rem 1rem;
    border-radius: 11px;
    color: white;
    font-weight: 900;
    font-size: 16px;
    &:hover {
        cursor: pointer;
        transform: scale(1.05) ;
    }
    &:active {
        transform: scale(.95);
        opacity: 0.5;
    }
    img {
        transform: rotate(180deg);
    }


`;
export const User = Styled.li`
    display: flex;
    color: white;
    justify-content: space-around;
    align-items: center;
    padding: 8px;
    border-radius: 10px;
    background-image: linear-gradient(-90deg,#b80fd3,#420a6d);
    box-shadow: rgb(235 224 224 / 46%) 1px -2px 20px 1px;
    margin-bottom: 8px;
    p{
        font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: #ffff;
    }
    button {
        background: none;
        border: none;
        cursor: pointer;
    }
`;