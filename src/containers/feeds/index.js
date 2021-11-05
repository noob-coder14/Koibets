import React from 'react'
import { Feedbox } from '../../components'
import feed from '../../assets/data/userposts.json'
import './feeds.css'

export function Feeds() {
    return (
        <div>

            {/* <div className='newprepfloat'>
                <button className="float-button">
                    New Peep
                </button>

            </div> */}


            {
                [1, 2, 3, 4, 5, 6].map((item) => {
                    return <Feedbox data={feed} />
                })
            }





        </div>
    )
}
