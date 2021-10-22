// import logo from './logo.svg';
// import FeedbackMessage from './FeedBackMessage';
// import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import { ItemListContainer } from './component/container/ItemListContainer';
// va sin llaves porq cuando lo exportas como default no lleva
import  {Navbar}  from './component/NavBar';
import { Titulo } from './Titulo';
// import { Image} from "react-bootstrap"

// import {Imagen} from "./component/CartWidget"

//

// const Titulo = ({titulo})=>{
//   return(
//     <>
//     <h2>{titulo}</h2>
//     </>
//   )
// }

 const App = () => {
 
    return(
      <Titulo titulo="">
        
        <ItemListContainer title ="Bienvenido al carrito de compras"/>
          <h2> </h2>
        <Navbar/>
         
       
          
       </Titulo> 
      
    )

}

export default App;