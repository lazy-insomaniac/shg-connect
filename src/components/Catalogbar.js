import React from 'react'

const Catalogbar = () => {
  return (
    <div  className='flex items justify-between ' style={{ height :'80px' ,background: 'rgba(93.21, 86.42, 143.64, 0.40)', borderRadius: 9}}>
      <a  href ='/' className ='items justify-centers text-light '>
     <img src= { require('./images/food-transformed.png') }    style ={{ height : '40px',width :'60px', objectFit: 'cover' ,margin:'10px 40px' }}/>
      EATABLES </a>
      <a  href ='/' className ='items justify-centers text-light '>
     <img src= { require('./images/WIP.png') }    style ={{ width :'60px', objectFit: 'cover' ,margin:'10px 40px' }}/>
      HANDICRAFTS </a>
      <a  href ='/' className ='items justify-centers text-light '>
     <img src= { require('./images/boot.png') }    style ={{ height : '40px',width :'60px', objectFit: 'cover' ,margin:'10px 40px' }}/>
      FASHION </a>
      <a  href ='/' className ='items justify-centers text-light '>
     <img src= { require('./images/Star.png') }    style ={{ height : '40px',width :'60px', objectFit: 'cover' ,margin:'10px 40px' }}/>
      OTHERS </a>
      <a  href ='/' className ='items justify-centers text-light '>
     <img src= { require('./images/feedback.png') }    style ={{ height : '40px',width :'60px', objectFit: 'cover' ,margin:'10px 40px' }}/>
      FEEDBACK </a>

    </div>


  )
}

export default Catalogbar
