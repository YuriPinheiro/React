import React from 'react'
import {Quadrado, Circulo} from './style.js'



function Personalizado(){
    return (

        <Quadrado>
            <Circulo>
                <h1 style={{margin: '9px'}}>Yuri</h1>
            </Circulo>
        </Quadrado>
    );
}

export default Personalizado