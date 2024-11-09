import React from "react"
const TaskNumber = () =>{
    return (
        <div className="flex justify-around p-10 ">
            <div className=" bg-green-400 flex flex-col px-6 py-3 rounded-lg w-1/2 m-3"> 
              <span className="text-4xl font-semibold">0</span>
              <span className="text-2xl font-bold">New Task</span>
            </div>
            <div className=" bg-blue-400 flex flex-col px-6 py-3 rounded-lg w-1/2 m-3"> 
              <span className="text-4xl font-semibold">0</span>
              <span className="text-2xl font-bold">New Task</span>
            </div>
            <div className=" bg-red-400 flex flex-col px-6 py-3 rounded-lg w-1/2 m-3"> 
              <span className="text-4xl font-semibold">0</span>
              <span className="text-2xl font-bold">New Task</span>
            </div>
            <div className=" bg-yellow-400 flex flex-col px-6 py-3 rounded-lg w-1/2 m-3"> 
              <span className="text-4xl font-semibold">0</span>
              <span className="text-2xl font-bold">New Task</span>
            </div>
        </div>
    )
}
export default TaskNumber