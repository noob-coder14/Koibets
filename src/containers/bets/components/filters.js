import React, { useState } from 'react'
import { Sorting } from '.'

export function Filters() {
    const [type, settype] = useState('bet')
    const [date, setdate] = useState(new Date().toISOString().split('T')[0])
    console.log(date)
    const [result, setreult] = useState('24 hrs')
    return (
        <div className='flex-row filters margin justify-between row-to-col-mob '>
            <div className='flex-col'>

                <div className='flex-row'>
                    <div>

                        <button onClick={() => { settype('bet') }} className="filters-button">
                            Bet Slip
                        </button>
                    </div>
                    <div className='margin'>
                    </div>
                    <div>

                        <button onClick={() => { settype('result') }} className='filters-button'>
                            Results
                        </button>
                    </div>




                </div>
            </div>
            <div className='margin'></div>
            {
                type == 'bet' ?
                    <div className='flex-row'>
                        <Sorting />

                        <div className='margin'>

                        </div>
                        <div>

                            <input value={date} onChange={e => { setdate(e.target.value) }} className='calender-picker' placeholder='Calender' type='date' />
                        </div>

                    </div>

                    :
                    <div className='flex-row flex-wrap'>
                        {['24 hrs', '3 days', '1 week', '15 days', '1 month'].map((item, i) => {
                            return <button onClick={()=>{setreult(item)}} className="result-filer-button" style={{ backgroundColor: result == item ? '#666666' : '#EBEBEB' }} key={i}>
                                {item}
                            </button>
                        })}


                    </div>


            }


        </div>
    )
}
