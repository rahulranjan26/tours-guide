import React, { useState } from 'react'
import styled from 'styled-components'
function Tour({ tour, deleteTour }) {
    // console.log(props)
    const { id, name, info, image, price } = tour
    const [isRead, setRead] = useState(false)
    return (
        <List>
            <Image>
                <img src={image} alt={name} />
            </Image>
            <Footer>
                <Information>
                    <h4>{name}</h4>
                    <h5>${price}</h5>
                </Information>
                <Paragraph>
                    <p>{isRead ? info : `${info.substring(0, 150)}...`
                    }
                        <btn onClick={() => setRead(!isRead)}>Read More</btn>
                    </p>
                </Paragraph>
            </Footer>
            <Button onClick={() => deleteTour(id)}>Not Interested</Button>
        </List>
    )
}

const List = styled.div`
`
const Image = styled.div`
width:65vw;
max-width: 720px;

img{
    width:100%;
    height:100%;
    object-fit:cover;
}

`

const Footer = styled.div``

const Information = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
    h5{
        margin-right:45px;
        color:lightblue;
        font-weight: 700;
        font-size:16px;
        border-radius: 2px;
        letter-spacing: 1px;
    }
    h4{
    letter-spacing: 1.5px;
    text-transform: capitalize;
    line-height: 1.25;
    margin-bottom: 0.75rem;
    }

`

const Paragraph = styled.div`
p{
    btn{
        background-color:transparent;
        color:blue;
        transition:all 0.2s linear;
        cursor:pointer;
        padding:3px;
        margin-top:4px;
        border-radius:10px;
        &:hover{
            background-color:lightblue;
            color: #000;
        }
    }
}
`
const Button = styled.button`
    margin:16px auto;
    display:block;
    padding:8px;
    background:transparent;
    border:1px solid red;
    font-weight:bold;
    transition:all 1s ease-out;
    &:hover{
        background-color:lightblue;
        border:none;
    }


`
export default Tour