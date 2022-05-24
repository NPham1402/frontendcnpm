import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/FooterCustomer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";
import Promotion from "../../components/Promotion/Promotion";
import Propose from "../../components/Propose/Propose";
import Partner from "../../components/Partner/Partner";
import Advantage from "../../components/Advantage/Advantage";
import Explore from "../../components/Explore/Explore";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
        <Partner />
        <Advantage />
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
