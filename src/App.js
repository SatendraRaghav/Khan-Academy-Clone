import { Stack } from '@mui/system'
import React from 'react'
import Header from './Components/Header/Header'
import "./index.css"
import Navbar from './Components/Navbar/Navbar'
import AcedemyWork from './Components/Section/AcedemyWork'
import Teacher from './Components/Section/Teacher'
import JoinAcademy from './Components/Section/JoinAcademy'
import { Support } from '@mui/icons-material'
import Suppoters from './Components/Section/Suppoters'
import Footer from './Components/Footer/Footer'
import "./index.css";

const App = () => { 
  return (
    <div className='App'>
    <Stack spacing={4} >
      <Navbar />
      <Header />
      <AcedemyWork />
      <Teacher />
      <JoinAcademy />
      <Suppoters />
      <Footer />
    </Stack>
    </div>
  )
}

export default App