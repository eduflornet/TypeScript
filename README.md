# TypeScript
- [Instalaciones recomendadas](https://gist.github.com/Klerith/607dd6bb60b5a70bc5e4d9c81ef6501e)
- [Código fuente base](https://github.com/Klerith/curso-angular-intro-typescript-ecmascript/releases/tag/v1.0.1)

Instructions: 

* Lo primero que debemos de hacer después de descargar el código es ejecutar el comando:

```
npm install
```
Ese comando descargará todos los módulos de node necesarios para ejecutar el proyecto.


* Cuando termine de instalar los node_modules, entonces podermos ejecutar el proyecto de con el siguiente comando

```
npm start
```
Para que eso funcione, recuerden que deben de ejecutar ese comando en el mismo directorio donde se encuentra el ```package.json```

### Cambiar el puerto
Por defecto, el puerto que configuré para este proyecto es el ```8081```, pero si necesitan cambiarlo porque pueda que ese puerto lo use su computadora, pueden cambiarlo abriendo el ```package.json``` >> scripts. Ahí verán la instrucción que lanza el servidor de desarrollo

```
"start": "webpack-dev-server --mode development --open --port=8081"
```

Simplemente cambian el puerto por el que ustedes necesiten y listo. (lógicamente graban los cambios antes de ejecutar el ```npm start``` nuevamente)

### Habilitar experimentalDecorators
En el fichero tsconfig habilitar ``` "experimentalDecorators": true ```


## Referencias


- [Destructuring](https://www.stevefenton.co.uk/2018/01/deep-typescript-destructuring/)
- [Decorators](https://www.typescriptlang.org/docs/handbook/decorators.html)
- [Optional chaining](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html)
  
