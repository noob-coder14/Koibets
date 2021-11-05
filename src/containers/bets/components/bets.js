import React from 'react'

export  function SelectedBets({ selected = [] }) {
    return (
        <div className="selected-bets">

            {selected.map((item, i) => {
                return (
                    <div className='selected-bet'>
                        <p className='selected-bet-head'>

                            {item.team1} vs {item.team2}
                        </p>
                        <p className='selected-bet-date'>
                            {item.Date}

                        </p>

                    </div>
                )
            })}


        </div>
    )
}
