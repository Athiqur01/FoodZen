import { useQueries } from "@tanstack/react-query";
import { data } from "autoprefixer";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";




const AvailableFoods = () => {

    

    const {foods,setFoods}=useContext(AuthContext)
    //console.log('foods',foods)
    const [expire,setExpire]=useState(null)


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
        axios.get('http://localhost:5014/food')
        .then(data=>{
            setFoods(data.data)
            
        })
    },[setFoods])

//search handler------------------------------
    const handleSearch=()=>{
        
        const data=document.getElementById('search').value
        //console.log('ok',data.toLowerCase())
        const filteredFood= foods.filter(food=>food.foodName.toLowerCase().includes(data.toLowerCase())
            )
        //console.log('filtered food',filteredFood)
        setFoods(filteredFood)
    }

    //sort handler according to date----------------------

    const handleSort=()=>{

       // console.log('unordered',foods)
        // const gettime=foods.map(food=>console.log(Date.parse(food.expireDate)))
        // console.log('gettime',gettime)

        const orderedList=foods.slice().sort((a,b)=>Date.parse(b.expireDate)-Date.parse(a.expireDate))
        setFoods(orderedList)

        
        //console.log('ordered',orderedList)
    }
//setFoods(lowExpire)
    const handleLowExpire=()=>{
        const orderedList=foods.slice().sort((a,b)=>Date.parse(a.expireDate)-Date.parse(b.expireDate))
        setFoods(orderedList)  

    }





    const handleLayout=()=>{

        const layoutChange=document.getElementById('layout');
        layoutChange.classList.remove('lg:grid-cols-3');
        layoutChange.classList.add('lg:grid-cols-2')
    }




    return (
        <div>
            <Helmet><title>CodeZen | Available Food</title></Helmet>

            {/* Search Button */}
          <div>
                <div></div>
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
            <div className="mx-auto text-center">

            <div className="dropdown dropdown-bottom">
  <div tabIndex={0} role="button" className="btn m-1 bg-[#8255EF] w-32 text-white ">Expire Date  </div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu  shadow rounded-md   w-32 bg-[#8255EF] ">
    <button onClick={handleSort}><li><a className="text-white">High Expiry </a></li></button>
   <button onClick={handleLowExpire}> <li><a className="text-white">Low Expiry </a></li></button>
    
  </ul>
</div>
     
            </div>
          </div>
{/* sort according to date end */}


              <div id="layout" className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-16">
            {foods?.map(food=><>

                <motion.div
                 className="flex gap-3 shadow-xl p-2 hover:scale-y-105 transition duration-500"
                 key={food._id}
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:2.5}}
                 >
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
            </motion.div>



                {/* <motion.div className="card  bg-base-100 shadow-xl text-justify opacity-85"
                key={food._id}
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:2.5}}
                >
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
                 </motion.div> */}
            


            </>)}
            
        </div>
        </div>
    );
};

export default AvailableFoods;