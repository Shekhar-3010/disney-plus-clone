// import React from 'react'
// import styled from 'styled-components'
// import { auth, provider } from "../firebase";
// import {useHistory} from "react-router-dom"
// import { async } from "@firebase/util";


// import {
//   selectUserName,
//   selectUserPhoto,
//   setUserLogin,
//   setSignOut
// } from "../features/user/userSlice"
// import {useDispatch, useSelector } from 'react-redux'
// import { signOut } from 'firebase/auth';


// function Header() {
//   const dispatch=useDispatch();
//   const navigate = useNavigate();

//   const userName = useSelector(selectUserName);
//   const userPhoto = useSelector(selectUserPhoto);
//   const SignIn=()=>{
//     auth.signInWithPopup(provider)
//     .then((result)=>{
//       let user =result.user
//       dispatch(setUserLogin({
//         name:user.displayName,
//         email:user.email,
//         photo:user.photoURL

//       }))
      
//     })

//   }
//   const SignOut=()=>{
//     auth.signOut()
//     .then(()=>{
//       dispatch(setSignOut());
//       history.push("/login")
//     })
//   }


//   return (
//     <Nav>
//       <Logo src="/images/logo.svg" />
//       {!userName ? (
//         <LoginContainer>
//         <Login onClick={SignIn}>Login</Login>
//         </LoginContainer>) :
        
//         <>
//         <Navmenu>
//         <a>
//           <img src="/images/home-icon.svg" />
//           <span>Home </span>
//         </a>
//         <a>
//           <img src="/images/search-icon.svg" />
//           <span>Search </span>
//         </a>
//         <a>
//           <img src="/images/watchlist-icon.svg" />
//           <span>Watchlist </span>
//         </a>
//         <a>
//           <img src="/images/original-icon.svg" />
//           <span>Originals  </span>
//         </a>
//         <a>
//           <img src="/images/movie-icon.svg" />
//           <span>Movies</span>
//         </a>
//         <a>
//           <img src="/images/series-icon.svg" />
//           <span>Series</span>
//         </a>

//       </Navmenu>
//       <Userimg  
//       onClick={SignOut} src="/images/series-icon.svg" />

//         </>
//       }
      

//     </Nav>
//   )
// }

// export default Header
// const Nav = styled.div`
// overflow-x:hidden;
// height:70px;
// background:#090b13;
// display:flex;
// align-item:center;
// padding:0 36px;

// `
// const Logo = styled.img`
// width:80px;

// `
// const Navmenu = styled.div`
// display:flex;
// flex:1; //ye isliye use kiya taki user profile wali chiz nav bar k ekdum last me aajai
// margin-left:25px; 
// align-item:center;  

// a{
//   cursor:pointer;
//   display:flex;
//   align-items:center;
//   padding:0 12px; 
//   img{
//     height:20px;
//   }
//   span{
//     font-size:13px;
//     letter-spacing:1.42px;
//     position:relative;
     
//     &:after{
//       content:"";
//       height:2px;
//       background:white; 
//       position:absolute;
//       left:0;
//       right:0;
//       bottom:-6px;
//       opacity:0;
//       transform-origin:left center;
//       transition all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
//       transform: scaleX(0);
     
//     }
//   }
//   &:hover{
//     span:after{
//       transform: scaleX(1);
//       opacity:1;
//     }
//   }
// }
// `
// const Userimg = styled.img`
// width:48px;
// height:48px;
// border-radius:50%;
// cursor:pointer;
// `

// const Login=styled.div`
// border:1px solid #f9f9f9;
// padding:8px 16px ;
// border-radius:4px;
// letter-spacing:1.5px;
// text-transform:uppercase;
// Background-color:rgba(0,0,0,0.6);
// transition:all 0.2s ease 0s;
// &:hover{
//   background-color:#f9f9f9;
//   color:black;
//    border-color:transparent;
//    cursor:pointer;


// }
// `
// const LoginContainer=styled.div`
// flex:1;
//  display:flex;
// justify-content:flex-end;
// `

import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import {
  selectUserName,
  selectUserPhoto,
  setSignOut,
  setUserLogin,
} from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { async } from "@firebase/util";

function Header() {
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        navigate("/");
      }
    });
  }, []);
  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      let user = result.user;
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
      navigate("/Home");
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      navigate("/");
    });
  };

  return (
    <Nav>
      <Logo src="/images/logo.svg"></Logo>
      {!userName ? (
        <LoginContainer>
          <Login onClick={signIn}>Login</Login>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <a>
              <img src="/images/home-icon.svg" />
              <span>Home</span>
            </a>
            <a>
              <img src="/images/search-icon.svg" />
              <span>Search</span>
            </a>
            <a>
              <img src="/images/watchlist-icon.svg" />
              <span>Watchlist</span>
            </a>
            <a>
              <img src="/images/original-icon.svg" />
              <span>Originals</span>
            </a>
            <a>
              <img src="/images/movie-icon.svg" />
              <span>Movies</span>
            </a>
            <a>
              <img src="/images/series-icon.svg" />
              <span>Series</span>
            </a>
          </NavMenu>
          <UserImg onClick={signOut} src={userPhoto} alt={userName}></UserImg>
        </>
      )}
    </Nav>
  );
}

export default Header;

const Nav = styled.div`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  cursor: pointer;
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  justify-content: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      text-transform: uppercase;
      cursor: pointer;
      position: relative;
      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  cursor: pointer;
`;

const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.2s ease 0s;
  cursor: pointer;
  :hover {
    background-color: #f9f9f9;
    color: black;
    border-color: transparent;
  }
`;