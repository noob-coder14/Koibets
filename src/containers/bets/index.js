import React, { useState } from 'react'
import './bets.css'
import data from '../../assets/data/betSlip.json'
import { BetSummary, Filters, SelectedBets, Sorting } from './components'
import { ButtonB } from '../../shared'
export default function Mybets() {
    const [current, setcurrent] = useState(0)
    const [selected, setselected] = useState([])

    const tabs = [
        {
            name: 'EPL'
        },
        {
            name: 'MLB'
        },
        {
            name: 'NCAA-FB'
        },
        {
            name: 'NFL'
        },
        {
            name: 'UFC'
        },
    ]


    return (
        <div className="flex-  my-bets-Container ">
            <div className='flex-row flex1 row-to-col-mob' >
                <div>

                    <div className='bets-tab-button-container flex-col'>
                        <h2 className='flex1'>
                            Leagues
                        </h2>

                        {
                            tabs.map((item, i) => {
                                return <button onClick={() => { setcurrent(i) }} style={{ backgroundColor: current == i ? '#E5E5E5' : 'transparent' }} key={i} className='button-transparent flex-row align-center justify-center flex1'>
                                    {item.name}
                                </button>
                            })
                        }



                    </div>
                </div>
                <div className='margin'></div>
                <div className='margin'></div>
                <div className='margin'></div>

                <div className='flex1' style={{overflow:'hidden'}}>
                    <Filters />

                    <div className='bet-content-container'>

                        <table>
                            <thead>
                                <th>
                                    Teams
                                </th>
                                <th>
                                    Date
                                </th>
                                <th>
                                    Money Line
                                </th>
                                <th>
                                    Spread
                                </th>
                                <th>
                                    Under/Over
                                </th>


                            </thead>
                            <tbody>
                                {data.map((item, i) => {
                                    return (
                                        <tr onClick={() => { setselected(old => [...old, item]) }} key={i}>
                                            <td>
                                                {item.team1}<br />
                                                vs<br />
                                                {item.team2}
                                            </td>
                                            <td>
                                                {item.Date}
                                            </td>
                                            <td>
                                                {item.Moneyline}
                                            </td>
                                            <td>
                                                {item.Spread}
                                            </td>
                                            <td>
                                                {item.UnderOver}
                                            </td>
                                        </tr>
                                    )
                                })

                                }


                            </tbody>
                        </table>



                    </div>
                </div>
                <div className='margin'>


                </div>
                <div>
                    <BetSummary />

                    <SelectedBets selected={selected} />





                </div>




            </div>


        </div>
    )
}
