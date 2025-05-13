import React from 'react'

export default function Button({ type, text, btnLinkClasses, btnLinkActive, ...spred }) {
  return (
    <>
      {btnLinkActive ?
        <a className={btnLinkClasses} {...spred}>{text}</a>
        :
        <button type={type} className={btnLinkClasses} {...spred}>{text}</button>
      }
    </>
  )
}
