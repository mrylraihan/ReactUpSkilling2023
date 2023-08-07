import React from 'react'
import style from './Test2.module.css'
function Test2() {
  return (
    <div className='app'>
          <h1>Test2</h1>
          <div className={style.container}>
            <div className={style.wrapping}>
              <div className={style.items}>4</div>
              <div className={style.items}>5</div>
              <div className={style.items}>6</div>
              <div className={style.items}>7</div>
            </div>
              <div className={style.item}>2</div>
              {/* <div className={style.item}>3</div>
              <div className={style.item}>4</div>
              <div className={style.item}>5</div>
              <div className={style.item}>6</div>
              <div className={style.item}>7</div>
              <div className={style.item}>8</div>
              <div className={style.item}>9</div> */}
          </div>
    </div>
  )
}

export default Test2