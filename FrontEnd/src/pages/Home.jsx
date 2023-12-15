import BestSeller from "../Small Components/BestSeller";
import Footer from "../Small Components/Footer";
import NewCollection from "../Small Components/NewCollection";
import OurProducts from "../Small Components/OurProducts";
import ReViews from "../Small Components/ReViews";
import TagLine from "../Small Components/TagLine";
import TreandOfTheDay from "../Small Components/TreandOfTheDay";

const Home = () => {
  return (
    <>
      <div className=" flex relative overflow-y-scroll overflow-x-hidden flex-wrap HomeMainDiv h-[97vh] ">
        <TagLine/>
        <NewCollection/>
        <BestSeller/>
        <OurProducts/>
        <TreandOfTheDay/>
        <ReViews/>
        <Footer/>
      </div>
    </>
  );
};

export default Home;
