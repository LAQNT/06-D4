import axios from 'axios'
import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [obj, setObj] = useState({})
    const navigate = useNavigate()
    const handlerChange = (e)=>{
        
        let {name, value} = e.target; //verifica i value in tutti gli input e restituisce il valore
        setObj({
            ...obj,
            [name]:value
        })

        console.log(e.target.name)

    }
    const handleSubmit =()=>{
        axios.post("http://localhost:3000/login", obj)
        .then(response => {navigate("/")})
    }
    return (
        <Container>
            <h1>Login</h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control onChange={handlerChange}  type="text" name="username" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>password</Form.Label>
                    <Form.Control onChange={handlerChange}   type="password" name="password" placeholder="" />
                </Form.Group>
                <Button onClick={handleSubmit} variant="primary" type="button">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}