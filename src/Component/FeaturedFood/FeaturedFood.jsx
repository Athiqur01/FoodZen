
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
        <div>
            
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center text-[#B7A2D7] mt-6">Featured Foods</h2>
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-16">
               
            {foods?.map((food)=><>


                <div className="card w-full bg-base-100 shadow-xl text-justify opacity-85">
                <figure><img className="max-h-[500px] w-full" src={food.foodImage} alt="Shoes" /></figure>
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

        {/* Show all button that derected to availableFood page */}

        <div className="flex justify-center">
            <Link to="/availableFoods"><button className="py-2 px-4 rounded-md mb-20 bg-[#B7A2D7]">Show all</button></Link>
            
        </div>
            
        </div>
    );
};

export default FeaturedFood;