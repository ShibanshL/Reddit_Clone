import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { AppShell, Center, Container,Group, Navbar} from '@mantine/core';
import {QueryClientProvider, QueryClient} from 'react-query'
import NavToolBar from './Component/NavToolBar';
import Main from './Component/Main';
const reactQuery = new QueryClient()


function App() {

  return (
   <>
      <QueryClientProvider client={reactQuery}>
        <AppShell
          padding={0}
          styles={(theme) => ({
            main: {minHeight:'100vh', width:'100vw',background:'black',backgroundSize:'cover', overflowY:'auto' },
          })}>
            <Container size={1920} p='0' m='0' style={{background:'yellow'}} fluid>
               <NavToolBar />
               <Main />
            </Container>
        </AppShell>
   </QueryClientProvider>
   </>
  )
}

export default App
