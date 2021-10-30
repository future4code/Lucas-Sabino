import { useState } from 'react'

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const handleInputChange = (ev) =>{
        const { value, name } = ev.target
        setForm({...form, [name]: value})
    }

    const clear = () => {
        setForm(initialState)
    }

    return [form, handleInputChange, clear]
}

export default useForm