import React, {Fragment} from 'react' ;
import Header from './components/Header';
import Footer from './components/Footer';
import Productos from './components/Productos';

function App() {

  const fecha = new Date().getFullYear();
  return (
    <div className="App">
      <Fragment>
        <Header 
        titulo='Tienda Virtual ' />

        <Productos/>

        
        <Footer 
        fecha={fecha}
        />

      </Fragment> 
    </div>
  );
}

export default App;
