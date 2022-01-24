import styled from "styled-components";

export const FormContainer = styled.div`
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: ${props => props.height};
    width: ${props => props.width};
    background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.1)
    );
    margin-bottom: auto;
    justify-self: center;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    box-shadow: 0 0 15px -5px #00000030;
    border: 2px solid #ffffff30;
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    *{
        font-family: 'Poppins',sans-serif;
        letter-spacing: 0.5px;
        outline: none;
        border: none;
    }

`