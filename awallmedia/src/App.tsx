import React, { useState, useEffect } from 'react';
import Starfield from 'react-starfield';
import './App.css'
import Navbar from './components/navigation/Navbar';
import { ChakraUIProvider } from './theme/chakra-ui.provider'
import HomePage from './pages/HomePage';
import { Flex, useColorMode } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogPage from './pages/BlogPage';
import ShopPage from './pages/ShopPage';
import ExplorePage from './pages/ExplorePage';


function App() {

  const darkStar: [number,number,number] = [255,1,1];
  const lightStar: [number,number,number] = [255,255,255];
  const { colorMode } = useColorMode();
  const [starColor, setStarColor] = useState<[number,number,number]>([255,255,255]);

  const getStarColor = (mode: string) => {
    return mode === 'dark' ? lightStar : darkStar;
  };

  useEffect(() => {
    setStarColor(getStarColor(colorMode))
    console.log(colorMode)
  }, [colorMode]);

  return (
    <div className='app'>
      <Starfield
        starCount={5000}
        starColor={[...starColor]}
        speedFactor={0.015}
        backgroundColor="black"
      />
      <Navbar/>
      <Flex 
        padding={'100px 50px'}
        flexDirection={'column'}
        alignItems={'center'}
        w={'100%'}
      >
        <Routes>
          <Route path='/' Component={HomePage}/>
          <Route path='/blog' Component={BlogPage}/>
          <Route path='/explore' Component={ExplorePage}/>
          <Route path='/shop' Component={ShopPage}/>
        </Routes>
      </Flex>
    </div>
  )
}

function WrappedApp() {
  return (
    <ChakraUIProvider>
      <Router>
        <App />
      </Router>
    </ChakraUIProvider>
  );
}

export default WrappedApp 
