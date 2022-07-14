import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { AppShell, Center, Container,Group,Grid, Navbar} from '@mantine/core';
import {QueryClientProvider, QueryClient} from 'react-query'
import NavToolBar from './Component/NavToolBar';
import Main from './Component/Main';
import Login from './Authenticate/Login';
import News from './Pages/News';
import Meme from './Pages/Meme';
import Sports from './Pages/Sports';
import Sidebar from './Component/Sidebar';
const reactQuery = new QueryClient()


function App() {

  return (
   <>
      <QueryClientProvider client={reactQuery}>
        <Router>
          <AppShell
            padding={0}
            styles={(theme) => ({
              main: {background:'black',backgroundSize:'cover', overflowY:'auto' },
            })}>
              <Container size={1920} p='0' m='0' style={{background:'black'}} fluid>
                <NavToolBar/>
                <Grid>
                  <Grid.Col span={2}>
                    <Sidebar />
                  </Grid.Col>
                  <Grid.Col p='10px 100px' style={{}} span={9}>
                      <Routes>
                        <Route path='/' element={<Main />} />
                        <Route path='/Login' element={<Login />} />
                        <Route path='/Meme' element={<Meme />} />
                        <Route path='/News' element={<News />} />
                        <Route path='/Sports' element={<Sports />} />
                      </Routes>
                  </Grid.Col>
                </Grid>
              </Container>
          </AppShell>
        </Router>
   </QueryClientProvider>
   </>
  )
}

export default App
