import React from 'react'
import Styles from '../../styles/componentcss/Cookies.module.css'
import Link from 'next/link'
import { useState } from 'react'

const GdprPopUp = () => {
  const [hide, setHide] = useState(false);

  const hidePopUp = () => {
    setHide(true)
  }
  return (
    <div className={`${ hide? 'hidden':'block'}`}>
      <div className={ Styles.cookies} style={{left:"20px"}}>
          <div className={Styles.cookiesContainer}>
              <p className={Styles.cookiesDescription}>
                  We use cookies to deliver the best 
                  experience to our website visitors. To learn more, 
                  please read our<Link href="/cookie-policy"><a className={Styles.cookiesAnchor} style={{color:'#fff',fontWeight:"600", textDecoration:"underline"}}>Cookie Policy</a></Link>
              </p>
              <button className={`${Styles.cookiesOkayButton}`} onClick= {hidePopUp}>Got it</button>
          </div>
        </div>
      </div>
    
  )
}

export default GdprPopUp