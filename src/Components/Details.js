import React from 'react'
import styled from 'styled-components'

function Details() {
    return (
        <Container>
            <Background>
                <img src='/images/details.png' />

            </Background>
            <ImageTitle>


            </ImageTitle>
            <Controlls>
                <Playbtn>
                    <img src='/images/play-icon-black.png' />
                    <span>PLAY</span>
                </Playbtn>
                <Trailerbtn>
                    <img src='/images/play-icon-white.png' />
                    <span>Trailor</span>
                </Trailerbtn>
                <Addbtn>
                <span>+</span>
                </Addbtn>
                <GroupBtn>
                <img src='/images/group-icon.png'/>
                </GroupBtn>
            </Controlls>
            <Subtitles>
                2019 . 7m . Family,Fantasy,Kids,Animation
            </Subtitles>
            <Discription>
            A Chinese Canadian woman cooks a meal of baozi for her and her husband. {'\n'}
             One of her buns comes alive,much to her shock. She raises the steamed bun as a child,
             feeding and caring for it, as it enjoys the time spent with her.
            </Discription>
        </Container>
    )
}

export default Details





const Container = styled.div`
    position:relative;
    min-height:calc(100vh - 250px);
    overflow-x:hidden;
    display:block;
    top:72px;
    padding:0 calc(3.5vw + 5px);
`
const Background = styled.div`
    position:fixed;
    left:0; top:0; right:0;
    opacity:.7;
    z-index:-1;
    img{
        width:100vw;
        height:100vh;
        
        }
    }
`
const ImageTitle = styled.div`
height:30vh;
min-height:170px;
width:35vw;
min-width:200px;
img{
    width:100%;
    height:100%;
    object-fit:cover;
   

}

`
const Controlls = styled.div`
display:flex; 
align-items:center;

`
const Playbtn = styled.button`
border-radius:4px;
font-size:15px;
padding:0px 24px;
margin-right:22px;
display:flex;
align-items:center;
height:56px;
background-color:rgb(249,249,249);
border:none;
cursor:pointer;
letter-spacing:1.8px;
&:hover{
    background:rgb(198,198,198);
}
`
const Trailerbtn = styled(Playbtn)`
background:rgba(0,0,0,0.3);
border:1px solid rgb(249,249,249);
color:rgb(249,249,249); 

&:hover{
    text-transform:uppercase;

}

`
const GroupBtn = styled.button`
margin-right:16px;
widht:44px;
height:44px;
display:flex;
align-items:center;
justify-content:center;
border-radius:50%;
border:2px solid white;
background-color:rgb(0,0,0);
cursor:pointer;
span{
    font-size:32px;
    color:white;
}


`
const Addbtn = styled.button`
margin-right:16px;
widht:44px;
height:44px;
display:flex;
align-items:center;
justify-content:center;
border-radius:50%;
border:2px solid white;
background-color:rgb(0,0,0,0.6);
cursor:pointer;
span{
    font-size:30px;
    color:white;
}
`
const Subtitles=styled.div`
color :rgb(249,249,249);
font-size;
min-height:20px;
margin-top:26px;
`
const Discription=styled.div`
line-height:1.4;
font-size:20px;
margin-top:16px;
color :rgb(249,249,249);
max-width:760px;

`
