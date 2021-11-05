import React from 'react'

export function ButtonA({ onClick, children ,...props }) {
    return (
        <button className='buttonA' onClick={onClick} {...props}>
            {children}

        </button>
    )
}
ButtonA.prototype = {
    onClick: Function,
    style: Object,
    children: Node
}
