import { Component } from '@angular/core';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {
  // @Input() personajes: Personaje[] = []; // Con esto se indica que personajes viene desde el componente padre

  get personajes() {
    return this.dbzService.personajes;
  }
  constructor( private dbzService: DbzService) {}
}
