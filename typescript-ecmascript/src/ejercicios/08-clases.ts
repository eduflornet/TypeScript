/*
    ===== Código de TypeScript =====
*/
export class PersonaNormal {

    constructor(
        public nombre: string,
        public direccion: string
    ) { }

}


class Heroe extends PersonaNormal {

    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ) {
        super(nombreReal, 'New York, USA');
    }

}

const heroe = new Heroe('Ironman', 45, 'Tony');
const { alterEgo, edad, nombreReal } = heroe

console.log('alterEgo: ', alterEgo);
console.log('edad: ', edad);
console.log('nombreREal: ', nombreReal);