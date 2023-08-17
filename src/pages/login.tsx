import React from 'react'

import { useLogin } from '../api/auth/login.api'
import Login from '../components/login'

const login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const synchronize = useLogin('', '')
  // console.log(synchronize)

  return <Login />
}

export default login
