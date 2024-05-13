import { useContext, useEffect } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const LogIn = () => {

    const loginUserData=useLoaderData()

    const {logInUser,setUser,user,setLoggedUser,setLoading,loading,createGoogleUser}=useContext(AuthContext)
   console.log('user',user?.email)
   const navigate=useNavigate

   


//fetch user data
 const loginUserInfo=loginUserData.find(data=>data?.email===user?.email)
 if(loginUserInfo){
    localStorage.setItem('loginUserinfo',JSON.stringify(loginUserInfo))
 }
console.log('tut tut----',loginUserInfo)





 //fatch user data using axios

 


    const handleLogIn=e=>{
        e.preventDefault()
        const common=e.target
         
        const email=common.email.value 
        const password=common.password.value
        console.log(email,password)

        logInUser(email,password)
        .then(result=>{
            console.log(result.user)
            if(result.user){
                setUser(result.user)
            //jwt -----------------
            axios.post('http://localhost:5014/jwt',{email:result?.user?.email},{withCredentials:true})
            .then(res=>{
                console.log('dataaaaaaaaaaaaaaaaaa',res.data)
            })



                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Login is Successful",
                    showConfirmButton: false,
                    timer: 1500
                  });

            }
        })
        .catch(error=>{
            console.error(error)
        })

    

    }

    // useEffect(()=>{
    //     setLoading(true)
    //     axios.get('http://localhost:5014/user')
    //     .then(data=>{
    //          const loggedUser=data.data.find(logged=>logged.email===user?.email)
            
    //               setLoggedUser(loggedUser)
    //               if(loggedUser){
    //                 localStorage.setItem('loggedUserName',loggedUser.name)
    //                 localStorage.setItem('loggedUserphoto',loggedUser.photo)
    //                 localStorage.setItem('loggedUserphoto',JSON.stringify(loggedUser))
    //                 console.log('if',loggedUser)
    //             }
    
            
            
    //         console.log('userinfo',loggedUser)
    //     })
    // },[])

  const handleGoogleSignIn=()=>{

    createGoogleUser()
    .then(result=>{
        console.log(result.user)
        setUser(result.user)
    })
  }
    
        
    


    return (
        <div >
            <div className="flex flex-col justify-center items-center   p-6 md:p-10 lg:p-16 bg-[#FEF6FF] rounded-md ">
                <h1 className="pb-8 text-3xl font-bold opacity-80">Login Now</h1>
                <form onSubmit={handleLogIn}  className="flex flex-col space-y-6 bg-[#FEF6FF] p-4 md:p-8 lg:p-10 rounded-md w-full md:w-[550px] lg:w-[600px]" >
                <input type="email" name="email" placeholder="Email" className="input input-bordered w-full " />
                    <input type="password" name="password" placeholder="password" className="input input-bordered w-full " />
                    <input type="submit" value="LogIn"  className="btn btn-block bg-[#B7A2D7]" />
                    <p className="text-center">Not registered? <Link to="/signUp"><span className="text-[#8255EF] font-bold"> Sign up</span></Link></p>
                    <p className="text-center">Or</p>
                    <div className="flex justify-center">
                        <button onClick={handleGoogleSignIn}  className="pr-4 text-2xl"><FaGoogle /></button>
                        <button className="pl-4 text-2xl"><FaGithub /></button>
                    
                    </div>
                </form>
            </div>
            
        </div>
    );
};

export default LogIn;