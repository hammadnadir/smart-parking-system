import { Button } from 'react-bootstrap'
import React, { useState } from 'react'
import { Form } from "react-bootstrap"
import "./styles.scss"
import { Link, useNavigate } from 'react-router-dom'

function Login() {

    const [inputData, setInputData] = useState({})
    const [err, setErr] = useState({})
    const navigate=useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        validateErr(inputData)
    }

    const validateErr = (value) => {

        let error = {}


        if (!value.firstname) {
            error.firstname = "firstname is required"
        } 

        if (!value.lastname) {
            error.lastname = "lastname is required"
        }

        if (!value.email) {
            error.email = "email is required"
        }

        if (!value.phoneno) {
            error.phoneno = "phoneno is required"
        }


        if (!value.password) {
            error.password = "Password is required"
        }
        if (Object.keys(error).length > 0) {
            setErr(error)
        } else {
            console.log(inputData)
            setErr({})
            navigate("/")
        }
    }

    const handleChange = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value })
    }

    return (
        <div className='main-page2'>
            <div className='inner-page'>
                <div className='login-page'>
                    <h3>Sign up</h3>
                    <Form className='input-fields' onSubmit={handleSubmit}>
                        <input type="text" placeholder='First Name' name='firstname' value={inputData.firstname || ""} onChange={handleChange} />
                        <p>{err.firstname}</p>
                        <input type="text" placeholder='Last Name' name='lastname' value={inputData.lastname || ""} onChange={handleChange} />
                        <p>{err.lastname}</p>
                        <input type="text" placeholder='Email' name='email' value={inputData.email || ""} onChange={handleChange} />
                        <p>{err.email}</p>
                        <input type="text" placeholder='Phone no.' name='phoneno' value={inputData.phoneno || ""} onChange={handleChange} />
                        <p>{err.phoneno}</p>
                        <input type="password" placeholder='Password' name='password' value={inputData.password || ""} onChange={handleChange} />
                        <p>{err.password}</p>
                        <Button type="submit">Submit</Button>
                    </Form>
                    <Link to="/">Login Page</Link>
                </div>
            </div>
        </div>
    )
}

export default Login




