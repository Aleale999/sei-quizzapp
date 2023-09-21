import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import TakingQuiz from './components/TakingQuiz'
import TakingQuizOneByOne from './components/TakingQuizOneByOne'
import UpdatingQuestion from './components/UpdatingQuestion'
import Landing from './components/Landing'
import Register from './components/Register'
import Login from './components/Home'
import AddQuestionForm from './components/AddQuestionForm'

export default function App() {
  useEffect(() => {
    async function getData() {
      try {
        await axios.get('/')
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  const [token, setToken] = useState()
  const [showAll, setShowAll] = useState(false)

  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='/' element={<Login 
            setToken={setToken} />}/>
          <Route path='/quizzes/:id' element={ showAll ? <TakingQuiz 
            token = { token }
            setShowAll = {setShowAll}
          /> : <TakingQuizOneByOne 
            token = { token }
            setShowAll = {setShowAll}
          />} />
          <Route path='/quizzes/:quizId/questions/:questionId' element= {<UpdatingQuestion 
            token = { token }
          />} />
          <Route path='/register' element={<Register />} />
          <Route path='/landing' element={<Landing />} />
          <Route path='/quizzes/:quizId/questions' element={<AddQuestionForm 
            token = { token }
          />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
