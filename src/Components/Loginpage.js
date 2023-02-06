import React from 'react'
import styled from 'styled-components'
function Loginpage() {
  return (
    <Container>
        <CTA>   
            <CTAlogoOne src="/images/cta-logo-one.svg "/>
            <SignUp> GET ALL THERE 
            </SignUp>
            <Discription> 
            Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet erat nullam tortor quis elit lacus
            blandit vitae. Nostra dapibus bibendum; curae magnis commodo metus vestibulum tristique. Tristique
            volutpat consectetur congue lorem pharetra habitant. Sodales gravida egestas venenatis dignissim
            molestie cursus porta. Massa lacus pulvinar aliquam mi tristique.
            </Discription>
            <CTAlogoTwo src="/images/cta-logo-two.png "/>
        </CTA>
    </Container>
  )
}

export default Loginpage
const Container=styled.div`
position:relative;
min-height:calc(100vh - 70px);
display:flex;
align-items:top;
justify-content:center;
&:before{
    background:url("/images/login-background.jpg ") center center / cover 
    no-repeat fixed;
    content:"";
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:-1;
  }
`
const CTA=styled.div`
margin-top:100px;
max-width:650px;
padding:80px 40px;
width:90%;
display:flex;
flex-direction:column;
align-items:center;
`
const CTAlogoOne=styled.img`
`
const SignUp=styled.a`
width:100%;
background-color:#0063e5;
font:bold;
padding:17px 0;
color:#f9f9f9;
border-radius:4px;
text-align:center;
font-size:18px;
cursor:pointer;
transistion:all 250ms;
line-spacing:1.5px;
margin-top:8px;
margin-bottom:12px;
&:hover{
    background:#0483ee;
}
`
const Discription=styled.p`
font-size:11px;
letter-spacing:1.5px;
text-align:center;
line-height:1.5;
`
const CTAlogoTwo=styled.img`
width:90%;
`
