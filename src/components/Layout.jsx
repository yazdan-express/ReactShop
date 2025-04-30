import React, { createContext, useState } from 'react'
import Header from './header'
import Footer from './Footer'

export const FavCount = createContext();


const Layout = ({children}) => {
  const [favouritedCount, setFavouritedCount] = useState(0);
  return (
    <>
    <FavCount.Provider value={{favouritedCount , setFavouritedCount}}> 
      <Header/>
      {children}
    </FavCount.Provider>  
    
      <Footer/>
    </>
  )
}

export default Layout
