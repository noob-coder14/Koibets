import React from 'react'

export function History() {
    return (
        <div className='flex1 history-container'>
            <table>
                <thead>
                    <th>
                        Action
                    </th>
                    <th>
                        Date
                    </th>
                    <th>
                        Method
                    </th>
                    <th>
                        Amount
                    </th>

                </thead>
                <tbody>
                    {[1, 2, 3].map((item, i) => {
                        return (


                            <tr>
                                <td>
                                    Credited
                                </td>
                                <td>
                                    15th October
                                </td>
                                <td>
                                    Paypal
                                </td>
                                <td>
                                    97.02$
                                </td>
                            </tr>


                        )
                    })}
                </tbody>
            </table>



        </div>
    )
}
