import { Link } from "react-router-dom"

function Login()
{
    return(
        <div className="bg-black p-10">
        <div className="bg-white p-10 border rounded-md">

            <h1 className="font-medium text-3xl">Hey, Hi</h1>
             <p>I help you manage you activity after you login</p>
<div className="flex flex-col gap-2 my-2">
    <input type="text"  className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="username"/>
</div>
<div className="flex flex-col gap-2 my-2">
    <input type="text"  className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="password"/>
</div>
<div className="flex flex-col gap-2 my-2">
   

    <button className="bg-[#8272DA] w-24 p-1 rounded-md"> Login</button>

    <p>Don't have an Account? <Link to={"/signup"} className="underline">Sign up</Link> </p>
</div>
        </div>
     </div>
    )
}

export default Login