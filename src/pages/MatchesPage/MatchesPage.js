import React, { useEffect, useState } from 'react';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateMoment from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import * as moment from 'moment';
import ClearIcon from '@mui/icons-material/Clear';
import { MenuItem, Select, Avatar, FormControl, InputLabel, Pagination } from '@mui/material';
import useQueryString from '../../hooks/useQueryString';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { DatePickerContainer, FiltersContainer, MatchContainer, MatchInfo, SearchBar, TeamContainer } from './style';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

function MatchesPage() {

    const [matches, setMatches] = useState([]);
    const [isLoaded, setIsLoaded] = useState(true);
    const [matchDate, setMatchDate] = useQueryString("date",null);
    const [textSearch, onSetTextSearch] = useQueryString("s", "");


    const handleMatchesGet = () => {

    }

    const handleDateClr = () => {
        setMatchDate(null);
    }

    const handleTextSearchChange = (e) => {
        onSetTextSearch(e.target.value);
    }

    useEffect(() => {
        handleMatchesGet();
    }, [])

    if(isLoaded){
        return (
            <div>
                <FiltersContainer>
                        <SearchBar>
                        <input className='search-box' type="text" placeholder="Type to search ..." onChange={handleTextSearchChange}/>
                        <div className="search-icon">
                            <SearchIcon fontSize="medium"/>
                        </div>
                    </SearchBar>
                    <DatePickerContainer>
                        <LocalizationProvider dateAdapter={AdapterDateMoment}>               
                                <DatePicker
                                    label="Appointment Date"
                                    value={matchDate}
                                    onChange={(newValue) => {
                                        setMatchDate(newValue.format('YYYY-MM-DD'));
                                    }}
                                    renderInput={(props) => <TextField {...props} />}                                        
                                />
                        </LocalizationProvider>
                        <ClearIcon style={{marginLeft: '15px', marginRight: '40px'}} onClick={(e) => handleDateClr()}/>
                        <TextField
                            id="outlined-number"
                            label="Number of goals"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </DatePickerContainer>
                </FiltersContainer>
                <MatchContainer>
                    <TeamContainer justifySelf="flex-start" marginRight="auto">
                        <img src="https://pliki.meczyki.pl/soccer/team/original/1/1240.png" alt='team1'></img>
                        <span className='team-name'>Ac Milan</span>
                        <span className='add-to-favourite'>Dodaj do ulubionych <FavoriteBorderOutlinedIcon style={{marginLeft: '10px'}}/></span>
                    </TeamContainer>
                    <MatchInfo>
                            <span className='match-score'>
                                <span className='team1-score'>0</span>
                                <span>-</span>
                                <span className='team2-score'>0</span>
                            </span>
                            <span className='match-date'>
                                <span className='label'>Data</span>
                                <span className='value'>23 sty 2022 | 20:45 (zakończony)</span>
                            </span>
                            <span className='match-league'>
                                <span className='label'>Rozgrywki</span>
                                <span className='value'>Ekstraklasa</span>
                            </span>
                    </MatchInfo>
                    <TeamContainer justifySelf="flex-end" marginLeft="auto">
                    <img src="https://pliki.meczyki.pl/soccer/team/original/1/1242.png" alt='team1'></img>
                    <span className='team-name'>Juventus Turyn</span>
                    <span className='add-to-favourite'>Dodaj do ulubionych <FavoriteBorderOutlinedIcon style={{marginLeft: '10px'}}/></span>
                    </TeamContainer>
                </MatchContainer>
                <MatchContainer>
                    <TeamContainer></TeamContainer>
                    <TeamContainer></TeamContainer>
                </MatchContainer>
            </div>
        );
    }
}

export default MatchesPage;
