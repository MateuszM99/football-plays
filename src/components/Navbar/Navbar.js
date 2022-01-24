import React,{useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from "styled-components";


const StyledNavbar = styled.nav`
    position: sticky;
    top: 10px;
    display: flex;
    width: 100%;
    height: 8vh;
    background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.2)
    );
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16);
    align-items: center;
    font-family: 'Roboto', sans-serif;
    padding-left: 30px;
    padding-right: 30px;
    z-index: 99;
`

const NavbarItemsContainer = styled.div`
    justify-self: flex-end;
    margin-left: auto;
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    text-align: center;
`

const NavbarLinkItem = styled(Link)`
    display: flex !important;
    align-items: center;
    justify-content:center;
    height: 36px;
    color: grey;
    padding: 5px;
    text-decoration: none;
    font-size: 15px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    white-space: nowrap;
    cursor: pointer;
    border-radius: 15px;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }

    &:hover {
        text-decoration: underline;
    }

    width: 8em;
    white-space: nowrap;
`

const NavbarA = styled.a`
    height: 36px;
    color: #ffffff !important;
    padding: 5px 10px;
    text-decoration: none;
    font-size: 15px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    background: #3232C1;
    white-space: nowrap;
    cursor: pointer;
    border-radius: 15px;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }

    &:hover {
        background-color: #03045e;
        color: #ffffff;
    }

    width: 10em;
    white-space: nowrap;
`



function Navbar() {
    const [isSignedIn,setIsSignedIn] = useState(false);
    const [user, setUser] = useState(null);
    const history = useHistory();

    const handleLoggedIn = () => {
        
    }

    const handleLogout = () => {
        localStorage.setItem("userData",'')
        localStorage.clear();
        setIsSignedIn(false);
        setUser(null);
        history.push('/home')
    }

    useEffect(() => {    
        handleLoggedIn();
    }, []);

    return (
        <StyledNavbar>
            <NavbarItemsContainer>
                <NavbarLinkItem style={{display : isSignedIn ? 'none' : 'block'}} to="/home">Home</NavbarLinkItem>   
                <NavbarLinkItem style={{display : isSignedIn ? 'none' : 'block'}} to="/matches">Matches</NavbarLinkItem>      
                <NavbarLinkItem style={{display : isSignedIn ? 'none' : 'block'}} to="/login">Login</NavbarLinkItem>
                <NavbarLinkItem style={{display : isSignedIn ? 'none' : 'block'}} to="/signup">Sign up</NavbarLinkItem>        
                <NavbarLinkItem style={{display : isSignedIn ? 'block' : 'none'}} to="/signin">{user?.userName}</NavbarLinkItem>
                <NavbarA onClick={handleLogout} style={{display : isSignedIn ? 'block' : 'none', cursor: 'pointer'}}>Log out</NavbarA>
            </NavbarItemsContainer>
        </StyledNavbar>
    )
}
export default Navbar
