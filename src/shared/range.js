import React from 'react'

export function Range({ percentage = 70 }) {
    return (
        <div className='ranger-outer'>
            <div style={{ width: `${percentage}%` }} className='ranger-inner'></div>

        </div>
    )
}
