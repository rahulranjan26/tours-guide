import React from 'react'
import Tour from './Tour'
import styled from 'styled-components'
function Tours({ tours, deleteTour }) {
    // console.log(props)
    return (
        <Article>
            {tours.map((tour) => {
                return <Tour tour={tour} key={tour.id} deleteTour={deleteTour} />
            })}
        </Article>
    )
}
const Article = styled.div`
    width:100%;
    padding:2rem;
    margin: 0 auto;
    max-width:500px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
export default Tours