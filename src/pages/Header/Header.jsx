import React from 'react';
import {Button} from "@mui/material";
import {Link} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import HistoryIcon from '@mui/icons-material/History';

export function Header () {

    return (
        <div className="header">
            <Link to={"/search"} style={{ margin: '10px', textDecoration: 'none' }}>
                <Button variant="outlined" startIcon={<SearchIcon />}>
                    Search
                </Button>
            </Link>
            <Link to={"/history"} style={{ margin: '10px', textDecoration: 'none' }}>
                <Button variant="outlined" startIcon={<HistoryIcon />}>
                    History
                </Button>
            </Link>
        </div>
    );
}
