import React from "react"
const Header =()=>{
    return(
        <div className="bg-gray-700 flex justify-between p-10 w-full">
            <div className="text-2xl font-medium flex flex-col">Hello <span className="text-3xl font-bold">User_Name 👋</span></div>
            <button className="bg-red-500 px-5 rounded-md">Log Out</button>
        </div>
    )
}
export default Header