import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Courses from './components/Courses/Courses'
import Cart from './components/Cart/Cart'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // state declaration 
  const [cart, setCart] = useState([])
  const [totalCredit, setTotalCredit] = useState(0)
  const [remainingHour, setRemainingHour] = useState(20)
  const [totalPrice, setTotalPrice] = useState(0)


  const selectBtnHandler = (course, credit, price) => {
    // make calculation 
    const newCredit = totalCredit + credit
    const newRemainingHour = remainingHour - credit
    const newTotalPrice = totalPrice + price

    // toast functionalities 
    const creditLimitCheck = () => toast("You have remaining very less credit hour limit!");
    const duplicateCheck = () => toast("You have already add this course in your cart!");

    if (!cart.includes(course)) {
      const newCart = [...cart, course]
      setCart(newCart)

      if (newCredit <= 20) {
        setTotalCredit(newCredit)
        setRemainingHour(newRemainingHour)
        setTotalPrice(newTotalPrice)
      } else {
        creditLimitCheck()
      }
    } else {
      duplicateCheck()
    }
  }


  return (
    <>
      <Header></Header>
      <main className='w-11/12 mx-auto md:flex gap-6'>
        <div className='w-3/4'>
          <Courses
            selectBtnHandler={selectBtnHandler}
          ></Courses>
          <ToastContainer />
        </div>
        <div className='w-1/4'>
          <Cart
            cart={cart}
            totalCredit={totalCredit}
            remainingHour={remainingHour}
            totalPrice={totalPrice}
          ></Cart>
        </div>
      </main>

    </>
  )
}

export default App
