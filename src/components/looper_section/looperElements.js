import styled from "styled-components";

export const LooperCont = styled.div`
width: 100%;
height: 250px;
max-width: 100%;
grid-column-gap: 10px;
grid-row-gap: 10px;
flex-direction: column;
padding-top: 40px;
padding-bottom: 40px;
display: flex;
overflow: hidden;
background: black;

`
export const Looper1 = styled.div`
    justify-content: space-between;
    display: flex;
    flex-direction: row;
   flex-wrap: wrap;
    height: 100%;
    width: 100%;
    overflow: auto;`

export const Looper2 = styled.div`
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;
    overflow: auto;
    
    `

export const Container = styled.div`
    background-color: #4d4855;
    background-image: linear-gradient(147deg, #4d4855 0%, #000000 74%);

    display: inline-block;
    margin-left: 10px;
    height: 60px;
    width: 200px;
    color: rgba(51, 204, 255, 0.7);
    padding: 15px;
    font-size: 16px;
    text-align: center;
    border : 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 15px;
    font-weight: bold;
    overflow: auto;
   
`