import { useState } from "react"

const Login = () =>{

    const [email, SetEmail] = useState("")
    const [password, SetPassword] = useState("")

    const submitHandler = (e) =>{
        e.preventDefault()
    }
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className=" p-4 rounded-md  bg-gray-800">
                <form 
                onSubmit={(e)=>{
                    submitHandler(e)
                    console.log("Email: ",email);
                    console.log("Password: ",password)
                    SetEmail("")
                    SetPassword("")
                }}
                className="flex flex-col justify-around">
                    <input
                    value={email}
                    onChange={(e)=>{
                        SetEmail(e.target.value)
                    }} 
                    required type="email" placeholder="Email" className="bg-gray-200 p-2 outline-none w-80 h-9 rounded-md border-none m-3 text-black" />
                    <input 
                    value={password}
                    onChange={(e)=>{
                        SetPassword(e.target.value)
                    }} 
                    required type="password" placeholder="Password" className="bg-gray-200 p-2 outline-none w-80 h-9 rounded-md border-none m-3 text-black" />
                    <button className="p-2 outline-none w-80 h-9 rounded-md border-none m-3 bg-blue-500">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login