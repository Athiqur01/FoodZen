import { useQueries } from "@tanstack/react-query";
import { data } from "autoprefixer";
import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";

const AvailableFoods = () => {

    const {foods,setFoods}=useContext(AuthContext)
    console.log('foods',foods)


    // const {isPending,isError, error, data:foods}=useQueries({
    //     queryKey:['foods'],
    //     queryFn:async ()=>{
    //         const res =await fetch('http://localhost:5014/food')
    //         return res.json();
    //     }
    // })

    // if(isPending){
    //     return <span className="loading loading-spinner text-primary"></span>
    // }
    // console.log(foods)

    useEffect(()=>{
        axios.get('http://localhost:5014/food',{withCredentials:true})
        .then(data=>{
            setFoods(data.data)
            console.log(data.data)
        })
    },[])

//search handler------------------------------
    const handleSearch=()=>{
        
        const data=document.getElementById('search').value
        console.log('ok',data.toLowerCase())
        const filteredFood= foods.filter(food=>food.foodName.toLowerCase().includes(data.toLowerCase())
            )
        console.log('filtered food',filteredFood)
        setFoods(filteredFood)
    }

    //sort handler according to date----------------------

    const handleSort=()=>{

        console.log('unordered',foods)
        // const gettime=foods.map(food=>console.log(Date.parse(food.expireDate)))
        // console.log('gettime',gettime)

        const orderedList=foods.slice().sort((a,b)=>Date.parse(b.expireDate)-Date.parse(a.expireDate))
        setFoods(orderedList)

        console.log('ordered',orderedList)
    }

    const handleLayout=()=>{

        const layoutChange=document.getElementById('layout');
        layoutChange.classList.remove('lg:grid-cols-3');
        layoutChange.classList.add('lg:grid-cols-2')
    }




    return (
        <div>

            {/* Search Button */}
            <div className="mt-6 flex justify-end">
                <div>
                    <button onClick={handleLayout} className="px-5 py-3 text- bg-[#8255EF] rounded-md mr-4 text-bold text-white">Change layout</button>
                </div>
            <div className="join">
            <input id="search" type="text" name="searched" className="input input-bordered join-item" placeholder="Search Food"/>
            <button onClick={handleSearch} className="btn join-item rounded-r-full bg-[#B7A2D7]">Search</button>
            </div>
            </div>

{/* sort according to date start */}
            <div>

            <motion.ul
    initial="hidden"
    animate="visible"
    variants={'item'}
  >
    <motion.li variants="item" />
    
    
  </motion.ul>


                <button onClick={handleSort}>Sort</button>
            </div>
{/* sort according to date end */}


              <div id="layout" className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-16">
            {foods?.map(food=><>


                <div className="card  bg-base-100 shadow-xl text-justify opacity-85">
                <figure><img className="max-h-[500px]" src={food.foodImage} alt="Shoes" /></figure>
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
                    <Link to={`/viewDetail/${food._id}`}>
                    <button className="bg-[#B7A2D7] px-4 py-2 rounded-md">View detail</button>
                    </Link>
                 
                </div>
                </div>
                 </div>
            


            </>)}
            
        </div>
        </div>
    );
};

export default AvailableFoods;