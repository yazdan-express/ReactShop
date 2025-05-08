import React, { createContext, useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import styles from './index.module.css'

export const Fav = createContext();


const Layout = ({children , setFilteredProducts}) => {
  const [products, setProducts] = useState([]);
  const [favouritedCount, setFavouritedCount] = useState(0);
  const [favouritedProducts, setFavouritedProducts] = useState([]);
  return (
    <div className={styles.appContainer}>
    <Fav.Provider value={{products , setProducts , favouritedCount , setFavouritedCount , favouritedProducts , setFavouritedProducts}}> 
      <header className={styles.pos}>
        <Header setFilteredProducts={setFilteredProducts}/>
      </header>
      <main>
        {children}
      </main>
    </Fav.Provider>  
    <footer>
      <Footer/>
    </footer>
    </div>
  )
}

export default Layout
