import React, { createContext, useEffect } from 'react'
export const ThemeContext = createContext()
const defaultTheme = 'light'
const darkTheme = 'dark'
const ThemeProvider = ({children}) => {
    const toogleTheme = ()=>{
        // console.log(document.documentElement)
        const oldTheme = getTheme()
        const newTheme = oldTheme === defaultTheme? darkTheme : defaultTheme
        updateTheme(newTheme,oldTheme)
    }
    useEffect(()=>{
        const theme = getTheme()
        if(!theme) document.documentElement.classList.add(defaultTheme)

        else document.documentElement.classList.add(theme)
    })
  return (
    <ThemeContext.Provider value={{toogleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

const getTheme = ()=>{
    return (
        localStorage.getItem("theme")
    )
}

const updateTheme = (themeToAdd, themeToRemove)=>{
    if(themeToRemove)
        document.documentElement.classList.remove(themeToRemove)
    document.documentElement.classList.add(themeToAdd)
    localStorage.setItem("theme",themeToAdd)

}
