import React, { useEffect, useRef } from 'react'
import user from '../assets/user.jpg'
import Typed from 'typed.js'


function Home() {
  const animateRef = useRef('null');

  useEffect(()=>{
    const typed = new Typed(animateRef.current,{
      strings : ["Mayur Asati", "A Frontend Developer"],
      typeSpeed:120,
      backSpeed:110,
      loop:true
    })

    console.log(animateRef)
    return () => {
      typed.destroy()
    }
  },[])
  
  return (
    <div className='home-section'>
        <div className="personal-info">
            <h1>I'm</h1>
            <h1 ref={animateRef}></h1>
        </div>
        <div className="user-image">
          {/* <img src={user} alt="" />  */}
        </div>
    </div>
  )
}

export default Home