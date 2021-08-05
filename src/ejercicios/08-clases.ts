import { NumericLiteral } from "typescript";

class Persona {
    constructor(public nombre: string, public direccion: string){}
}

class Heroe  {
    // alterEgo: string;
    // edad: number;
    // nombreReal: number;

    constructor(
        public alterEgo: string,
        public edad: number,
  
    ) {
    }
}



const ironMan = new Heroe('Ironman', 23, );
console.log(ironMan);
