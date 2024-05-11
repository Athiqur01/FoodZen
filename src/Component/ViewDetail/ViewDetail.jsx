import { useContext } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";


const ViewDetail = () => {
    const{user}=useContext(AuthContext)
    const food=useLoaderData()
    console.log('iddddddd',food)

    const currentDate=new Date()

     
    const handleRequest=()=>{
        
        console.log('ok---------')

        // Post operation
      axios.post('http://localhost:5014/myFoodRequest',food)
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
      
      

   


    return (
        <div className="flex justify-center">
              <div className=" max-w-[1000px] my-16">
            


                <div className="card   bg-base-100 shadow-xl text-justify opacity-85">
                <figure><img className="w-full" src={food.foodImage} alt="Shoes" /></figure>
                <div className="card-body">
                 <h2 className="card-title">{food.foodName}</h2>
                 <div className="flex gap-4">
                    <img className="max-w-12 rounded-md" src={food.donatorImage} alt="" />
                    <h4>{food.donatorName}</h4>
                 </div>
                 <h4><span className="font-bold">Quantity:</span> {food.foodQuantity}</h4>
                 <h4><span className="font-bold">Pickup Location:</span> {food.pickupLocation}</h4>
                 <h4><span className="font-bold">Exp date:</span> {food.expireDate}</h4>
                 <p><span className="font-bold">Note</span> {food.additionalNotes}</p>
                 <div className="card-actions justify-end">

                    {/* View Detail button that directed ViewDetail page */}
                    <Link to={`/viewDetail/${food._id}`} ><button onClick={()=>document.getElementById('my_modal_5').showModal()} className="bg-[#B7A2D7] px-4 py-2 rounded-md">Request</button></Link>
                   
                   
                   {/* modal for request button */}
                    <div className="">
                    <div>
                    
                    <dialog id="my_modal_5" className="modal modal-center max-w-[1000px] px-4 min-w-[1000px]">
                   <div className="modal-box">
                   
                   
                   <div className="modal-action">
                  {/* form start --------------------------------------------*/}
                   <div className='flex flex-col justify-center items-center  rounded-lg bg-[#FEF6FF] ' >
            
            <div className='bg-[#fedcff] rounded-lg px-10 p-6 '>
                
                <form   >
                       {/* inpt first row */}
             <div className=' p-4 flex space-x-8 justify-center'>
               <label className="form-control w-full max-w-xs">
                <div className="label">
                 <span className="label-text text-base font-bold">Food Name</span>
                </div>
                <input type="text" value={food.foodName} placeholder="Food Name" className="input input-bordered w-full max-w-xs pointer-events-none " disabled />
               </label>

               <label className="form-control w-full max-w-xs">
                <div className="label">
                 <span className="label-text text-base font-bold">Food Image</span>
                </div>
                <input type="text" value={food.foodImage} className="input input-bordered w-full max-w-xs" disabled />
               </label>

              </div>
              {/* inpt 2nd  row */}
             <div className=' p-4 flex space-x-8 justify-center'>
               <label className="form-control w-full max-w-xs flex justify-between">
                <div className="label">
                 <span className="label-text text-base font-bold">Food Id</span>
                </div>

                <input type="text" value={food._id} className="input input-bordered w-full max-w-2xl" disabled/>
                
               </label>

               <label className="form-control w-full max-w-xs flex justify-between">
                <div className="label">
                 <span className="label-text text-base font-bold">Pickup Location</span>
                </div>
                <input type="text" value={food.pickupLocation} className="input input-bordered w-full max-w-2xl" disabled/>
               </label>

              </div>
              {/* inpt 3rd  row */}
             <div className=' p-4 flex space-x-8 justify-center'>
               <label className="form-control w-full max-w-xs flex justify-between">
                <div className="label">
                 <span className="label-text text-base font-bold">Expire Date</span>
                </div>
                <input type="date" value={food.expireDate} className="input input-bordered w-full max-w-xs" disabled />
               </label>

               <label className="form-control w-full max-w-xs flex justify-between ">
                <div className="label">
                 <span className="label-text text-base font-bold "> Notes</span>
                </div>
                <input type="text" value={food.additionalNotes} className="input input-bordered w-full max-w-2xl" />
               </label>

              </div>

              {/* inpt 4rth  row */}
             <div className=' p-4 flex space-x-8 justify-center'>
               <label className="form-control w-full max-w-xs flex justify-between">
                <div className="label">
                 <span className="label-text text-base font-bold">Donator Email</span>
                </div>
                <input type="text"  value={food.donatorEmail} className="input input-bordered w-full max-w-2xl" disabled />
               </label>

               <label className="form-control w-full max-w-xs flex justify-between">
                <div className="label">
                 <span className="label-text text-base font-bold">Donator Name </span>
                </div>
                <input type="text"  value={food.donatorName} className="input input-bordered w-full max-w-2xl" disabled />
               </label>

              </div>

              {/* inpt 5th  row */}
             <div className=' p-4 flex space-x-8 justify-center'>
               <label className="form-control w-full max-w-xs flex justify-between">
                <div className="label">
                 <span className="label-text text-base font-bold">User Email </span>
                </div>
                <input type="text" value={user?.email}  className="input input-bordered w-full max-w-xs" disabled />
               </label>

               <label className="form-control w-full max-w-xs flex justify-between">
                <div className="label">
                 <span className="label-text text-base font-bold">Request date</span>
                </div>
                <input type="text"  value={currentDate}  className="input input-bordered w-full max-w-xs" disabled />
               </label>

              </div>

              {/* inpt 6th  row */}
             <div className=' p-4 flex space-x-8 justify-center'>
               <label className="form-control w-full max-w-xs">
               <input type="submit"  value="Request" className="btn btn-block bg-[#B7A2D7]" /> 
               </label>
              </div>


              {/* last row end */}

                </form>
                <button onClick={handleRequest}>hello</button>
              


            </div>

           

            

        </div>

                   
                   </div>
                   </div>
                   </dialog>
                   

                   </div>

                    </div>
                 
                </div>
                </div>
                 </div>
            


            
            
        </div>
        </div>
    );
};

export default ViewDetail;