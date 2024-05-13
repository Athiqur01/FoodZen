import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";


const MyFoodRequest = () => {

    const {user}=useContext(AuthContext)
    

    console.log('emaillllllll',user.email)

    const {isPending, data:foods}=useQuery({
        queryKey:["myFoodRequest"],
        queryFn:async()=>{
            const res=await fetch(`http://localhost:5014/myFoodRequest/${user.email}`,{withCredentials:true});
            return res.json();
        }
    })


    if(isPending) return <span className="loading loading-spinner text-primary"></span>

    return (
        <div>
            <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-16">
            {foods?.map(food=><>


                <div className="card  bg-base-100 shadow-xl text-justify opacity-85">
                <figure><img className="max-h-[500px]" src={food.foodImage} alt="Shoes" /></figure>
                <div className="card-body">
                 
                 <h4><span className="font-bold">Donar:</span> {food.donatorName}</h4>
                 <h4><span className="font-bold">Pickup Location: </span> {food.pickupLocation}</h4>
                 <h4><span className="font-bold">Exp date: </span> {food.expireDate}</h4>
                 <p><span className="font-bold">Request date: </span> {food.currentDate}</p>
                 <p><span className="font-bold">Donation Amount :</span> {food.donationAmount}</p>
                 <div className="card-actions justify-end">
                    
                 
                </div>
                </div>
                 </div>
            


            </>)}
            
        </div>
            </div>
            
        </div>
    );
};

export default MyFoodRequest;