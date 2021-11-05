import React, { useState } from 'react'
import { ThumbUpAlt, Chat, Assignment, } from '@mui/icons-material';
import { colors } from '../constants';
import { Avatar } from '@mui/material'


const Comment = ({ data, avatar }) => {
    return (<div>

        <div className="flex-row">
            <div>
                {
                    avatar &&
                    <Avatar sx={{ width: 40, height: 40 }} />
                }
            </div>
            <div className='margin'>

            </div>


            <div className='margin'>

                {data.text}

            </div>
        </div>


        <div className="flex-row justify-end">
            <div className="flex-row ">



                <div className='flex-row align-center user-record'>
                    <ThumbUpAlt sx={{ fontSize: 25, color: colors.heavygreen }} />

                    <p className='number'>
                        12
                    </p>
                </div>




            </div>

        </div>


    </div>)
}

export function Feedbox({ data, comments, avatar }) {
    const [showcomments, setshowcomments] = useState(false)
    return (
        <div className='feedbox'>
            <div className="flex-row">
                {
                    avatar &&


                    <div>
                        <Avatar sx={{ width: 70, height: 70 }} />
                    </div>

                }
                <div className='margin'>

                </div>


                <div className='margin'>

                    {data.post1}

                </div>
            </div>


            <div className="flex-row justify-end">
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
                    <button onClick={() => { setshowcomments(!showcomments) }} className='button-transparent flex-row align-center user-record'>
                        <Chat sx={{ fontSize: 25, color: colors.heavygreen }} />

                        <p className='number'>
                            12
                        </p>
                    </button>



                </div>

            </div>
            {
                showcomments &&
                <div className='comments-wrapper'>

                    {data.comments.map((item, i) => {
                        return <Comment data={item} key={i} />
                    })}
                </div>
            }
        </div>
    )
}
