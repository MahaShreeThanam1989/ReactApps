import { useState } from 'react'
import bkLogo from './assets/boCaVCG.gif'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './navbar.jsx'
import Footer from './Footer.jsx'

function App() {
  //const [count,name setCount] = useState(0);

  return (
    <>
      <div>
       <Navbar/>
        <a href="https://react.dev" target="_blank">
          <img src={bkLogo} className="logo react" alt="bookshelf logo" />
        </a>
      </div>
      <h1>Book Shelf</h1>
     <div className="card">
        <p>Click on the button:</p>
        <button>
          Number of books:
        </button>
       
      </div>
      <p className="read-the-docs">
        Click on the book logo to learn more
      </p>
      <Footer/>
    </>
  )
}

export default App
