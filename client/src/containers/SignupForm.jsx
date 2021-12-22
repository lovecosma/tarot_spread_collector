import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux'
import {signup} from "../actions/user"
import "../stylesheets/Form.css" 

export default function SignupForm() {

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        password_confirmation: ""
    })

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(dispatch, formData)
        navigate('/')

    } 

    return (
        <div>
           <h1>Signup</h1> 
            <form onSubmit={handleSubmit} className="user-info-form">
                <input onChange={handleChange} type="text" name="username" value={formData.username} className="username-field"/>
                <input onChange={handleChange} type="password" name="password" value={formData.password} className="password-field"/>
                <input onChange={handleChange} type="password" name="password_confirmation" value={formData.password_confirmation} className="password-field"/>
                <button type="submit">signup</button>
            </form>
        </div>
    )
}
