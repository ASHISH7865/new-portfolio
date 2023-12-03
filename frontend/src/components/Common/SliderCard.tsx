import React from 'react'
import Image from 'next/image'

const SliderCard = () => {
  return (
    <div className='transform overflow-hidden bg-white  duration-200 hover:scale-105 cursor-pointer rounded-2xl p-5 shadow-2xl'>
        <Image src={"https://plus.unsplash.com/premium_photo-1701127871438-af582cdd8c55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"} alt={"img"} width={500} height={500} />
    </div>
  )
}

export default SliderCard