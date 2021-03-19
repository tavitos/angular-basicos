import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{
  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor', 'Capitán América'];
  heroeBorrado: string = ''; // Declaración de la propiedad heroeBorrado

  borrarHeroe() {
    /* const heroeBorrado = this.heroes.shift();
    console.log(heroeBorrado); */
    this.heroeBorrado = this.heroes.shift() || ''; // Referencia a la propiedad que retorna el elemento eliminado o undefined
  }
}
