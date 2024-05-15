import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/codezen.png"
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Navbar = () => {

 const {user,logOut}=useContext(AuthContext)
    const navLink=<>

                     <li><NavLink to="/">Home</NavLink></li>
                     <li><NavLink to="/availableFoods">Available Foods</NavLink></li>
                     <li><NavLink to="/addFood">Add Food</NavLink></li>
                     <li><NavLink to="/manageMyFood" >Manage My Food</NavLink></li>
                     <li><NavLink to="/myFoodRequest">My Food Request</NavLink></li>
    
                  </>
        
    const loggedUser=localStorage.getItem("loginUserinfo")
    if(loggedUser){
        console.log(JSON.parse(loggedUser))
    }
    


    return (
        <div>
            <div className="navbar bg-[#00006B] text-white font-bold p-4 rounded-t-md">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-2">
        {navLink}
      </ul>
    </div>
    <div>
        <Link to="/">
        <div className="space-y-1 font-bold">
            <img className="w-20 rounded-md" src={logo} alt="" />
            <h2 className="text-lg">FoodZen</h2>
        </div>
        </Link>

    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-4">
      {navLink}
    </ul>
  </div>
  <div className="navbar-end">

   {user? <><img className="w-12 w-12 rounded-full" src={user?.photoURL} alt="" /><button onClick={logOut} className="pl-2">Log Out</button></>:<> <div className="flex gap-4">
        
        <Link to="/login"><button>LogIn</button></Link>
        <Link to="/signUp"><button>Sign Up</button></Link>
         
    </div></>}
    
  </div>
</div>
        </div>
    );
};

export default Navbar;