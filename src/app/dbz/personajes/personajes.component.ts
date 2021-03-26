import { Component, Input } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {
  @Input() personajes: Personaje[] = []; // Con esto se indica que personajes viene desde el componente padre

}
