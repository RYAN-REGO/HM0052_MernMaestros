import React, { useState } from 'react'
import '@mantine/core/styles.css';
import { Burger, MantineProvider } from '@mantine/core';
import { Sidebar } from './components/Sidebar/Sidebar';
import { useDisclosure } from '@mantine/hooks';
// import Card from './components/Card/Card';
import Feed from './components/Feed/Feed';
import {Routes} from 'react-router-dom';
import { Route} from 'react-router';
import MentorDashboard from './components/MentorDashboard/MentorDashboard';

const App = () => {
  const [opened, { toggle }] = useDisclosure();
  console.log(toggle,opened)

  return (
    <MantineProvider>
      <div className='md:hidden'>
        <Burger opened={opened} onClick={toggle} className='p-4' aria-label="Toggle navigation" />
        {opened===true && <div className='absolute z-50 bg-white top-0'><Sidebar toggle={toggle}/></div>}
      </div>
      <div className='flex flex-row'>
        <div className='hidden md:flex flex-row'>
         <Sidebar toggle={toggle}/>
        </div>
        {/* all routes goes here */}
        <div className='p-4 w-full'>   
            <Routes>
              <Route path='/' element={<MentorDashboard/>}/>
            </Routes>
          {/* <Card/> */}
          {/* <Feed/> */}
        </div>
      </div>
    </MantineProvider>
  )
}

export default App
