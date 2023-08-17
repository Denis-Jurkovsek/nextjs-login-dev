import type { AxiosError } from 'axios'
import { useQuery } from 'react-query'

// @ts-ignore
import { bfnAPI } from '../api'

interface IAccessResponse {}

export function useSynchronize() {
  return useQuery<IAccessResponse, AxiosError>('access-synchronize', () => bfnAPI.post('/access/synchronize'))
}
