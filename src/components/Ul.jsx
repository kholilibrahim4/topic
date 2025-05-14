import React from 'react'

export default function Ul({ children, classes, ...spread }) {
    return (
        <ul className={classes} {...spread}>
            {children}
        </ul>
    )
}
