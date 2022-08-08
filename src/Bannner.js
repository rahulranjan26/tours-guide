/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Loading from './Loading'
import Tours from './Tours'
import styled from 'styled-components'
const url = 'https://course-api.com/react-tours-project'
function Bannner() {
    const [loading, setLoading] = useState(true)
    const [tours, setTours] = useState([])

    const deleteTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id)
        setTours(newTours)
    }

    const fetchTours = async () => {
        setLoading(false)
        try {
            const response = await fetch(url)
            const tours = await response.json()
            setLoading(false)
            setTours(tours)
        }
        catch (error) {
            setLoading(false)
            console.log(error)
        }
    }
    useEffect(() => {
        fetchTours()
    }, [])


    if (loading) {
        return (
            <Loading />
        )
    }
    if (tours.length === 0) {
        return (
            <>
                <Article>
                    <h1>Refresh</h1>
                    <button onClick={() => fetchTours()}>Refresh</button>
                </Article>

            </>
        )
    }
    return (
        <Tours tours={tours} deleteTour={deleteTour} />
    )
}




const Article = styled.div`
    width:90vw;
    max-width:720px;
    margin:0 auto;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;

    h1{
        font-weight:bolder;
        font-size:24px;
    }

    button{
        margin-top:8px;
        padding: 4px 8px;
        background-color:lightblue;
        border:none;
        border-radius:10px;
        cursor:pointer;
    }

`
export default Bannner
