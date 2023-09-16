import './App.css'
import Header from './components/Header/Header'
import Courses from './components/Courses/Courses'

function App() {

  return (
    <>
      <Header></Header>
      <main className='w-11/12 mx-auto md:flex gap-6'>
        <div className='w-3/4'>
          <Courses></Courses>
        </div>
        <div className='w-1/4'>

        </div>
      </main>

    </>
  )
}

export default App
