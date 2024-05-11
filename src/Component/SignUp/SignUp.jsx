import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";


const SignUp = () => {
    
    const {createUser,user,setLoggedUser,setLoading,setUser,logOut}=useContext(AuthContext)

    console.log(createUser)

    const handleSignUp=e=>{
        e.preventDefault()
        const common=e.target
        const name=common.name.value
        const photo=common.photo.value 
        const email=common.email.value 
        const password=common.password.value
        console.log(name,photo,email,password)

        createUser(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error)
        })

         // Post operation
        const user={email,password,name,photo}

         axios.post('http://localhost:5014/user',user)
         .then(data=>{
             console.log(data.data)})
             
         .catch(error=>{
             console.error(error.message)
         })

         
         

    }

    logOut()

    

    
    return (
        <div >
            <div className="flex flex-col justify-center items-center   p-6 md:p-10 lg:p-16 bg-[#FEF6FF] rounded-md ">
                <h1 className="pb-8 text-3xl font-bold opacity-80">Sign up Now</h1>
                <form onSubmit={handleSignUp} className="flex flex-col space-y-6 bg-[#FEF6FF] p-4 md:p-8 lg:p-10 rounded-md w-full md:w-[550px] lg:w-[600px]" >
                    <input type="text" name="name" placeholder="User Name" className="input input-bordered  " />
                    <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered w-full " />
                    <input type="email" name="email" placeholder="Email" className="input input-bordered w-full  " required />
                    <input type="password" name="password" placeholder="password" className="input input-bordered w-full  " required />
                    <input  type="submit" value="Sign Up"  className="btn btn-block bg-[#B7A2D7]" />
                    <p>Already Sign up? <Link to="/logIn"><span className="text-[#8255EF] font-bold"> LogIn</span></Link></p>
                </form>
            </div>
            
        </div>
    );
};

export default SignUp;