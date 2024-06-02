import { useContext } from 'react'
import CountryContext from '../store/CountryContext'
export const useTheme = () => useContext(CountryContext)