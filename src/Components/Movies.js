import React from 'react'
import styled from 'styled-components'
import { selectMovies } from '../features/Movies/MovieSlice'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Movies() {
    const movies = useSelector(selectMovies);
     console.log("this is movies ",movies);
    return (
        <Container>
        <h4>Recommended for You</h4> 
        <Content>
            { movies && 
                movies.map((movie)=>(//idr me  angular braclet pe kaam kar raha tha angular mat use karo
                    <Wrap key ={movie.id}>
                    <Link to={'/details/'+movie.id} >
                    
                    <img src={movie.cardImg} alt="Img" id={movie.id}/>
                     </Link>
                    </Wrap>
                ))
            }
        </Content>
    </Container>
    )
}

export default Movies
const Container = styled.div`

`
const Content = styled.div`
margin-top:30px;
display: grid;
grid-gap:25px;
padding:30px 0 26px;
grid-template-columns:repeat(4,minmax(0,1fr));


`
const Wrap = styled.div`
cursor:pointer;
border-radius:10px;
overflow:hidden; 
border:3px solid rgba(249,249,249,0.1);
box-shadow:rgb(0 0 0 /69%) 0px 26px 30px -10px,
rgb(0 0 0/73%) 0px 16px 10px -10px; 
img{
    width:100%;
    height:100%;
    object-fit: cover;
}
&:hover{
    transform:scale(1.05);
    cursor:pointer;
    border:5px solid rgba(238, 228, 237, 1);
    box-shadow:rgb(0 0 0 /80%) 0px 40px 58px -16px,
    rgb(0 0 0/72%) 0px 30px 22px -10px;
    transition :all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
}
`