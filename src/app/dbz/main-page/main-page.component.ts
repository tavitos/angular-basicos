import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

/* interface Personaje {
  nombre: string;
  poder: number;
} */

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  /* personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ]; */

  // personajes: Personaje[] = [];

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  // Creación del getter
  /* get personajes():Personaje[]{
    return this.dbzService.personajes;
  } */

  /* agregarNuevoPersonaje( argumento: Personaje){
    // debugger; Pausa la ejecución del programa y muestra la pestaña Sources mostrando el código en donde esta la palabra debugger
    // console.log('Main page component');
    // console.log(argumento);
    this.personajes.push(argumento);
  } */

  /* cambiarNombre( event: any ){
    console.log( event.target.value );
    
  } */

  /* agregar(){
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }
    console.log(this.nuevo);

    // this.personajes.push(...)
    this.personajes.push(this.nuevo);
    // this.nuevo = { .... }
    this.nuevo = {nombre: '', poder: 0}
    
  } */

  // Lo de abajo en lo que se conoce como una inyección de dependencias
  // Es decir, se inyecta el servicio en éste componente.
  constructor() {}

}
