import React from 'react'
import {Paper,Button} from '@mui/material'

export default function ButtonNavbar(){

    return (
        <div className="bgBox">
            <Paper elevation={3}>
                <Button className = "home">Home</Button>
                <Button className = "week">week</Button>
                <Button className = "gorcery">Gorcery</Button>
                <Button className = "store">Store</Button>
            </Paper>
        </div>
    )
}