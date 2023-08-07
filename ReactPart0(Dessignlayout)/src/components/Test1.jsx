import React from 'react'
import style from './Test1.module.css'
function Test1() {
  return (
    <div>
          <h1>Test1</h1>
          <div>
            <ul className={style.navContainer}>
                <li>a</li>
                <li>a</li>
                <li>a</li>
            </ul>
          </div>
    </div>
  )
}

export default Test1