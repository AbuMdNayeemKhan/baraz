import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import LogoSearchBar from './Components/LogoSearchBar/LogoSearchBar';
import Carousel from './Components/Carousel/Carousel';
import TopBanner from './Components/TopBanner/TopBanner';
import FlashSale from './Components/FlashSale/FlashSale';
import BarazMall from './Components/BarazMall/BarazMall';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <LogoSearchBar></LogoSearchBar>
      <Carousel></Carousel>
      <TopBanner></TopBanner>
      <FlashSale></FlashSale>
      <BarazMall></BarazMall>
    </>
  )
}

export default App
