interface Reproducctor {
    volumen: number,
    segundo: number,
    cancion: string,
    detalles: Detalles
}

interface Detalles {
    autor: string,
    anio: number,
}

const reproductor: Reproducctor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'lala',
        anio: 2015
    }
}

const { volumen, segundo, detalles, detalles: { autor } } = reproductor
const { anio } = detalles;

console.log('EL volumen es' + volumen);

console.log('EL segundo es' + segundo);

console.log('EL autor es' + autor);

console.log('EL año es' + anio);

// desestructuracion arreglos

const dbz: string [] = ['Goku', 'Vegeta', 'Truks']
// const [ p1, p2, p3] = dbz;
const [ p1, , p3] = dbz;



console.log('Personaje 1' + p1);
console.log('Personaje 3' + p3);

