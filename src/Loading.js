import React from 'react'
import styled, { keyframes } from 'styled-components'
function Loading() {
    return (
        <Load>
            <div></div>
        </Load>
    )
}

const Spin = keyframes`
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
`


const Load = styled.div`
width:100%;
padding:2rem;
margin:16px auto;
max-width:470px;
    div{
    width:100px;
    height:100px;
    /* background-color:blue; */
    margin:16px auto;
    border:16px solid grey;
    border-bottom: 16px solid #fff;

    border-radius:50%;
    animation: ${Spin}  1s linear infinite;
    }
`


export default Loading