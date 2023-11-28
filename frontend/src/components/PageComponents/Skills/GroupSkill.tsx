import React from 'react'
import { Badge } from "../../ui/badge";

const GroupSkill = ({title , skillArray}:{title:string , skillArray:any}) => {
  return (
    <div className=' shadow-md dark:bg-[#1a1a1a] rounded-md p-6 flex flex-col items-center '>
        <h4>
            {title}
        </h4>
        <div className="grid grid-cols-3 gap-4 mt-10 ">
            {skillArray.map((skill: any) => (
                <Badge key={skill} className="ml-1 place-content-center p-2"> {skill} </Badge>
            ))}
            </div>
    </div>
  )
}

export default GroupSkill