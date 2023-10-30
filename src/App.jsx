import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import LogoSearchBar from './Components/LogoSearchBar/LogoSearchBar';
import Carousel from './Components/Carousel/Carousel';
import TopBanner from './Components/TopBanner/TopBanner';
import Products from './Components/Products/Products';
import flashSaleData from './Components/Data/FlashSaleData';
import BarazMall from './Components/BarazMall/BarazMall';
import BarazMallData from './Components/Data/BarazMallData';
BarazMall

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Navbar></Navbar>
      <LogoSearchBar></LogoSearchBar>
      <Carousel></Carousel>
      <TopBanner></TopBanner>
      <Products Products={flashSaleData} title="FLASH SALE" ></Products>
      <Products Products={BarazMallData} title="BARAZ MALL" ></Products>
    </>
  )
}

export default App;