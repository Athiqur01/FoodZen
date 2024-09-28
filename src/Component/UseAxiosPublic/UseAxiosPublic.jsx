import axios from "axios"
const axiosSecure=axios.create({
    baseURL:'http://localhost:5014'
})

const useAxiosPublic = () => {
    return axiosSecure;
};

export default useAxiosPublic;