import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";


const ManageMyFood = () => {

    const {user}=useContext(AuthContext)

    

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

       axios.delete(`http://localhost:5014/food/${id}`)
      .then(res=>{
        console.log('dataaa',res.data)
      })
            
    }





    return (
        <div className=" ">
                <div className=" mx-auto overflow-x-auto max-w-[1000px] py-6 lg:py-12 ">
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
        <td><Link to="/update"><button className="btn btn-info">Update</button></Link></td>
      </tr>
      


        </>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageMyFood;