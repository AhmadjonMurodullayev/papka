import React from 'react'

export default function Compont({item}) {
  return (
    <div className='flex gap-3 flex-wrap'>
        <div>
            <img src={item.img} alt="" />
            <h4>{item.title}</h4>
            <h5>{item.disck}</h5>
        </div>
    </div>
  )
}
