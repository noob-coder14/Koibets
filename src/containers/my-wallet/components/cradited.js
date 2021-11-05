import React, { useState } from 'react'

export function Cradited() {
    const [method, setmethod] = useState('')
    const [bankselected, setbankselected] = useState('')

    const payment = [
        'Paypal',
        'Western Union',
        'Visa Cards',
        'Crypto',

    ]
    const bank = [
        'ABC Bank',
        'Green Glass Bank'
    ]
    return (
        <div className='cradit-container'>
            <div className='flex-row flex-wrap'>
                {
                    payment.map((item, i) => {
                        return <button onClick={() => { setmethod(item) }} style={{ backgroundColor: method == item ? '#666' : '' }} key={i} className='payment-method-button flex-row align-center justify-center'>
                            {item}
                        </button>
                    })
                }
            </div>
            <div className='flex-row flex-wrap'>
                {
                    bank.map((item, i) => {
                        return <button onClick={() => { setbankselected(item) }} style={{ backgroundColor: bankselected == item ? '#666' : '' }} key={i} className='bank-button flex-row align-center justify-center'>
                            {item}
                        </button>
                    })
                }
            </div>
            <div className='flex-row'>


                <div className='cradit-amount flex-row justify-between row-to-col-mob align-center'>
                    <p>
                        Cradited Amount :
                    </p>

                    <div className='margin'>

                    </div>
                    <div>

                        <input>

                        </input>$
                    </div>


                </div>

            </div>

        </div>
    )
}
