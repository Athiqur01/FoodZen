import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const Update = () => {

    const {user}=useContext(AuthContext)
    const {id}=useParams()
    console.log('id-------',id)

    
   //get operation-------------
   const {isLoading,data:food}=useQuery({
    queryKey:['update'],
    queryFn:async()=>{
        const res=await fetch(`https://code-zen-all-food-server.vercel.app/food/${id}`,{credentials:'include'});
        return res.json();
    }
})
  

    

console.log('food for update',food)

if(isLoading) return<p>loading--------</p>


    const handleAddFood=e=>{
        e.preventDefault()
        const common=e.target
        const foodName=common.foodName.value 
        const foodImage=common.foodImage.value 
        const foodQuantity=common.foodQuantity.value 
        const pickupLocation=common.pickupLocation.value 
        const expireDate=common.expireDate.value 
        const additionalNotes=common.additionalNotes.value 
        const donatorImage=common.donatorImage.value 
        const donatorName=common.donatorName.value 
        const donatorEmail=common.donatorEmail.value 
        const foodStatus=common.foodStatus.value 
        
        console.log(foodName,foodImage,foodQuantity,pickupLocation,expireDate,additionalNotes,donatorEmail,donatorImage,donatorName,foodStatus)

        const food={foodName,foodImage,foodQuantity,pickupLocation,expireDate,additionalNotes,donatorImage,donatorName,foodStatus}


       // Patch operation
        axios.patch(`https://code-zen-all-food-server.vercel.app/food/${id}`,food,{withCredentials:true})
        .then(data=>{
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Food Item has been updated successfully",
                showConfirmButton: true,
                timer: 7500
              });
            console.log(data.data)})
        .catch(error=>{
            console.error(error.message)
        })
        
        
    }





    return (
        <div>
                <div className='flex flex-col justify-center items-center  rounded-lg bg-[#FEF6FF] p-20' >
            <h2 className="text-6xl font-bold text-[#B7A2D7]">Update Food Info</h2>
            <div className='bg-[#fedcff] rounded-lg px-10 py-6 mt-12'>
                
                <form onSubmit={handleAddFood}  >
                       {/* inpt first row */}
             <div className=' p-4 flex space-x-8 justify-center'>
               <label className="form-control w-full max-w-xs">
                <div className="label">
                 <span className="label-text text-base font-bold">Food Name</span>
                </div>
                <input type="text" name='foodName'defaultValue={food.foodName} placeholder="Food Name" className="input input-bordered w-full max-w-xs" />
               </label>

               <label className="form-control w-full max-w-xs">
                <div className="label">
                 <span className="label-text text-base font-bold">Food Image</span>
                </div>
                <input type="text" name='foodImage' defaultValue={food.foodImage} placeholder="Food Image URL" className="input input-bordered w-full max-w-xs" />
               </label>

              </div>
              {/* inpt 2nd  row */}
             <div className=' p-4 flex space-x-8 justify-center'>
               <label className="form-control w-full max-w-xs">
                <div className="label">
                 <span className="label-text text-base font-bold">Food Quantity</span>
                </div>

                <input type="text" name='foodQuantity'defaultValue={food.foodQuantity} placeholder="Food Quantity" className="input input-bordered w-full max-w-2xl" />
                
               </label>

               <label className="form-control w-full max-w-xs">
                <div className="label">
                 <span className="label-text text-base font-bold">Pickup Location</span>
                </div>
                <input type="text" name='pickupLocation' defaultValue={food.pickupLocation} placeholder="Pickup Location" className="input input-bordered w-full max-w-2xl" />
               </label>

              </div>
              {/* inpt 3rd  row */}
             <div className=' p-4 flex space-x-8 justify-center'>
               <label className="form-control w-full max-w-xs">
                <div className="label">
                 <span className="label-text text-base font-bold">Expire Date</span>
                </div>
                <input type="date" name='expireDate' defaultValue={food.expireDate} placeholder="Expire Date" className="input input-bordered w-full max-w-xs" />
               </label>

               <label className="form-control w-full max-w-xs">
                <div className="label">
                 <span className="label-text text-base font-bold">Additional Notes</span>
                </div>
                <input type="text" name='additionalNotes' defaultValue={food.additionalNotes} placeholder="Additional Notes" className="input input-bordered w-full max-w-2xl" />
               </label>

              </div>

              {/* inpt 4rth  row */}
             <div className=' p-4 flex space-x-8 justify-center'>
               <label className="form-control w-full max-w-xs">
                <div className="label">
                 <span className="label-text text-base font-bold">Donator Image</span>
                </div>
                <input type="text" value={food.userPhoto} name='donatorImage' placeholder="Donator Image" className="input input-bordered w-full max-w-2xl" />
               </label>

               <label className="form-control w-full max-w-xs">
                <div className="label">
                 <span className="label-text text-base font-bold">Donator Name </span>
                </div>
                <input type="text" value={food.userName} name='donatorName' placeholder="Donator Name " className="input input-bordered w-full max-w-2xl" />
               </label>

              </div>

              {/* inpt 5th  row */}
             <div className=' p-4 flex space-x-8 justify-center'>
               <label className="form-control w-full max-w-xs">
                <div className="label">
                 <span className="label-text text-base font-bold">Donator Email </span>
                </div>
                <input type="text" name='donatorEmail' placeholder="Donator Email " value={user?.email} className="input input-bordered w-full max-w-xs" disabled />
               </label>

               <label className="form-control w-full max-w-xs">
                <div className="label">
                 <span className="label-text text-base font-bold">Food Status</span>
                </div>
                <input type="text" name='foodStatus' value="Available" placeholder="Food Status" className="input input-bordered w-full max-w-xs" />
               </label>

              </div>

              {/* inpt 6th  row */}
             <div className=' p-4 flex space-x-8 justify-center'>
               <label className="form-control w-full max-w-xs">
                <input type="submit"  value="Update" className="btn btn-block bg-[#B7A2D7]" />
               </label>
              </div>


              {/* last row end */}

                </form>
              


            </div>

           

            

        </div>
              
        </div>
    );
};

export default Update;