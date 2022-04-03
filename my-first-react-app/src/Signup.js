import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from './AuthContext'
import GlobalStyle from './GlobalStyle'
import { InnerLayout } from './styles/Layouts';
import styled from 'styled-components'
import SecondaryButton from './components/SecondaryButton';
import { Link } from 'react-router-dom';

export function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const signup = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
        }
        catch(error) {
            console.log(error)
            setError("Failed to create an account")
        }
        setLoading(false)
    }

  return (
    <SignupStyled>
        <GlobalStyle />
        <InnerLayout>
        <center className='container'>
            <Card>
                <Card.Body>
                    <div className='title'>Create Your Account</div>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <br />
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                            <Form.Control className='input' type='email' placeholder='Email' ref={emailRef} required />
                            </Form.Group><br />
                        <Form.Group id='password'>
                            <Form.Control className='input' type='password' placeholder='Password' ref={passwordRef} required />
                            </Form.Group><br />
                        <Form.Group id='password-confirm'>
                            <Form.Control className='input' type='password' placeholder='Confirm Password' ref={passwordConfirmRef} required />
                            </Form.Group><br />
                        <h1></h1>
                        <Button disabled={loading} className = 'w-100' type='submit'>
                            Sign Up
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <br />
            <div className='text-center mt-2'>
                Already have an account?
                <br />
                <Link to="/login">
                        <SecondaryButton name='Login'></SecondaryButton>
                </Link>
            </div>
        </center>
        </InnerLayout>
    </SignupStyled>
  )
}

const SignupStyled = styled.div`
    color: white;
    font: 'Lato', sans-serif;
    .container {
        height: 200px;
        position: relative;
    }
    .title {
        font-size: 64px;
        padding: 0rem 5rem;
    }

    .input {
        height: 30px;
        font-size: 16pt;
        border-radius: 10px;
    }

    .w-100 {
        background-color: rgb(115,180,235);
        padding: 0.75rem 0.75rem;
        font-family: 'Lato', sans-serif;
        font-size: 12px;
        border-radius: 10px;
    }
`;