import React from 'react'

export default function List({ children, classes, ...spread }) {
    return (
        <li className={classes} {...spread}>
            {children}
        </li>
    )
}
