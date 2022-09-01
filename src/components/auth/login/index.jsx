import { Button } from 'react-bootstrap'
import React, { useState } from 'react'
import { Form } from "react-bootstrap"
import "./styles.scss"
import { Link  ,useNavigate } from 'react-router-dom'

function Login() {

    const [inputData, setInputData] = useState({})
    const [err, setErr] = useState({})
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        validateErr(inputData)
    }

    const validateErr = (value) => {

        let error = {}

        let myName = "Zeeshan"
        let myPassword = "pucit"

        if (!value.username) {
            error.username = "Username is required"
        } else {
            if (!value.username.match(myName)) {
                error.username = "Invalid user"
            }
        }


        if (!value.password) {
            error.password = "Password is required"
        } else {
            if (!value.password.match(myPassword)) {
                error.password = "Invalid password"
            }
        }
        if (Object.keys(error).length > 0) {
            setErr(error)
        } else {
            console.log(inputData)
            setErr({})
            navigate("/cars");

        }
    }

    const handleChange = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value })
    }

    return (
        <div className='main-page'>
            <div className='inner-page'>
                <div className='login-page'>
                    <h3>Login</h3>
                    <Form className='input-fields' onSubmit={handleSubmit}>
                        <input type="text" placeholder='Usename' name='username' value={inputData.username || ""} onChange={handleChange} />
                        <p>{err.username}</p>
                        <input type="password" placeholder='Password' name='password' value={inputData.password || ""} onChange={handleChange} />
                        <p>{err.password}</p>
                        <Button type="submit">Submit</Button>
                    </Form>
                    {/* <Link to="/signup">Don't have an account? sign up</Link> */}
                </div>
            </div>
        </div>
    )
}

export default Login




