import React, {Component,Fragment} from 'react';
import Producto from './Producto';

class Productos extends Component {
    state={
        pruductos:[
            {id:1, name: 'Camisa ReactJS', precio:10000},
            {id:2, name: 'Camisa GOT', precio:10000},
            {id:3, name: 'Camisa Sebastian', precio:10000},
            {id:4, name: 'Camisa Anabelle', precio:10000}
        ]
    }
    render() {
        const{productos}=this.state;
        console.log(productos);
        return (
            <Fragment>
                <h1>Lista de Productos</h1>
                {productos.map(producto =>(
                    <Producto 
                    key={producto.id}
                    producto={producto}
                />
                ))}
            </Fragment>
            
        );
    }
}

export default Productos;