
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";


const FeaturedFood = () => {
    
    // const {foods}=useContext(AuthContext)


    const {isPending, data:allFoods}=useQuery({
        queryKey:["myFoodRequest"],
        queryFn:async()=>{
            const res=await fetch('http://localhost:5014/food');
            return res.json();
        }
    })

    if(isPending){
        return <span className="loading loading-spinner text-primary"></span>
    }
    
    const sortedFoods=allFoods.sort((a,b)=>b.foodQuantity-a.foodQuantity)
    const foods=sortedFoods.slice(0,6)
    //console.log('foooooooo',foods)
    


    

    return (
        <div className="mx-2">
           
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center text-[#808000] mt-8 md:mt-14 lg:mt-20 mb-6 md:mb-8 lg:mb-12">Featured Foods</h2>
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-16">
               
            {foods?.map((food)=><>


            <div className="flex gap-3 shadow-xl p-2 hover:scale-y-105 transition duration-500">
                {/* Image--- */}
                <div className="w-[50%] max-h-[250px] ">
                    <img className="object-cover w-full h-full rounded-sm" src={food?.foodImage} alt="" />
                </div>
                {/* Food Info */}
                <div className="w-[50%]">
                <h2 className="card-title">{food.foodName}</h2>
                <h4><span className="font-bold">Donner:</span> {food.donatorName}</h4>
                <h4><span className="font-bold">Quantity:</span> {food.foodQuantity}</h4>
                 <h4><span className="font-bold">Pickup Location:</span> {food.pickupLocation}</h4>
                 <h4><span className="font-bold">Exp date:</span> {food.expireDate}</h4>
                 
                 {/* View Detail button that directed ViewDetail page */}
                 <Link to={`/viewDetail/${food._id}`} ><button className="bg-[#e2725b] px-2 py-1 rounded-md text-white font-semibold">View detail</button></Link>
                </div>
            </div>


                
            


            </>)}
            
        </div>

        {/* Show all button that derected to availableFood page */}

        <div className="flex justify-center">
            <Link to="/availableFoods"><button className="py-2 px-4 rounded-md mb-20 bg-[#e2725b]">Show all</button></Link>
            
        </div>
            
        </div>
    );
};

export default FeaturedFood;