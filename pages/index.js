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
  
  const {data : imagenes}= await axios.get("http://localhost:3000/api/carousel");
  const {data : horarios}= await axios.get("http://localhost:3000/api/horarios");
  return {
    props : {
      imagenes,
      horarios
    }
  }
}

export default HomePage;
