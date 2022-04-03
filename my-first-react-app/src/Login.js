import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import Options from './components/Options';
import GlobalStyle from './GlobalStyle'
import { InnerLayout } from './styles/Layouts';
import { useAuth } from './AuthContext'
import PrimaryButton from './components/PrimaryButton';
import { Link } from 'react-router-dom';
import { Form, Button, Card, Alert } from 'react-bootstrap'

function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const signup = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
      e.preventDefault()

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
    <LoginStyled>
      <GlobalStyle />
      <InnerLayout>
      <ul className='login-page'>
        <li>
          <Card className='login-field'>
            <center>
              <div className='title'> Welcome to </div> <div className='title'> Cold Case Catcher </div>
              <br />
              <Card.Body>
                  <h2 className='text-center mb-4'></h2>
                  {error && <Alert variant="danger">{error}</Alert>}
                  <Form onSubmit={handleSubmit}>
                      <Form.Group id='email'>
                          <Form.Control className='input' placeholder='Email' type='email' ref={emailRef} required />
                          </Form.Group>
                          <br />
                      <Form.Group id='password'>
                          <Form.Control className='input' placeholder='Password' type='password' ref={passwordRef} required />
                          </Form.Group>
                          <br />
                      <h1></h1>
                      <Button disabled={loading} className = 'w-100' type='submit'>
                          Log In
                      </Button>
                  </Form>
              </Card.Body>
            </center>
          </Card>
        </li>

        <li><Card className='vl'></Card></li>

        <li>
          <Card className='options-box'>
            <center>
            <center className='text'>Don't have an account?</center>
            <br />
              <Link to="/signup">
                <PrimaryButton name='Sign Up'></PrimaryButton>
              </Link>
            </center>
          </Card>
        </li>
        
      </ul>
      </InnerLayout>
    </LoginStyled>
  )
}

const LoginStyled = styled.header`
  .login-page {
    display: flex;
    justify-content: space-between;
    width: 90%;
    height: 200px;
    position: absolute;
    top: 20%;
  }

  .login-field {
      margin: 0;
      position: relative;
      top: 10%;
      -ms-transform: translateX(10%);
      transform: translateX(10%);
  }

  .title {
    font: 'Lato', sans-serif;
    font-size: 64px;
    color: white;
    padding: 0rem 5rem;
  }

  .input {
    height: 30px;
    font-size: 16pt;
    border-radius: 10px;
  }

  .w-100 {
    background-color: var(--white);
    padding: 0.75rem 0.75rem;
    font-family: 'Lato', sans-serif;
    font-size: 12px;
    border-radius: 10px;
  }

  .vl {
    border-left: 1px solid gray;
    height: 500px;
    position: relative;
    transform: translate(-50%, -15%);
  }

  .options-box {
    transform: translateY(100%);
    .text {
      color: white;
    }
  }
`;

export default Login