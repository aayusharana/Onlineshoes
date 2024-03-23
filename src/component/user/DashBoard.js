import React from 'react'
import HotProduct from './HotProduct'
import TrendingVender from './TrendingVender'
import Carousel from './Carousel'




const DashBoard = () => {
  return (
    <div>
     <Carousel/>
      <HotProduct/>
    <TrendingVender/>
    </div>
  )
}

export default DashBoard