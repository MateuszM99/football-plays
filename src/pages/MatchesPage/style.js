import styled from "styled-components";

export const FiltersContainer = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
`

export const DatePickerContainer = styled.div`
    margin-top: 40px;
    display: flex;
    align-items:center;
`

export const SearchBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 422px;
    font-family: "Poppins", sans-serif;
    .search-box {
        height: 42px;
        width: 368px;
        border: solid 1px lightgrey;
        background: #fff;
        outline: none;
        padding: 0 60px 0 20px;
        font-size: 16px;
        color: grey;
        border-radius: 5px 0px 0px 5px;
    }
    .search-icon {
        background: grey;
        border: solid 1px lightgrey;
        width: 64px;
        height: 42px;
        cursor: pointer;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0px 5px 5px 0px;
    }
`

export const MatchContainer = styled.div`
    margin-top: 20px;
    margin-left: 400px;
    height: 400px;
    width: 1000px;
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
    align-items: center;

    *{
        font-family: 'Poppins',sans-serif;
        letter-spacing: 0.5px;
        outline: none;
        border: none;
    }

`

export const TeamContainer = styled.div`
    justify-self: ${props => props.justifySelf};
    margin-right: ${props => props.marginRight};
    margin-left: ${props => props.marginLeft};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 300px;

    img {
        height: 150px;
        width: 150px;
    }

    .team-name {
        margin-top: 10px;
        font-size: 25px;
        font-weight: 600;
    }

    .add-to-favourite {
        margin-top: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
    }
`

export const MatchInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    margin-right: 50px;
    width: 400px;
    height: 120px;
    .match-score{
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 22px;
        width: 400px;
        height: 40px;
        background: grey;
        border-radius: 10px 10px 0px 0px;
        .team1-score {
            margin-right: 15px;
        }
        .team2-score {
            margin-left: 15px;
        }
    }
    .match-date{
        display: flex;
        align-items: center;
        width: 400px;
        height: 40px;
        border-bottom: solid 1px lightgrey;

        .label {
            justify-self: flex-start;
            margin-right: auto;
        }

        .value {
            justify-self: flex-end;
            margin-left: auto;
        }
    }
    .match-league{
        display: flex;
        align-items: center;
        width: 400px;
        height: 40px;
        border-bottom: solid 1px lightgrey;

        .label {
            justify-self: flex-start;
            margin-right: auto;
        }

        .value {
            justify-self: flex-end;
            margin-left: auto;
        }
    }
`