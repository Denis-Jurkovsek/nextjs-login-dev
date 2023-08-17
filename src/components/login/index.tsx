import { Button, Input, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'
import type { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'

import { useLogin } from '../../api/auth/login.api'
import { Flex } from '../styles/flex'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const router = useRouter()

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrorMessage('')

    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const response = useLogin(username, password)
      if (response !== undefined ) {
        router.push('/')
      } else {
        setErrorMessage('Invalid username or password')
      }
    } catch (error) {
      setErrorMessage('An error occurred during login')
    }
  }
  // const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   if (username === 'test' && password === 'test') {
  //     router.push('/')
  //   } else {
  //     setErrorMessage('Invalid email or password')
  //   }
  // }

  return (
    <Flex
      css={{
        gap: '$8',
        mt: '$20'
      }}
      direction={'column'}
      align={'center'}
    >
      <Text h3>Login Page</Text>
      <form onSubmit={handleFormSubmit}>
        <Flex
          css={{
            gap: '$8',
            mb: '$8'
          }}
          direction={'column'}
        >
          <div>
            <Input
              label='Username'
              required
              clearable
              bordered
              size='lg'
              width='350px'
              placeholder='Username'
              value={username}
              onChange={e => handleUsernameChange(e as ChangeEvent<HTMLInputElement>)}
            />
          </div>
          <div>
            <Input.Password
              label='Password'
              required
              clearable
              bordered
              size='lg'
              width='350px'
              placeholder='Password'
              value={password}
              onChange={e => handlePasswordChange(e as ChangeEvent<HTMLInputElement>)}
            />
          </div>
        </Flex>
        {errorMessage && <Text color='error'>{errorMessage}</Text>}
        <Button auto type='submit'>
          Login
        </Button>
      </form>
    </Flex>
  )
}

export default Login
