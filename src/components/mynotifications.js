import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ButtonB } from '../shared';
import { ChatOutlined, Close } from '@mui/icons-material';

import NotifcationIcon from '../assets/svg/Notification.png'
export const Notification = ({ onClose }) => {
    return (
        <div className="notification-container">

            <div className='flex-row justify-between'>
                <div className='flex-row align-center'>
                    <ChatOutlined sx={{ width: 12, height: 12 }} />
                    <p className="time-display">2 minutes ago </p>

                </div>
                <button onClick={onClose} className='button-transparent'  >

                    <Close sx={{ width: 12, height: 12 }} />
                </button>



            </div>

            <div className='flex-row'>
                <p className='notification-text'>

                    Do ullamco ex velit anim do proident exercitation et anim tempor.veniam enim quis officia magna anim...
                </p>


            </div>


        </div>
    )
}


export function MyNotification() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [notifications, setnotifications] = React.useState([1, 2, 3])
    return (
        <div className="notification-button-wrapper">
            <ButtonB
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                className="buttonB"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <p>Notification</p>
                <img src={NotifcationIcon} className='button-icon' />
            </ButtonB>
            {
                notifications.length > 0 &&
                <Menu
                    id="basic-menu"
                    style={{ marginTop: '5px' }}

                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {notifications.map((item, i) => {
                        return <MenuItem style={{ backgroundColor: 'white', marginTop: '5px' }}><Notification onClose={() => {
                            let arr = [...notifications]
                            arr.splice(i, 1)
                            setnotifications(arr)

                        }} /></MenuItem>
                    })}


                </Menu>
            }
        </div>
    );
}