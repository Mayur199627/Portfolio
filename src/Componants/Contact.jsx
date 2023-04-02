import React from 'react'

function Contact() {
  return (
    <div id='contact'>
        <h1 className='heading'>Contact me</h1>
        <h2 className='sub-heading'>Feel Free To Contact</h2>

        <form action="https://formspree.io/f/xqkoyyzl" method='POST' id='form'>
          <input type="text" name="Name" id="name" placeholder='Enter your name' required />
          <input type="email" name="Email" id="email" placeholder='Enter your email' required/>
          <input type="text" maxLength='10' placeholder='Enter your contact number' name='Number' id='number' required/>
          <textarea name="Message" id="desc" cols="50" rows="5" placeholder='Type your message' required></textarea>
          <input type="submit" name="Submit" id="submit" value='Send'/>
        </form>
    </div>
  )
}

export default Contact