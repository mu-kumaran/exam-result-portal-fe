
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ResultPage from './components/ResultPage'
import ErrorPage from './components/ErrorPage'
import SharePage from './components/SharePage'
import { Helmet } from 'react-helmet-async'

const App = () => {
    
  return (
    <div>
      <Helmet>
        <title>XXXXX Board Results</title>
        <meta name="description" content="View the board exam results for March 202X" />
      </Helmet>
        
        <Routes>
            <Route element={<Home/>} path='/'></Route>
            <Route element={<ResultPage/>} path='/result'></Route>
            <Route element={<ErrorPage/>} path='/error'></Route>
            <Route element={<SharePage/>} path='/share'></Route>
        </Routes>
    </div>
  )
}

export default App
