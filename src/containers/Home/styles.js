import Styled from "styled-components";
import {Link} from  'react-router-dom'
import Background from "../../assets/bg image.svg";

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
export const InputLabel = Styled.p`
font-size: normal;
font-weight: bold;
color: white;
text-shadow: 2px 2px #3e3d3d;

`;
export const Input = Styled.input`
    background: rgb(252 242 242);
    box-shadow: 5px 7px 10px 0px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    border: none;
    outline: none;
    padding-left: 10px;
    width: 16rem;
    height: 2rem;
    margin-bottom: 20px;
&::placeholder {
    color: black;
}

`;
export const Button = Styled(Link)`
    display: flex;
    gap: 7px;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(-90deg,#b80fd3,#420a6d);
    border: none;
    outline: none;
    padding: 0.8rem 1rem;
    margin: 1rem;
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


`;