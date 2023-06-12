import axios from 'axios'
import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'





export default function NewPost() {
    // const [nome, setNome] = useState("")
    // const [prezzo, setPrezzo] = useState("")
    // const [descrizione, setDescrizione] = useState("")
    // const [url, setUrl] = useState("")
    const [obj, setObj] = useState({})
    const navigate = useNavigate()

    const handlerChange = (e)=>{
        

        let {name, value} = e.target; //verifica i value in tutti gli input e restituisce il valore
        setObj({
            ...obj,
            [name]:value

        })
        // console.log(setObj)
        console.log(e.target.name)
        // setNome(e.target.value)

    }

    const handleSubmit =()=>{
        axios.post("http://localhost:3000/posts", obj)
        .then(response => {navigate("/")})
    }
    return (
        <Container>
            <h1>New Post</h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>category</Form.Label>
                    <Form.Control onChange={handlerChange}   type="text" name="category" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>title</Form.Label>
                    <Form.Control onChange={handlerChange}  type="text" name="title" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>content</Form.Label>
                    <Form.Control onChange={handlerChange}  type="text" name="content" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>cover</Form.Label>
                    <Form.Control onChange={handlerChange}   type="text" name="cover" placeholder="" />
                </Form.Group>
                <Button onClick={handleSubmit} variant="primary" type="button">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}



