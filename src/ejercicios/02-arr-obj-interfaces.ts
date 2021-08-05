// let habilidades :(boolean | string | number) [] = ['Bash', 'Counter', 100];
let habilidades : string [] = ['Bash', 'Counter'];

interface Personaje {
    nombre: string,
    hp: number,
    habilidades: string[],
    publoNatal?: string
}

const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['lala']
}

personaje.publoNatal = 'Pueblo'

console.table(personaje)
