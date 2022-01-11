import { Injectable } from '@angular/core';
import { Persona } from '../models/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  personas: Persona[] = []
  constructor() { }

  getAllPersonas(): Persona[] {
    let persona1 = new Persona("Hernan", "Borre", 28 )
    this.personas.push(persona1)
    this.personas.push(new Persona("Alejandro", "Fantino", 55 ))
    this.personas.push(new Persona("Nicky", "Nicole", 22 ))
    
    return this.personas
  }

  // solo un ejemplo de los servicios que se pueden ofrecer
  removePersona(persona:Persona):void {
    // TODO implement logic to remove a Persona
  }
}
