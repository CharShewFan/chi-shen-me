import React from 'react';
import { Button,Avatar ,TextField} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';


export default function UpperNavbar(){
    return (
        <div>
            <h1>Today Menu</h1>
            <Button className="plus"><span><AddIcon></AddIcon></span></Button>
            <Avatar alt="dummy User" src="chi-shen-me/public/logo192.png"></Avatar>

            <div>
                <TextField className="searchBar"></TextField>
                <Button className="searchButton"><span><SearchIcon></SearchIcon></span></Button>
            </div>
        </div>
    )
}