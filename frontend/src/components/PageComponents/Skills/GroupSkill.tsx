import React from 'react'
import { Badge } from "../../ui/badge";
const darkColors = ["bg-sky-800","bg-rose-800","bg-violet-800","bg-orange-800","bg-green-800","bg-yellow-800","bg-indigo-800","bg-pink-800","bg-purple-800","bg-cyan-800","bg-teal-800","bg-lime-800","bg-fuchsia-800","bg-amber-800","bg-emerald-800","bg-gray-800","bg-blue-800","bg-red-800"]
const lightColors = ["bg-sky-200","bg-rose-200","bg-violet-200","bg-orange-200","bg-green-200","bg-yellow-200","bg-indigo-200","bg-pink-200","bg-purple-200","bg-cyan-200","bg-teal-200","bg-lime-200","bg-fuchsia-200","bg-amber-200","bg-emerald-200","bg-gray-200","bg-blue-200","bg-red-200"]

const getrandomDarkColor = () => {
    return darkColors[Math.floor(Math.random() * darkColors.length)]
}

const getrandomLightColor = () => {
    return lightColors[Math.floor(Math.random() * lightColors.length)]
}

const GroupSkill = ({title , skillArray}:{title:string , skillArray:any}) => {
  return (
    <div className=' dark:hover:bg-[#080808] rounded-[12px] p-6 flex flex-col items-center   shadow-border'>
        <h4>
            {title}
        </h4>
        <div className="grid grid-cols-3 gap-4 mt-10 "> 
            {skillArray.map((skill: any) => (
                <Badge key={skill} className={`ml-1 place-content-center text-center p-2 bg-opacity-60 dark:bg-opacity-20 font-light dark:hover:bg-black hover:text-white text-black ${getrandomLightColor()} dark:text-gray-300 dark:${getrandomDarkColor()}`}> {skill} </Badge>
            ))}
            </div>
    </div>
  )
}

export default GroupSkill