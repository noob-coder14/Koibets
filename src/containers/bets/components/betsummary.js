import React from 'react'

export  function BetSummary() {
    return (
        <div className="bet-summary flex-col">

        <div className='summary-heading'>
            <p>
                Bet <br /> Summary
            </p>
        </div>


        <div className='flex-col bet-summary-content flex1 align-center'>

            <div className='flex-row inputs'>
                <div className='flex1'>

                    <select>
                        <option>
                            moneyLine
                        </option>

                    </select>

                </div>
                <div className='margin' />
                <div className='flex1 flex-row align-center'>

                    <input type='checkbox' />
                    <p className='bold'>Parley Bets</p>


                </div>
            </div>
            <div className='flex-row stakes'>
                <div className='flex1 flex-col align-center'>

                    <p className='bold'>
                        No of Stakes
                    </p>

                    <input />


                </div>
                <div className='separator' />
                <div className='flex1 flex-col align-start'>

                    <p className='bold'>Total Cost</p>
                    <p className='bold'>50.00$</p>


                </div>
            </div>
            <div className='flex-row total-return'>
                <div className='flex1 flex-col align-end'>

                    <p>
                        Return
                    </p>




                </div>
                <div className='margin' />
                <div className='flex1 bold flex-col align-start'>

                    91.05$

                </div>
            </div>


        </div>




    </div>
    )
}
