import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion"


const ManageMyFood = () => {

    const {user}=useContext(AuthContext)
    const navigate=useNavigate()

    

    const {data:foods}=useQuery({
        queryKey:['donatorFood'],
        queryFn:async()=>{
            const res=await fetch(`http://localhost:5014/foods/${user?.email}`,{credentials:'include'});
            return res.json();
        }
    })

    console.log('this foods',foods)


    //delete reqest---------------
    const handleDelete=(id)=>{

        console.log(id)

       axios.delete(`http://localhost:5014/food/${id}`,{withCredentials:true})
      .then(res=>{
        console.log('dataaa',res.data)
      })
            
    }
    //update request--------
    const handleUpdate=(id)=>{
        console.log(id)

        navigate(`/update/${id}`)
    }





    return (
        <div className=" ">
            <Helmet><title>CodeZen | Manage my Food</title></Helmet>
                <motion.div className=" mx-auto overflow-x-auto max-w-[1000px] py-6 lg:py-12 "
                key={user.email}
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:1.5}}
                
                >
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th></th>
        <th>Food Name</th>
        <th>Delete </th>
        <th>Update</th>
      </tr>
    </thead>
    <tbody>

      {/* row */}
      {
        foods?.map(food=><>

      <tr>
        <th>1</th>
        <td><img className="max-w-32 rounded-md" src={food.foodImage} alt="" /> </td>
        <td>{food.foodName}</td>
        <td><button onClick={()=>handleDelete(food._id)} className="btn btn-error">Delete</button></td>
        <td><button onClick={()=>handleUpdate(food._id)} className="btn btn-info">Update</button></td>
      </tr>
      


        </>)
      }
      
    </tbody>
  </table>
</motion.div>


        </div>
    );
};

export default ManageMyFood;