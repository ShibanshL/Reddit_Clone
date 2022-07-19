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
import {useStore} from './State'
import Submit from './Pages/Submit';
import SignUp from './Authenticate/SignUp';
const reactQuery = new QueryClient()


function App() {
  
  const num = useStore((state:any) => state.num)
  const setNum = useStore((state:any) => state.setNum)


  return (
   <>
      <QueryClientProvider client={reactQuery}>
        <Router>
          <AppShell
            padding={0}
            styles={(theme) => ({
              main: {background:'black',backgroundSize:'cover' },
            })}>
              <Container size={1920} p='0' m='0' style={{background:'black',overflow:'hidden'}} fluid>
                {/* {window.location.href !='http://localhost:3000/Login' && window.location.href != 'http://localhost:3000/Signup'?<NavToolBar/>: ''} */}
                <NavToolBar/>
                {num%2!=0?
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
                          <Route path='/Submit' element={<Submit />} />
                        </Routes>
                    </Grid.Col>
                  </Grid>
                :
                  <Grid>
                    <Grid.Col p='10px 300px' style={{}} span={12}>
                        <Routes>
                          <Route path='/' element={<Main />} />
                          <Route path='/Meme' element={<Meme />} />
                          <Route path='/News' element={<News />} />
                          <Route path='/Sports' element={<Sports />} />
                          <Route path='/Submit' element={<Submit />} />
                        </Routes>
                    </Grid.Col>
                </Grid>
                }
              </Container>
              <Routes>
                <Route path='/Login' element={<Login />} />
                <Route path='/Signup' element={<SignUp />} />
              </Routes>
          </AppShell>
        </Router>
   </QueryClientProvider>
   </>
  )
}

export default App
