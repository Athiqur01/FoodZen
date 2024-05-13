import { Helmet } from "react-helmet";
import FeaturedFood from "../FeaturedFood/FeaturedFood";
import HolidaySpecial from "../HolidaySpecial/HolidaySpecial";


const Home = () => {
    return (
        <div>
            <Helmet><title>CodeZen | Home</title></Helmet>

            <h2>This is home</h2>
            <FeaturedFood></FeaturedFood>
            <HolidaySpecial></HolidaySpecial>
        </div>
    );
};

export default Home;