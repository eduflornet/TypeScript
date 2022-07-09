/*
    ===== Código de TypeScript =====
*/
// Los decoradores sirven para cambiar las clases en el momento en que son definidas,
// Por ejemplo en Angular, en el momento que este compilando, se puede extender internamente las funcionalidades que queremos
// En Angular se utilizan mucho los decoradores para cambiar el comportamiento de las clases

export function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  };
}



@classDecorator
class MiSuperClase {
  public miPropiedad: string = 'ABC123';

  imprimir() {
      console.log('Hola Mundo');
  }
}


console.log( MiSuperClase );

const miClase = new MiSuperClase();

console.log( miClase.miPropiedad );