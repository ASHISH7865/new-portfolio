import React from 'react'

const Logo = () => {
  return (
    <div className="flex">
      <div className="flex flex-col ">
        <div className="flex border-2 px-2 self-center ">
          <div className="flex flex-col items-center">
            <span className="text-[20px] font-bold mb-[-4px] ">a</span>
            <span className="text-[20px] font-bold ">i</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[20px] font-bold mb-[-4px] ">s</span>
            <span className="text-[20px] font-bold ">s</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[20px] font-bold mb-[-4px] ">h</span>
            <span className="text-[20px] font-bold ">h</span>
          </div>
        </div>
        <span className="text-xs">DEVELOPER</span>
      </div>
    </div>
  )
}

export default Logo