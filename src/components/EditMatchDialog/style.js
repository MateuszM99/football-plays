import { Button } from "@mui/material"
import styled from "styled-components"
import Paper from '@mui/material/Paper';

export const DialogContainer = styled.div`
    font-family: "Poppins", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 10px;

    .close-icon {
        cursor: pointer;
        color: grey;
        justify-self: flex-end;
        margin-left: auto;
    }
`

export const Header = styled.h5`
    align-self: center;

`

export const AppointmentFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const PsychologistDisplay = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const PsychologistData = styled.span`
    display: flex;
    align-items: center;

    p {
        margin: 0;
        margin-left: 15px;
        font-size: 18px;
        font-weight: 700;
    }
`

export const DatePickerContainer = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    
`

export const DateItem = styled(Paper)`
   &&{ 
        background-color: ${props => props.active ? '#fff' : '#3232C1'};
        color: ${props => props.active ? '#3232C1' : '#fff'};
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        height: 48px;

        &:hover {
            color: #3232C1;
            background-color: #fff;
        }
   }
`

export const PriceContainer = styled.div`
    margin-top: 30px;
    background-color: #F4F3F1;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
    border-radius: 10px;

    span {
        display: flex;
        width: 70%;
        align-items: center;
        label {
            font-size: 25px;
            font-weight: 600;
        }

        p {
            margin: 0;
            margin-left: auto;
            justify-self: flex-end;
            font-size: 25px;
            font-weight: 700;
        }
    }
`

export const AppointmentButton = styled(Button)`
    &&{
        align-self: center;
        margin-top: 10px;
        height: 36px;
        width: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #3232C1;
        color: #ffffff;
        padding: 15px 15px;
        font-size: ${props => props.fontSize || '16px'};
        font-weight: 600;
        border-radius: 15px;
        cursor: pointer;
        &:hover {
            background-color: #03045e;
        }
    }
`

export const ErrorDisplay = styled.div`
    margin-top: 5px;
    font-size: 11px;
    height: 15px;
    color: grey;
`