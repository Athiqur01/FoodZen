import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../../assets/codezen.png"


const Footer = () => {
    return (
        <div className="   ">
        <footer className="footer text-white  px-10 mx-auto bg-[#00006B] text-base-content pt-20 flex flex-col md:flex-row ">
  <nav className="text-white mx-auto text-black">
    <div className="flex flex-col space-y-4">
        <img className="max-w-20 rounded-md" src={logo} alt="" />
        <h6 className="footer-title text-white">FoodZen </h6> 
    </div>
    
    <p className="text-left text-white">Explore the mystique of the <br /> FoodZen | All Foods at our point, where <br />every detail invites fascinations <br /> and interpretation.</p>
    
  </nav> 
  <nav className="text-white mx-auto">
    <h6 className="footer-title text-white">Contact</h6> 
    <p className="text-left text-white">700 WE 15th Int Miami, FLR B379 <br />Call us FREE<a className="link link-hover text-left" href="">+1 (800) 990 6688</a>  <br />
<a className="link link-hover" >foodzenallfoods@gmail.com</a>
</p>
  </nav> 
  <nav className="text-white mx-auto ">
    <h6 className="footer-title text-white ">Social Links</h6> 
    <div className="flex space-x-4 text-2xl">
    <a className="link link-hover text-white "><FaFacebook /></a>
    <a className="link link-hover text-white "><FaLinkedin /></a>
    <a className="link link-hover text-white "><FaTwitter /></a>

    </div>
    
  </nav> 
  
  
</footer>
  <div className="bg-[#00006B] text-center ">
    <p className="text-white p-20">© 2018 Qode Interactive, All Rights Reserved</p>
  </div>
        </div>
    );
};

export default Footer;