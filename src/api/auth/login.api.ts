// // @ts-ignore
//  import { bfnAPI } from '../api'

// export interface ILoginResponse {
//   success: boolean
// }



import type { AxiosError } from 'axios'
import { useQuery } from 'react-query'
import bfnAPI from '../api'



// @ts-ignore


export interface ILoginResponse {}

// export async function useLogin(username: string, password: string): Promise<ILoginResponse> {
//   try {
//     const response = await bfnAPI.post('login', { username, password })
//     return response.data
//   } catch (error) {
//     throw  new Error('An error during login')
//   }
// }
export async function useLogin(username: string, password: string)  {
  try{
    let response = await bfnAPI.post('login',{
      username: username,
      password: password,
    });
    
console.log(response)
return response.data;
  
  }catch (error){
      console.log(error)
  }
}

//   // console.log(response.data)

//  return useQuery<ILoginResponse, AxiosError>('access-login', () => bfnAPI.post('/login', {username,password}))
// } 
