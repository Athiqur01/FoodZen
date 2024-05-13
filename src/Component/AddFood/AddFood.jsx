import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";


const AddFood = () => {

    const {user}=useContext(AuthContext)


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

        const food={foodName,foodImage,foodQuantity,pickupLocation,expireDate,additionalNotes,donatorEmail,donatorImage,donatorName,foodStatus}

        // Post operation
        axios.post('http://localhost:5014/food',food,{withCredentials:true})
        .then(data=>{
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Food Item has been added successfully",
                showConfirmButton: true,
                timer: 7500
              });
            console.log(data.data)})
        .catch(error=>{
            console.error(error.message)
        })
        
        
    }

    const loginUserInformation=localStorage.getItem('loginUserinfo')
    const info=JSON.parse(loginUserInformation)
    const userName=info.name
    const userPhoto=info.photo
    console.log('put put---',userName,userPhoto)

    //fetch user------
    const {isPending, data:specficUser}=useQuery({
        queryKey:["specficUser"],
        queryFn:async()=>{
            const res=await fetch(`http://localhost:5014/user/${user.email},`,{credentials:"include"});
            return res.json();
        }
    })

    console.log('specfic user',specficUser)






    return (
        <div className='flex flex-col justify-center items-center  rounded-lg bg-[#FEF6FF] p-20' >
            <Helmet><title>CodeZen | Add Food</title></Helmet>
            <h2 className="text-6xl font-bold text-[#B7A2D7]">Add Food Item</h2>
            <div className='bg-[#fedcff] rounded-lg px-10 py-6 mt-12'>
                
                <form onSubmit={handleAddFood}  >
                       {/* inpt first row */}
             <div className=' p-4 flex space-x-8 justify-center'>
               <label className="form-control w-full max-w-xs">
                <div className="label">
                 <span className="label-text text-base font-bold">Food Name</span>
                </div>
                <input type="text" name='foodName' placeholder="Food Name" className="input input-bordered w-full max-w-xs" />
               </label>

               <label className="form-control w-full max-w-xs">
                <div className="label">
                 <span className="label-text text-base font-bold">Food Image</span>
                </div>
                <input type="text" name='foodImage' placeholder="Food Image URL" className="input input-bordered w-full max-w-xs" />
               </label>

              </div>
              {/* inpt 2nd  row */}
             <div className=' p-4 flex space-x-8 justify-center'>
               <label className="form-control w-full max-w-xs">
                <div className="label">
                 <span className="label-text text-base font-bold">Food Quantity</span>
                </div>

                <input type="text" name='foodQuantity' placeholder="Food Quantity" className="input input-bordered w-full max-w-2xl" />
                
               </label>

               <label className="form-control w-full max-w-xs">
                <div className="label">
                 <span className="label-text text-base font-bold">Pickup Location</span>
                </div>
                <input type="text" name='pickupLocation' placeholder="Pickup Location" className="input input-bordered w-full max-w-2xl" />
               </label>

              </div>
              {/* inpt 3rd  row */}
             <div className=' p-4 flex space-x-8 justify-center'>
               <label className="form-control w-full max-w-xs">
                <div className="label">
                 <span className="label-text text-base font-bold">Expire Date</span>
                </div>
                <input type="date" name='expireDate' placeholder="Expire Date" className="input input-bordered w-full max-w-xs" />
               </label>

               <label className="form-control w-full max-w-xs">
                <div className="label">
                 <span className="label-text text-base font-bold">Additional Notes</span>
                </div>
                <input type="text" name='additionalNotes' placeholder="Additional Notes" className="input input-bordered w-full max-w-2xl" />
               </label>

              </div>

              {/* inpt 4rth  row */}
             <div className=' p-4 flex space-x-8 justify-center'>
               <label className="form-control w-full max-w-xs">
                <div className="label">
                 <span className="label-text text-base font-bold">Donator Image</span>
                </div>
                <input type="text" value={userPhoto} name='donatorImage' placeholder="Donator Image" className="input input-bordered w-full max-w-2xl" />
               </label>

               <label className="form-control w-full max-w-xs">
                <div className="label">
                 <span className="label-text text-base font-bold">Donator Name </span>
                </div>
                <input type="text" value={specficUser?.name} name='donatorName'  placeholder="Donator Name " className="input input-bordered w-full max-w-2xl"disabled/>
               </label>

              </div>

              {/* inpt 5th  row */}
             <div className=' p-4 flex space-x-8 justify-center'>
               <label className="form-control w-full max-w-xs">
                <div className="label">
                 <span className="label-text text-base font-bold">Donator Email </span>
                </div>
                <input type="text" name='donatorEmail' placeholder="Donator Email " value={user?.email} className="input input-bordered w-full max-w-xs" disabled/>
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
                <input type="submit"  value="Add" className="btn btn-block bg-[#B7A2D7]" />
               </label>
              </div>


              {/* last row end */}

                </form>
              


            </div>

           

            

        </div>
    );
};

export default AddFood;