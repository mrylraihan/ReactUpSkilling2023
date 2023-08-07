import React from 'react'
import style from './Test1.module.css'
function Test1() {
  return (
    <div className='app'>
          <h1>Test1</h1>
          <div className={style.container}>
            <div className={style.item}>1</div>
              <div className={style.item}>2</div>
              <div className={style.item}>3</div>
              <div className={style.item}>4</div>
              <div className={style.item}>5</div>
              <div className={style.item}>6</div>
              <div className={style.item}>7</div>
              <div className={style.item}>8</div>
              <div className={style.item}>9</div>
          </div>
    </div>
  )
}

export default Test1