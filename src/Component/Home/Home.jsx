import { Helmet } from "react-helmet";
import FeaturedFood from "../FeaturedFood/FeaturedFood";
import HolidaySpecial from "../HolidaySpecial/HolidaySpecial";
import Carosel from "../Carosel/Carosel";


const Home = () => {
    return (
        <div>
            <Helmet><title>CodeZen | Home</title></Helmet>

            <Carosel></Carosel>
            <FeaturedFood></FeaturedFood>
            <HolidaySpecial></HolidaySpecial>
        </div>
    );
};

export default Home;