import { Avatar } from '@mui/material'
import React from 'react'
import user from '../../assets/data/userData.json'
import { ThumbUpAlt, Chat, Assignment, } from '@mui/icons-material';
import './profile.css'
import { colors } from '../../constants';
import { ButtonB, Range } from '../../shared';
import { ProfileScreens } from '../../routes';
export function Profile() {
    return (
        <div className='flex-col profile-container'>
            <div className='flex-row row-to-col-mob'>
                <div className='margin'>

                </div>
                <div className='flex-row align-center justify-center'>

                    <Avatar sx={{ width: 230, height: 230 }} />
                </div>
                <div className='flex-col user-detail-wrapper'>
                    <p className="Username">
                        {user.name}
                    </p>
                    <p>
                        {user.bio}
                    </p>
                    <div className="flex-row ">

                        <div className='flex-row align-center user-record'>
                            <Assignment sx={{ fontSize: 25, color: colors.heavygreen }} />

                            <p className='number'>
                                12
                            </p>
                        </div>

                        <div className='flex-row align-center user-record'>
                            <ThumbUpAlt sx={{ fontSize: 25, color: colors.heavygreen }} />

                            <p className='number'>
                                12
                            </p>
                        </div>
                        <div className='flex-row align-center user-record'>
                            <Chat sx={{ fontSize: 25, color: colors.heavygreen }} />

                            <p className='number'>
                                12
                            </p>
                        </div>



                    </div>
                    <div className='flex-row align-center  justify-between '>
                        <div>


                            <ButtonB >
                                Follow
                            </ButtonB>
                        </div>
                        <div>
                            <div className='flex-row align-center'>

                                <p>
                                    Bet Success
                                </p>
                                <p className="bet-success-number">
                                    83%
                                </p>
                            </div>
                            <div>
                                <Range />
                            </div>






                        </div>
                    </div>
                </div>

            </div>

            <div style={{ marginTop: '20px' }}>

                <ProfileScreens />

            </div>


        </div>
    )
}
