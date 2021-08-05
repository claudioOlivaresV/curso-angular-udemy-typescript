//secure operation

const persona1 = {
    nombre: 'Persona uno',

}

const persona2 = {
    nombre: 'Persona dos',
    hijos: ['hijo']
    
}

const imprimirHijos = ( pasajero ) => {
    const cantidad = pasajero.hijos?.length || 0;
    console.log(cantidad);
    
}

imprimirHijos(persona1)