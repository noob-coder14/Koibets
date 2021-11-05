import React from 'react'

export function ButtonB({ onClick, children, ...props }) {
    return (
        <button className='buttonB' {...props} onClick={onClick}>
            {children}

        </button>
    )
}
