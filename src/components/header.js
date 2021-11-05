import { Avatar, Button } from '@mui/material'
import React from 'react'
import { RingVolume } from '@mui/icons-material';
import { colors } from '../constants';
import { ButtonB } from '../shared';
import { MyNotification } from './index'
import { withRouter } from 'react-router';
import Wallet from '../assets/svg/Wallet.png'
function Index(props) {
    return (
        <div className='header-container flex-row'>
            <div className="main-container flex-row justify-end align-center flex1">
                <div className='flex-row align-center'>

                    <div className="button-wrapper">

                        <ButtonB style={{ backgroundColor: props.location.pathname == '/mywallet' ? '#C2C2C2' : '' }} onClick={() => { props.history.push('/mywallet') }}>
                            <p>  My wallet</p>
                            <img src={Wallet} className='button-icon' />
                        </ButtonB>
                    </div>
                    <div className="button-wrapper">

                        <MyNotification />
                    </div>


                    <Avatar sx={{ width: 75, height: 75 }} />

                </div>


            </div>


        </div>
    )
}
export const Header = withRouter(Index)

