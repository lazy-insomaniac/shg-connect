import React from 'react'

const Header = () => {
  return (
    <div className ="inline-block" style = {{marginBottom : '10px'}}>
      <img style={{width: '80px', height : '60px', borderRadius: 12 , marginLeft:'10px' ,marginRight:'30px'}} src={require('./images/logo1.jpg')}/>
      <img style={{width: '80px', height : '60px', borderRadius: 12}} src={require('./images/iitr_logo.jpg')}/>
      
    </div>
  )
}

export default Header;
