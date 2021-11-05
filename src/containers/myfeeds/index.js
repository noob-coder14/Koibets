import React, { useState } from 'react'
import { Feedbox } from '../../components'
import feed from '../../assets/data/userposts.json'
import './myfeeds.css'
import { AddCircleOutline, RemoveCircleOutlined, RemoveCircleOutlineRounded } from '@mui/icons-material'


export function MyFeeds() {
    const [tags, settags] = useState(['Man Utd', 'Chelsea', 'Tiger Woods'])
    const [show, setshow] = useState(false)
    const [value, setvalue] = useState('')

    return (
        <div>

            {/* <div className='newprepfloat'>
                <button className="float-button">
                    New Peep
                </button>



            </div> */}
            <div className="flex-row flex-wrap tags-wrapper align-center">

                {
                    tags.map((item, i) => {
                        return <div className='tag flex-row align-center'>
                            {item} <button onClick={() => {
                                let data = tags.slice()
                                data.splice(i, 1)
                                settags(data)
                            }} className="button-transparent"> <RemoveCircleOutlineRounded sx={{ width: 20, height: 20, }} />
                            </button> </div>
                    })
                }
                {
                    show &&
                    <input value={value} className='tags-input' onChange={(e) => { setvalue(e.target.value) }} />
                }
                <button className='flex-row align-center button-transparent' onClick={() => {
                    if (show) {
                        if (value) {
                            settags(old => [...old, value])
                            setvalue('')
                            setshow(false)
                        }

                    } else {
                        setshow(true)

                    }

                }}>
                    <AddCircleOutline />
                </button>







            </div>



            {
                [1, 2, 3, 4, 5, 6].map((item) => {
                    return <Feedbox comments={true} data={feed} avatar={true} />
                })
            }





        </div>
    )
}
