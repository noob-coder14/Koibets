import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ButtonB } from '../../../shared';

export function Sorting() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <ButtonB
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                className="buttonB"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Sorting
            </ButtonB>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>Highest to Lowest</MenuItem>
                <MenuItem onClick={handleClose}>Lowest to Highest</MenuItem>
                
            </Menu>
        </div>
    );
}