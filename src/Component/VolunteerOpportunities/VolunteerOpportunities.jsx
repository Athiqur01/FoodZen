import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.png"
import img3 from "../../assets/Screenshot_1.png"

const VolunteerOpportunities = () => {
    


    return (
        <div>
            <hr/>
            <div className="my-8 md:my-14">
                <h2 className="mb-14 text-6xl font-bold text-center text-[#B7A2D7]">Volunteer Opportunities</h2>
                <div className="grid grid-cols-3 gap-6">

                     <div className="h-96 rounded-md shadow-2xl shadow-slate-600 p-2 bg-cover flex flex-col justify-center gap-4 items-center  " style={{ backgroundImage: `url(${img1})` }}>
                        <h2 className="text-2xl font-bold">Assist with food collection</h2>

                        <form >
                        <label className="form-control w-full max-w-xs">
                        <input type="text" name='donatorEmail' placeholder="share detail "  className="input input-bordered w-full max-w-xs" />
                        <input type="submit"  value="Contribute"  className="input input-bordered w-full max-w-xs" />
                        </label>
                        </form>

                        <button className="text-white font-bold px-4 py-2 max-w-64 bg-[#8255EF] rounded-md">Contribute</button>
                       
                     </div>

                     <div className="h-96 rounded-md shadow-2xl shadow-slate-600 p-2 bg-cover flex flex-col justify-center gap-4 items-center  " style={{ backgroundImage: `url(${img2})` }}>
                        <h2 className="text-2xl font-bold">Assist with food distribution</h2>
                        <button className="text-white font-bold px-4 py-2 max-w-64 bg-[#8255EF] rounded-md">Contribute</button>
                       
                     </div>
                     <div className="h-96 rounded-md shadow-2xl shadow-slate-600 p-2 bg-cover flex flex-col justify-center gap-4 items-center  " style={{ backgroundImage: `url(${img3})` }}>
                        <h2 className="text-2xl font-bold">Administrative Assistance</h2>
                        <button className="text-white font-bold px-4 py-2 max-w-64 bg-[#8255EF] rounded-md">Contribute</button>
                       
                     </div>

                     <div>

                     </div>
                     <div>

                     </div>
                </div>

            </div>
        </div>
    );
};

export default VolunteerOpportunities;