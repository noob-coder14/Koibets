import React, { useState } from 'react'
import { Cradited, History, Withdraw } from './components'
import './mywallet.css'
export default function MyWallet() {
    const [current, setcurrent] = useState(0)
    const tabs = [
        {
            name: "Cradited",
            component: <Cradited />
        },
        {
            name: "Withdraw",
            component: <Withdraw />
        },
        {
            name: "History",
            component: <History />
        },
    ]

    return (
        <div className="flex-row my-wallets-Container ">
            <div className='flex-row flex1 row-to-col-mob' >
                <div>

                    <div className='wallets-tab-button-container flex-col'>
                        <h2 className='flex1'>
                            My Wallets
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

                <div className='flex1'>

                    <div className='wallet-content-container'>
                        <div className='content-wrapper'>

                            {tabs[current].component}

                        </div>

                        <div className='flex-row justify-end wallet-current-balence-container'>

                            <div className='cradit-amount flex-row justify-between align-center'>
                                <p>
                                    Cradited Amount :
                                </p>
                                <div className='margin'>

                                </div>
                                <div className='margin'>

                                </div>
                                <div className='margin'>

                                </div>

                                <p>$1,200</p>


                            </div>

                        </div>
                    </div>
                </div>




            </div>
            <div>

            </div>


        </div>
    )
}
