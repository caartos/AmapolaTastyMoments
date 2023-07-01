import NavigationBar from "../Components/NavigationBar/NavigationBar";
import Home from "../Components/Home/Home";
import axios from "axios";


const HomePage = ({imagenes, horarios}) => {
  
  return (
    <div>
      <NavigationBar />
      <Home imagenes={imagenes} horarios={horarios}/>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  
  const {data : horarios}= await axios.get(`https://amapola-carampi-gmailcom.vercel.app/api/horarios`);
  const {data : imagenes}= await axios.get(`https://amapola-carampi-gmailcom.vercel.app/api/carousel`);
  return {
    props : {
      imagenes,
      horarios
    }
  }
}

export default HomePage;
