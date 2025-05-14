import React from 'react'

export default function InputField({labelText,htmlFor, ...spread}) {
  return (
    <>
        <input {...spread} />
        <label htmlFor={htmlFor}>{labelText}</label>
    </>
  )
}
