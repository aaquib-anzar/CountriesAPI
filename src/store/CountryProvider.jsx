import {useState } from 'react'
import CountryContext from './CountryContext'


export function CountryProvider({ children }) {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem('isDarkMode'))
  )
 
  return (
    <CountryContext.Provider value={[isDark, setIsDark]}>
      {children}
    </CountryContext.Provider>
  )
}