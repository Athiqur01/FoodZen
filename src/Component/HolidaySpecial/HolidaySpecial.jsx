import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";


const HolidaySpecial = () => {

    const {user}=useContext(AuthContext)

    const {data:foods}=useQuery({
        queryKey:['holidaySpecial'],
        queryFn:async()=>{
            const res=await fetch(`http://localhost:5014/foods/${user?.email}`,{credentials:'include'});
            return res.json();
        }
    })

    //console.log('fffod',foods)

    return (
        <div>
            <hr />
            <h2 className="text-6xl font-bold text-center mb-10 mt-10 text-[#B7A2D7]">Holiday Specials</h2>
            <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-16">
            {foods?.map((food)=><>


                <div className="card  bg-base-100 shadow-xl text-justify opacity-85 relative">
                <figure className=" ">
                    <div>
                    <div className="px-[250px] py-[150px] " style={{ backgroundImage: `url(${food.foodImage})` }}> 
                        <p className="w-28 h-28  rounded-full  border-2  text-center flex justify-center items-center absolute right-6 top-4 bg-[#F9F871] ">Holiday <br />Special</p>
                    </div>
                    </div>
                </figure>
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
                    <Link to={`/viewDetail/${food._id}`} ><button className="bg-[#B7A2D7] px-4 py-2 rounded-md">View detail</button></Link>
                 
                </div>
                </div>
                 </div>
            


            </>)}
            
        </div>
            </div>
        </div>
    );
};

export default HolidaySpecial;