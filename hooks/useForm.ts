import { useState } from 'react'

export default function useForm<T>(initialValues: T) {
  const [values, setValues] = useState(initialValues)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues({ ...values, [e.target.name]: e.target.value })
  return { values, handleChange, setValues }
}
