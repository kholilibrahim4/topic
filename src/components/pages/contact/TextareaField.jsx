
export default function TextareaField({labelText,htmlFor, ...spread}) {
  return (
    <>
        <textarea {...spread} ></textarea>
        <label htmlFor={htmlFor}>{labelText}</label>
    </>
  )
}
