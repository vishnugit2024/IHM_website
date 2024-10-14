import React from 'react'
import Contact from '../../Components/GetinTouch/Contact'
import Brand from '../../Components/Brands/Brand'

const ContactUS = () => {
  return (
   <>
<section>
        <div className='container-fluid'>
         
            <div className="heroimg2">
              <div className="overlay2">
                <h2>CONTACT US</h2>
              
            </div>
          </div>
        </div>
      </section>

      <section>
      <Contact />
      </section>
      <section>
      <Brand />
      </section>

   </>
  )
}

export default ContactUS