import './App.css'
import Header from './components/Header/Header'
import Courses from './components/Courses/Courses'
import Cart from './components/Cart/Cart'
import { useState } from 'react'

function App() {

  const [cart, setCart] = useState([])
  const [totalCredit, setTotalCredit] = useState(0)
  const [remainingHour, setRemainingHour] = useState(20)
  const [totalPrice, setTotalPrice] = useState(0)

  const selectBtnHandler = (course, credit, price) => {
    const newCart = [...cart, course]
    const newCredit = totalCredit + credit
    const newRemainingHour = remainingHour - credit
    const newTotalPrice = totalPrice + price

    if (newCredit <= 20) {
      setTotalCredit(newCredit)
      setRemainingHour(newRemainingHour)
      setCart(newCart)
      setTotalPrice(newTotalPrice)
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
