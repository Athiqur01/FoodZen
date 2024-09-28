import { Helmet } from "react-helmet";
import FeaturedFood from "../FeaturedFood/FeaturedFood";
import HolidaySpecial from "../HolidaySpecial/HolidaySpecial";
import Carosel from "../Carosel/Carosel";
import VolunteerOpportunities from "../VolunteerOpportunities/VolunteerOpportunities";
import HowWorks from "../HowWorks/HowWorks";


const Home = () => {
    return (
        <div>
            <Helmet><title>CodeZen | Home</title></Helmet>
            <Carosel></Carosel>
            <HowWorks></HowWorks>
            <FeaturedFood></FeaturedFood>
            <HolidaySpecial></HolidaySpecial>
            <VolunteerOpportunities></VolunteerOpportunities>
        </div>
    );
};

export default Home;